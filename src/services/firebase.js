import firebase from 'firebase';
import state from './../redux/index';
import { AuthTypes } from './../redux/types';

const firebaseConfig = {
	apiKey: 'AIzaSyBO7FziEBWOgDQ84U4Vbjnp6Vhww2zz9Qo',
	authDomain: 'graphic-abbey-247609.firebaseapp.com',
	// databaseURL: 'https://PROJECT_ID.firebaseio.com',
	projectId: 'graphic-abbey-247609',
	// storageBucket: 'PROJECT_ID.appspot.com',
	// messagingSenderId: 'SENDER_ID',
	// appId: 'APP_ID',
	// measurementId: 'G-MEASUREMENT_ID',

	// databaseURL: '<your-database-url>',
	storageBucket: 'gs://graphic-abbey-247609.appspot.com',
};

const firebaseController = firebase.initializeApp(
	firebaseConfig,
	'React & Firebase'
);

const auth = firebaseController.auth();
const db = firebaseController.firestore();
const buckets = firebaseController.storage().ref();
// buckets.put();

auth.onAuthStateChanged((user) => {
	if (user) {
		console.log('user worker', user);
		state.dispatch({ type: AuthTypes.SIGN_IN_SUCCESS, payload: { user } });
	} else {
	}
});

export class FireStore {
	static getProducts() {
		return db
			.collection('products')
			.get()
			.then((snapshot) =>
				snapshot.docs.map((doc) => Object.assign(doc.data(), { id: doc.id }))
			);
	}

	static createProduct(values) {
		return db.collection('products').add(values);
	}
}

export class FireBucket {
	static async uploadFile(file) {
		return buckets.child(`images/${file.name}`).put(file, {
			contentType: file.type,
		});
	}
}

export class FireAuth {
	/**
	 * @param email {string}
	 * @param password {string}
	 * @returns {Promise<firebase.auth.UserCredential>}
	 */
	static signIn(email, password) {
		return firebaseController
			.auth()
			.signInWithEmailAndPassword(email, password);
	}

	/**
	 * @param email {string}
	 * @param password {string}
	 * @returns {Promise<firebase.auth.UserCredential>}
	 */
	static signUp(email, password) {
		return firebaseController
			.auth()
			.createUserWithEmailAndPassword(email, password);
	}

	/**
	 * @param email {string}
	 * @param password {string}
	 * @returns {Promise<firebase.auth.UserCredential>}
	 */
	static signUp(email, password) {
		return firebaseController
			.auth()
			.createUserWithEmailAndPassword(email, password);
	}

	/**
	 * logout
	 * @returns {Promise<void>}
	 */
	static logout() {
		return firebaseController.auth().signOut();
	}
}

export default firebaseController;
