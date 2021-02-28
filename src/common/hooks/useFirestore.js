import React from 'react';
import { firestore } from 'config/firebase/config';

const useFirestore = (collection) => {
	const [docs, setDocs] = React.useState([]);

	React.useEffect(() => {
		const unsub = firestore
			.collection(collection)
			.orderBy('createdAt', 'desc')
			.limit(6)
			.onSnapshot((snap) => {
				let documents = [];
				snap.forEach((el) => {
					documents.push({
						...el.data(),
						id: el.id,
					});
				});
				setDocs(documents);
			});

		return () => unsub();
	}, [collection]);

	return { docs };
};

export default useFirestore;
