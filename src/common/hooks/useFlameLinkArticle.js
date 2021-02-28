import React from 'react';
import { firestore, storage } from 'config/firebase/config';

const getDownloadURLFromRef = (ref) =>
	new Promise((resolve, reject) => {
		ref.onSnapshot(async (snap) => {
			const pathReference = storage.ref(
				`flamelink/media/${snap.data().file}`
			);
			const downloadURL = await pathReference.getDownloadURL();

			resolve(downloadURL);
		});
	});

const useFlameLinkArticle = (id) => {
	const [doc, setDoc] = React.useState({});

	React.useEffect(() => {
		const composeArticle = async (id) => {
			const fl_contentRef = firestore.collection('fl_content');
			const articlesSnap = await fl_contentRef.doc(id).get();
			const article = articlesSnap.data();
			if (!article) return;

			const galeryImages = article.galeryImages.map((el) =>
				getDownloadURLFromRef(el)
			);

			Promise.all(galeryImages).then((res) =>
				setDoc({
					galeryImages: res,
					createdAt: article.createdAt,
					header: article.header,
					subHeader: article.subHeader,
					body: article.body,
				})
			);
		};

		composeArticle(id);
	}, [id]);

	return { doc };
};

export default useFlameLinkArticle;
