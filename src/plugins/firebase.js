import firebase from "firebase";

const config = {
  projectId: "portforio-5f8ff"
};
firebase.initializeApp(config);
export const functions = firebase.functions();
