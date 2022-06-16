import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';

function Profile() {
  const [user, setUser] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, [auth]);

  return user ? <h1>{user.displayName}</h1> : <h1>Not Logged In</h1>;
}

export default Profile;
