import { useState, useEffect, useContext } from "react";
import {getUserByUserId} from "../services/firebase"
import UserContext from "../context/user";

export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjByUserId() {
      const [response] = await getUserObjByUserId(user.uid);
      setActiveUser({ ...response });
    }
    if (user && user.uid) {
      getUserObjByUserId();
    }
  }, [user]);

  return { user: activeUser };
}
