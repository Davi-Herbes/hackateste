import { useUserStore } from "../../store/user-store/state";
import { useRef, FormEvent, useState } from "react";
import { SAddItem } from "./styles";
import { useNavigate } from "react-router-dom";
import defaultImageUpload from "/images/default_image_upload.png";

export const RequestPage = () => {
  const [img, setImg] = useState<string>("");
  const [imgName, setImgName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [qtd, setQtd] = useState<number>(1);

  const navigate = useNavigate();
  const input = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const file = (input.current?.files as FileList)[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "qypg5nxt");

    const data = await fetch("https://api.cloudinary.com/v1_1/djpqlq4ny/image/upload", {
      method: "POST",
      body: formData,
    });

    const jsonData = await data.json();
    useUserStore.getState().addRequest({ description, qtd, img: jsonData.url });

    return navigate("/");
  };

  return (
    <SAddItem>
      <h1>Adicionar item</h1>
      <form onSubmit={handleSubmit} action="/" method="POST">
        <div className="fields-container">
          <div className="upload-container">
            <div className="image-container">
              <img src={img ? img : defaultImageUpload} alt="" />
              <span>{imgName}</span>
            </div>
            <label>
              Escolher
              <input
                onChange={() => {
                  setImg(URL.createObjectURL((input.current?.files as FileList)[0]));
                  setImgName((input.current?.files as FileList)[0].name);
                }}
                className="file"
                ref={input}
                type="file"
              ></input>
            </label>
          </div>

          <div className="text-fields-container">
            <label className="text-field">
              Descrição:
              <br />
              <input
                className="description"
                type="text"
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>

            <label className="text-field">
              Quantidade:
              <br />
              <input className="qtd" type="number" onChange={(e) => setQtd(+e.target.value)} />
            </label>
          </div>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </SAddItem>
  );
};
