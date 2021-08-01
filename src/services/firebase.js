import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBO7FziEBWOgDQ84U4Vbjnp6Vhww2zz9Qo',
	// authDomain: 'PROJECT_ID.firebaseapp.com',
	// databaseURL: 'https://PROJECT_ID.firebaseio.com',
	projectId: 'graphic-abbey-247609',
	// storageBucket: 'PROJECT_ID.appspot.com',
	// messagingSenderId: 'SENDER_ID',
	// appId: 'APP_ID',
	// measurementId: 'G-MEASUREMENT_ID',
};

const firebaseController = firebase.initializeApp(firebaseConfig);

firebaseController.auth().onAuthStateChanged((user) => {
	if (user) {
		console.log('user worker', user);
	} else {
	}
});

/**
 * @param email {string}
 * @param password {string}
 * @returns {Promise<firebase.auth.UserCredential>}
 */
export function signIn(email, password) {
	return firebaseController.auth().signInWithEmailAndPassword(email, password);
}

/**
 * @param email {string}
 * @param password {string}
 * @returns {Promise<firebase.auth.UserCredential>}
 */
export function signUp(email, password) {
	return firebaseController
		.auth()
		.createUserWithEmailAndPassword(email, password);
}

export function logout() {
	return firebaseController.auth().signOut();
}

export default firebaseController;
