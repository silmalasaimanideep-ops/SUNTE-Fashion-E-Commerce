import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user.currentUser);
  const location = useLocation(); // Now used inside component

  if (!user) {
    return (
      <Navigate 
        to="/login" 
        state={{ from: location }} // Preserves attempted path
        replace 
      />
    );
  }
  return children;
};

export default ProtectedRoute;