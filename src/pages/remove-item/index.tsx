import { useStore } from "zustand";
import { Items } from "../../components/items";
import { useUserStore } from "../../store/user-store/state";
import { ItemType } from "../../store/user-store/types/item";

export const RemoveItem = () => {
  const store = useStore(useUserStore);

  const remove = (item: ItemType) => {
    store.removeItem(item);
  };

  return <Items text="Remover" callback={remove} />;
};
