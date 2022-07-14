import { getApp, getApps, initializeApp } from 'firebase/app'

const returnFirebaseApp = () => {
  if (!getApps().length) {
    return initializeApp(JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG))
  }
  return getApp()
}

export default returnFirebaseApp
