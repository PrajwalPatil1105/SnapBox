import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "../Styles/RichTextEditor.module.css";
import toast, { Toaster } from "react-hot-toast";

function RichTextEditor() {
  const [value, setValue] = useState(() => {
    return localStorage.getItem("richTextData") || "";
  });
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    toast("Data Will Be Auto Saved For Every 10sec");
  }, []);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["clean"],
    ],
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      localStorage.setItem("richTextData", value);
      toast.success("Data Auto Saved");
      setTimeout(() => setShowMessage(false), 2000);
    }, 10000);
    return () => clearInterval(intervalId);
  }, [value]);

  return (
    <div className={styles.EditorPage}>
      <div className={styles.editorContainer}>
        <h2 className={styles.editorTitle}>Rich Text Editor</h2>
        {showMessage && <div className={styles.saveMessage}>Data saved!</div>}
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          className={styles.editor}
        />
      </div>
      <Toaster
        toastOptions={{
          style: {
            color: "#aaa",
            backgroundColor: "transparent",
            border: "2px solid #aaa",
            marginTop: "65em",
            fontFamily: "Poppins",
            fontSize: "0.6em",
            fontWeight: "400",
            marginLeft: "3em",
          },
        }}
      />
    </div>
  );
}

export default RichTextEditor;
