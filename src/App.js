//*Video usado de base: https://www.youtube.com/watch?v=YOAeBSCkArA
//!Antes que nada
//?npm install firebase
//?npm install uuid

import './App.css';
import {useState} from "react"
import {storage} from './firebase'
import {ref, uploadBytes} from 'firebase/storage'
import {v4} from 'uuid'
function App() {

  const [imageUpload, setImageUpload] = useState(null)

  const uploadImage = () => {
    if(imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image Uploaded")
    })
  }

  return (
    <div className="App">
      <input 
      type="file" 
      onChange={(event) => {
        setImageUpload(event.target.files[0]);
      }}
    />
      <button onClick={uploadImage}>Upload image</button>
    </div>
  );
}

export default App;
