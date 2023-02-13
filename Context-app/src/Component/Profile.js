import { useStateValue } from "../StateProvider/StateProvider";

function Profile() {
  const [{ logIndata }, dispatch] = useStateValue();

  return (
    <div>
      <h1>Hi {logIndata.userName}</h1>
    </div>
  );
}

export default Profile;
