import { getOneUser } from "../services/user";
import { useState } from "react";
function User() {
  const [TheUser, setUser] = useState("");
  const handleUser = async () => {
    const data = await getOneUser(4);
    setUser(data);
  };
  return (
    <div>
      <button onClick={handleUser}>Ver un Usuario</button>
      <p>{TheUser.email}</p>
    </div>
  );
}

export default User;
