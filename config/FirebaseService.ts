import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
}

export class FirebaseService {
  private static instance: FirebaseService;
  private app: FirebaseApp;
  private firestore: Firestore;
  private auth: Auth;

  private constructor(config: FirebaseConfig) {
    this.app = initializeApp(config);
    this.firestore = getFirestore(this.app);
    this.auth = getAuth(this.app);
  }

  public static getInstance(config: FirebaseConfig): FirebaseService {
    if (!FirebaseService.instance) {
      FirebaseService.instance = new FirebaseService(config);
    }
    return FirebaseService.instance;
  }

  public getFirestore(): Firestore {
    return this.firestore;
  }

  public getAuth(): Auth {
    return this.auth;
  }
}
