import { useStore } from "zustand";
import { SStudent } from "./styles";
import { useUserStore } from "../../../../store/user-store/state";
import { log } from "../../../../development/log";

export const StudentPage = () => {
  const { user, setUser } = useStore(useUserStore);
  log(user);

  return (
    <SStudent className="home-page">
      <header className="home-header"></header>
      <aside className="home-aside"></aside>
      <section className="home-section">
        <h1 className="home-section-title">Bem vindo(a), {user?.username}</h1>
      </section>
    </SStudent>
  );
};
