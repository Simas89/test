import React from 'react';
import { storage, firestore, timestamp } from 'config/firebase/config';

const useStorage = (file) => {
	const [progress, setProgress] = React.useState(0);
	const [error, setError] = React.useState(null);
	const [url, setUrl] = React.useState(null);

	React.useEffect(() => {
		const storageRef = storage.ref(file.name);
		const collectionRef = firestore.collection('images');

		storageRef.put(file).on(
			'state_changed',
			(snap) => {
				let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
				setProgress(percentage);
			},
			(err) => {
				setError(err);
			},
			async () => {
				const url = await storageRef.getDownloadURL();
				const createdAt = timestamp();

				collectionRef.add({
					url,
					createdAt,
				});
				setUrl(url);
			}
		);
	}, [file]);

	return { progress, url, error };
};

export default useStorage;
