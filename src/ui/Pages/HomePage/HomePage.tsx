import { useEffect } from "react";
import { useAuth } from "../../../utils/hooks/useAuth";

export const HomePage = () => {
  const { createUserMutation } = useAuth();
  useEffect(() => {
    createUserMutation({
      email: "test@gmail.com",
      password: "test123",
    });
  }, []);

  return (
    <div>
      <p>info o teretani (ukupno termina ovaj mesec iskoriscenih otprilike)</p>
      <p>info o teretani (ukupno korisnika)</p>
      <p>info o teretani (ukupno popunjenih termina)</p>
    </div>
  );
};
