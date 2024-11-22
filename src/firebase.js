import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyA-RDDAtciOoj1H7UT4jbgJFPz9YFvlNqI",
  authDomain: "netflix-clone-48087.firebaseapp.com",
  projectId: "netflix-clone-48087",
  storageBucket: "netflix-clone-48087.firebasestorage.app",
  messagingSenderId: "426964034823",
  appId: "1:426964034823:web:021434ab62287f8a60d1a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
const db=getFirestore(app)

const signUp= async (name,email,password)=>{
    try {
        const res=await createUserWithEmailAndPassword(auth,email,password)
        const user=res.user
        addDoc(collection(db,'user'),{
            uid:user.uid,
            name,
            authProvider:'local',
            email
        })
    } catch (error) {
        console.log(error);
        toast.error(error.code)
    }


}

const logIn=async (email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error);
        toast.error(error.code)
    }
}

const logOut=()=>{
    signOut(auth)
}

export {auth,db,logIn,logOut,signUp}