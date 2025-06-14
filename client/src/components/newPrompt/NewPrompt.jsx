import { useEffect, useRef, useState } from "react";
import "./newPrompt.css";
import Upload from "../upload/upload";
import { IKContext, IKUpload, IKImage } from "imagekitio-react";


const NewPrompt = () => {
  const [img, setImg] = useState({
    isLoading: false,
    error: "",
    dbData: {},
  });
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      {/* ADD NEW CHAT */}
      {img.isLoading && <div className="">Loading...</div>}
      {img.dbData && typeof img.dbData === "object" && img.dbData.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={img.dbData.filePath}
          width={380}
          transformation={[{width:380}]}
        />
      )}

      <div className="endChat" ref={endRef}></div>
      <form className="newForm">
        <Upload setImg={setImg} />
        <input type="file" id="file" multiple={false} hidden />
        <input type="text" placeholder="Ask anything..." />
        <button>
          <img src="/arrow.png" alt="" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
