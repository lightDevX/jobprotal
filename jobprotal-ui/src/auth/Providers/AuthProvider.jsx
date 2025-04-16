import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import auth from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Track auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Create user with name, email, password
  const createUser = async (name, email, password) => {
    setLoading(true);
    try {
      // 1. Create user account
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      // 2. Update user profile with name
      await updateProfile(userCredential.user, {
        displayName: name,
      });

      // 3. Update local user state
      setUser({ ...userCredential.user, displayName: name });

      console.log(userCredential);

      return userCredential;
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    setLoading(true);
    try {
      return await signOut(auth);
    } finally {
      setLoading(false);
    }
  };

  // Context value
  const authInfo = {
    user,
    loading,
    createUser,
    logout,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
