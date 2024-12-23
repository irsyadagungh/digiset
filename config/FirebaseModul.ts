/* eslint-disable @typescript-eslint/no-unused-vars */
import { FirebaseService } from "./FirebaseService";
import { collection, doc, getDoc, setDoc, deleteDoc, updateDoc, Firestore, query, where, getDocs } from "firebase/firestore";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


class FirestoreRepository {
  private firestore: Firestore;
  private auth: Auth;

  constructor(firebaseService: FirebaseService) {
    this.firestore = firebaseService.getFirestore();
    this.auth = firebaseService.getAuth();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async addDocument(collectionName: string, documentId: string, data: object) {
    const docRef = doc(this.firestore, collectionName, documentId);
    await setDoc(docRef, data);
  }

  async getDocument(collectionName: string, documentId: string) {
    const docRef = doc(this.firestore, collectionName, documentId);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      return snapshot.data();
    } else {
      console.warn("No such document!");
      return null;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async getDataByField(collectionName: string, field: string, value: string): Promise<any[]> {
    try {
      const q = query(collection(this.firestore, collectionName), where(field, "==", value));
      const querySnapshot = await getDocs(q);
      const results = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return results;
    } catch (error) {
      console.error("Error fetching data by field:", error);
      throw new Error("Failed to fetch data by field.");
    }
  }
  async updateDocument(collectionName: string, documentId: string, data: Partial<Record<string, object>>) {
    const docRef = doc(this.firestore, collectionName, documentId);
    try {
      await updateDoc(docRef, data);
    } catch (error) {
      console.error("Failed to update document:", error);
      throw error;
    }
  }

  async deleteDocument(collectionName: string, documentId: string) {
    const docRef = doc(this.firestore, collectionName, documentId);
    try {
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Failed to delete document:", error);
      throw error;
    }
  }

  async signin(email: string, password: string) {
    try {
      
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      
      return userCredential.user;
    } catch (error) {
      console.error("Signup failed:", error);
      throw error;
    }
  }
  async signup(email: string, password: string, username: string) {
    try {
      
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
       
      const userId = userCredential.user.uid;
      // const docRef = doc(this.firestore, 'user',userId);
      // await setDoc(docRef, {'username':username, 'wallet_id' : userId, 'email' : email});

      const docRefs = doc(this.firestore, 'User', userId);
      await setDoc(docRefs, {'username':username, 'wallet_id' : userId, 'email' : email});

      //await this.addDocument("users", userId, { email, username });

      console.log("Signup successful!");
      return userCredential.user;
    } catch (error) {
      console.error("Signup failed:", error);
      throw error;
    }
  }
}

export default FirestoreRepository;
