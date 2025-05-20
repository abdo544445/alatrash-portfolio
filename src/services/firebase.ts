import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  doc, 
  addDoc, 
  getDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy 
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "alatrash-portfolio.firebaseapp.com",
  projectId: "alatrash-portfolio",
  storageBucket: "alatrash-portfolio.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Authentication
export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

// Project CRUD Operations
export const getProjects = async () => {
  try {
    const projectsCollection = collection(db, 'projects');
    const projectsQuery = query(projectsCollection, orderBy('createdAt', 'desc'));
    const projectsSnapshot = await getDocs(projectsQuery);
    
    return projectsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    throw error;
  }
};

export const getProject = async (id: string) => {
  try {
    const projectDoc = doc(db, 'projects', id);
    const projectSnapshot = await getDoc(projectDoc);
    
    if (projectSnapshot.exists()) {
      return {
        id: projectSnapshot.id,
        ...projectSnapshot.data()
      };
    } else {
      throw new Error('Project not found');
    }
  } catch (error) {
    throw error;
  }
};

export const addProject = async (projectData: any) => {
  try {
    const projectsCollection = collection(db, 'projects');
    const docRef = await addDoc(projectsCollection, {
      ...projectData,
      createdAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    throw error;
  }
};

export const updateProject = async (id: string, projectData: any) => {
  try {
    const projectDoc = doc(db, 'projects', id);
    await updateDoc(projectDoc, {
      ...projectData,
      updatedAt: new Date()
    });
    return true;
  } catch (error) {
    throw error;
  }
};

export const deleteProject = async (id: string) => {
  try {
    const projectDoc = doc(db, 'projects', id);
    await deleteDoc(projectDoc);
    return true;
  } catch (error) {
    throw error;
  }
};

// File Upload
export const uploadProjectImage = async (file: File) => {
  try {
    const storageRef = ref(storage, `project-images/${Date.now()}_${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    throw error;
  }
};

export { auth, db, storage };