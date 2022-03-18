/* eslint-disable @next/next/no-img-element */
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { withSSRGuest } from "../utils/withSSRGuest";
import styles from "./Home.module.scss";
import toast from "react-hot-toast";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  async function validateForm() {
    if (email && password) {
      const data = {
        email,
        password,
      };
      await signIn(data);
    } else {
      toast.error("Está faltando algumas informações.");
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <>
      <img src="/logo.svg" alt="logo" className={styles.logo} />
      <img src="/vector-l.svg" alt="bubble" className={styles.bubble_left} />
      <img src="/vector-r.svg" alt="bubble" className={styles.bubble_right} />
      <h1 className={styles.title}>Sign In</h1>
      <form onSubmit={handleSubmit} className={styles.container}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button type="submit" onClick={validateForm}>
          Entrar
        </button>
      </form>
    </>
  );
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
