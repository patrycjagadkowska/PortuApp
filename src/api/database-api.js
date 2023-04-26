import { getFirestore } from "firebase/firestore";
import { app } from './firebase-config';

export const database = getFirestore(app);