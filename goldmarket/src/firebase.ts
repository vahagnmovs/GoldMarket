import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, setDoc, addDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyA-xFalv4pTSNOzLF94b_UzAfO0FtRshZ4',
	authDomain: 'goldmarket2022-2.firebaseapp.com',
	projectId: 'goldmarket2022-2',
	storageBucket: 'goldmarket2022-2.appspot.com',
	messagingSenderId: '835428428435',
	appId: '1:835428428435:web:edb7241c2da6257d6fbb66',
};

// type ProductsType = {
//     id: string,
//     name: string,
//     Email: string
// }

// init firebase app
const app = initializeApp(firebaseConfig);
// // init services
// const db = getFirestore(app)
// //  collection ref
// const colRef = collection(db, "products")
// // get collection data
// getDocs(colRef)
//     .then((snapshot) => {
//         let products: ProductsType[] = [];
//         snapshot.docs.forEach((doc) => {
//             products.push({
//                 ...doc.data(),
//                 id: doc.id,
//                 name: doc.data().name,
//                 Email: doc.data().Email,
//             })
//         })
//         console.log(products)
//     })
//
// // push data to firebase
// const docRef = addDoc(collection(db, "products"), {
//     name: "Sipan",
//     email: "email@Sipan"
// })



