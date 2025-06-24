// src/utils/auth.ts
export const isAdmin = (): boolean => {
  const userData = localStorage.getItem("user");
  // console.log("Retrieved userData from localStorage:", userData);

  if (!userData) {
    // console.log("No user data found.");
    return false;
  }

  try {
    const user = JSON.parse(userData);
    // console.log("Parsed user object:", user);

    const isAdminUser = user?.admin === true;
    // console.log("Is user admin?", isAdminUser);

    return isAdminUser;
  } catch (error) {
    console.error("Error parsing user data:", error);
    return false;
  }
};

//   const [user, setUser] = useState(null);
// useEffect(() => {
//   const storedUser = localStorage.getItem("user");
//   if (storedUser) {
//     setUser(JSON.parse(storedUser));
//   }
// }, []);

//  user && user.admin ?
