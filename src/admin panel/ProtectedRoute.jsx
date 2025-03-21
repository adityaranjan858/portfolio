import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { auth } from "../firebase";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false); // Stop loading once auth state is determined
    });

    return () => unsubscribe(); // Cleanup listener when component unmounts
  }, []);

  if (loading) return <div>Loading...</div>; // Prevent flickering

  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
