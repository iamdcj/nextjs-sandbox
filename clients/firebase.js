import { getApp, getApps, initializeApp } from "firebase/app";

 const returnFirebaseApp = () => {
  return initializeApp(
    process.env.NEXT_PUBLIC_FIREBASE_CONFIG
      ? JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG)
      : ""
  );
};


export default returnFirebaseApp