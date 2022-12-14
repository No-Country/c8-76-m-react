import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  setDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBytes,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: "G-KT142N632C",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
const storage = getStorage(app);

//Funciones de DB

export const searchUserById = async (id) => {
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("id", "==", id));
  const querySnapshot = await getDocs(q);
  const infoUser = querySnapshot.docs.map((doc) => doc.data());

  return infoUser;
};

export const getInfoUser = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  const infoUser = querySnapshot.docs.map((doc) => doc.data());
  /* console.log(referencia); */
  return infoUser;
};

//UPDATE
export const updateUser = async (user) => {
  /* const userRef = collection(db, "user");
  await updateDoc(doc(userRef, id), obj); */
  try {
    const collectionRef = collection(db, "users");
    const docRef = doc(collectionRef, user.id);
    await setDoc(docRef, user);
  } catch (error) {
    console.log(error);
  }
};

export const saveUser = async (user) => {
  /* await setDoc(collection(db, "users"), user); */
  const collectionRef = collection(db, "users");
  const docRef = doc(collectionRef, user.id);
  await setDoc(docRef, user);
};

export const validateUserExists = async (user) => {
  const usersInDb = await getInfoUser();
  if (!usersInDb.find((users) => users.id === user.id)) {
    saveUser(user);
    console.log("user registrado!");
  } else {
    console.log("Ya el usuario esta registrado");
  }
};
