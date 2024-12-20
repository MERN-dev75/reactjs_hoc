import React, { useEffect, useState } from "react";
import axios from "axios";

const withAuthToken = (WrappedComponent) => {
  return function AuthenticatedComponent(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const checkAndRefreshToken = async () => {
        try {
          const accessToken = sessionStorage.getItem("accessToken");
          const refreshToken = sessionStorage.getItem("refreshToken");

          if (!accessToken) {
            console.warn("No access token found. Redirecting to login.");
            redirectToLogin();
            return;
          }

          const isValid = await verifyAccessToken(accessToken);

          if (isValid) {
            setIsAuthenticated(true);
          } else if (refreshToken) {
            console.log("Access token expired. Attempting to refresh...");
            const newAccessToken = await refreshAccessToken(refreshToken);
            if (newAccessToken) {
              sessionStorage.setItem("accessToken", newAccessToken);
              setIsAuthenticated(true);
            } else {
              redirectToLogin();
            }
          } else {
            console.warn("No refresh token found. Redirecting to login.");
            redirectToLogin();
          }
        } catch (error) {
          console.error("Error during token verification:", error);
          redirectToLogin();
        } finally {
          setLoading(false);
        }
      };

      checkAndRefreshToken();
    }, []);

    const verifyAccessToken = async (token) => {
      try {
        // Example: Make an API call to verify the access token
        const response = await axios.post("http://localhost:4000/api/verfyJWT", { token },
         { headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
        );
        return response.status === 200; // Token is valid
      } catch (error) {
        return false; // Token is invalid or expired
      }
    };

    const refreshAccessToken = async (refreshToken) => {
      try {
        const response = await axios.post("http://localhost:4000/api/refreshAccessToken", { refreshToken });
        return response.data.accessToken; // Return the new access token
      } catch (error) {
        console.error("Failed to refresh access token:", error);
        return null;
      }
    };

    const redirectToLogin = () => {
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("refreshToken");
      // window.location.href = "/login"; // Redirect to login page
    };

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
      return <div>Unauthorized</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuthToken;
