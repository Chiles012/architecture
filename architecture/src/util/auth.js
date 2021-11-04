import firebase from "../config/firebase.config";
import { facebookProvider, googleProvider } from "./provider";

export const createUser = async user => await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
export const SignIn = async user => await firebase.auth().signInWithEmailAndPassword(user.email, user.password);
export const currentUser = async () => await firebase.auth().currentUser;
export const updateCurrentUser = async (user, data) => await user.updateProfile({...data});
export const verificationUser = async () => await firebase.auth().currentUser.sendEmailVerification();
export const verifyEmail = async () => await firebase.auth().currentUser.emailVerified;
export const signOut = async () => await firebase.auth().signOut();
export const signInWithGoogle = async () => await firebase.auth().signInWithPopup(googleProvider);
export const signInWithFacebook = async () => await firebase.auth().signInWithPopup(facebookProvider);
