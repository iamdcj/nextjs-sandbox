import { getApp, getApps, initializeApp } from "firebase/app";

 const returnFirebaseApp = () => {
  console.log(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);

  return initializeApp(
    process.env.NEXT_PUBLIC_FIREBASE_CONFIG
      ? JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG)
      : ""
  );
};


export default returnFirebaseApp