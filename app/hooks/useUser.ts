import { useEffect, useState } from 'react';
import { getUser, User } from '~/auth';

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    getUser().then((user) => setUser(user));
  }, []);
  return user;
}
