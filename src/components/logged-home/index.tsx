import { useStore } from "zustand";
import { useUserStore } from "../../store/user-store/state";
import { Items } from "../items";
import { SLoggedHome } from "./styles";

export const LoggedHome = () => {
  const store = useStore(useUserStore);

  return (
    <SLoggedHome>
      {store.user?.isAdmin ? (
        <>
          <h1>Bem Vindo(A), {store.user.username}</h1>
          <h2>Solicitações aceitas:</h2>
        </>
      ) : (
        <Items text="Solicitar"></Items>
      )}
    </SLoggedHome>
  );
};
