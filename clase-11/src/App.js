import "./App.css";
import Header from "./Components/Header/Header.js";
import List from "./Components/List/List.js";
import Button from "./Components/Button/Button.js";
import Video from "./Components/Video/Video";
import Audio from "./Components/Audio/Audio";

import video from "./assets/videos/GolTigre.mp4";
import mp3 from "./assets/audios/Incas.mp3";
import logo from "./assets/images/Tigre-Liverpool.jpg";

function App() {
  return (
    <div className="App">
      <div>
        <h2>Acá me los toma los assets, pero por props no</h2>
        <video src={video} width={200} controls />
        <audio src={mp3} controls />
      </div>

      <Button msg="Probando Botón desde PROPS" />
      <Header src={logo} width={400} />
      <List />
      <Video src={video} />
      <Audio src={mp3} />
    </div>
  );
}

export default App;
