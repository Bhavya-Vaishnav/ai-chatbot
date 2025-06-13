import { useEffect, useRef } from "react";
import "./newPrompt.css";
import Upload from "../upload/upload";

const NewPrompt = () => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>  
      <div className="endChat" ref={endRef}></div>
      <form className="newForm">
        <Upload/>
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
