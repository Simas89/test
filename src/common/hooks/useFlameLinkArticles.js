import React from 'react';
import { firestore, storage } from 'config/firebase/config';

const getArticles = async () => {
	const fl_contentRef = firestore.collection('fl_content');
	const articlesSnap = await fl_contentRef
		.where('schemaName', '==', 'article')
		.get();

	let aricles = [];

	articlesSnap.forEach((doc) => {
		aricles.push(doc.data());
	});

	return aricles;
};
const formatSingleArticle = async (article) => {
	const coverImageRef = article.coverImage[0];
	const downloadURL = await getDownloadURLFromRef(coverImageRef);

	return {
		schemaName: 'article',
		id: article.id,
		createdAt: article.createdAt,
		header: article.header,
		subHeader: article.subHeader,
		galeryImages: article.galeryImages.length,
		minRead: article.body.length / 500,
		coverImage: downloadURL,
	};
};

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

const useFlameLinkArticles = () => {
	const [docs, setDocs] = React.useState([]);

	React.useEffect(() => {
		const composeArticles = async () => {
			const aricles = await getArticles();

			const parsedAricles = aricles.map((el) => {
				return formatSingleArticle(el);
			});

			Promise.all(parsedAricles).then((res) => setDocs(res));
		};

		composeArticles();
	}, []);

	return { docs };
};

export default useFlameLinkArticles;
