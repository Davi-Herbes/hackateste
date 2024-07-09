import { SItems } from "./styles";
import { useStore } from "zustand";
import { useUserStore } from "../../store/user-store/state";
import { Item } from "../item";
import { ItemType } from "../../store/user-store/types/item";

type Props = {
  text: string;
  callback?: (item: ItemType) => void;
};

export const Items = ({ text, callback }: Props) => {
  const store = useStore(useUserStore);

  return (
    <SItems>
      {store.items.map((val, ind) => {
        return (
          <Item
            text={text}
            callback={callback ? () => callback(val) : undefined}
            imageUrl={val.img}
            qtd={val.qtd}
            title={val.description}
            key={ind}
          ></Item>
        );
      })}
    </SItems>
  );
};
