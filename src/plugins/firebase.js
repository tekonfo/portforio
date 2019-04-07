import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDPEM79iId6trqH3Yzb0Eh0Tp0on5_kKAY",
  projectId: "portforio-5f8ff"
};
firebase.initializeApp(config);
export const functions = firebase.functions();
