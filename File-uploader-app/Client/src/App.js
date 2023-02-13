import { useState } from "react";
import "./App.css";
import { storage } from "./firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  UploadTask,
  uploadBytesResumable,
} from "firebase/storage";
import { v4 } from "uuid";
import { assert, async } from "@firebase/util";

function App() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imagePath, setImagePath] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  let progress = 0;
  const [uploadItem, setUploadItem] = useState(1);

  const uploadImage = () => {
    if (imageUpload == null) return;

    for (let i = 0; i < imageUpload.length; i++) {
      const imageRef = ref(storage, `images/${imageUpload[i].name + v4()}`);
      const upload = uploadBytesResumable(imageRef, imageUpload[i]);
      upload.on(
        "state_changed",
        (snapshot) => {
          progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error);
        },
        async () => {
          setUploadProgress((prev) => prev + progress); //Get the progress
          getDownloadURL(imageRef)
            .then((respond) => {
              setImagePath((prev) => [...prev, respond]);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      );
    }
  };

  const subm = () => {
    console.log(imagePath);
  };

  return (
    <div>
      <input
        type={"file"}
        onChange={(event) => {
          setImageUpload(event.target.files);
          setUploadItem(event.target.files.length);
        }}
        multiple
      ></input>
      <button onClick={uploadImage}>Upload Image</button>
      <button onClick={subm}>Button</button>
      <h1>{uploadProgress + "" + uploadImage.length}</h1>
      <div style={{ height: "20px", width: "200px", backgroundColor: "pink" }}>
        <div
          style={{
            height: "100%",
            width: uploadProgress / uploadItem + "%",
            backgroundColor: "grey",
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
