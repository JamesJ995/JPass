import { initializeApp, getApps, getApp, type FirebaseApp, type FirebaseOptions } from 'firebase/app'
import { initializeAuth, indexedDBLocalPersistence, type Auth } from 'firebase/auth'

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ?? '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ?? '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ?? '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ?? '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID ?? '',
}

let auth: Auth | null = null

export function getFirebaseAuth(): Auth {
  if (!auth) {
    if (!firebaseConfig.apiKey) {
      throw new Error('Firebase config missing. Copy .env.example to .env and set the VITE_FIREBASE_* values.')
    }
    const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig)
    auth = initializeAuth(app, { persistence: indexedDBLocalPersistence })
  }
  return auth
}
