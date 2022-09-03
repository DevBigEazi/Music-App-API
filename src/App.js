import { useEffect, useState } from "react";
import Player from "./components/Player";


function App() {
  const [songs] = useState([
    {
      title: "Happiness",
      artist: "davolee",
      img_src: "./images/davolee-hapiness.webp",
      src: "./songs/Davolee-Happiness.mp3",
    },
    {
      title: "Lagos Anthem",
      artist: "Zlatan",
      img_src: "./images/zlatan-lagos-anthem.webp",
      src: "./songs/Lagos-Anthem.mp3",
    },
    {
      title: "Follow My Lead",
      artist: "Mr P ft. Wande Coal",
      img_src: "./images/follow-my-lead.webp",
      src: "./songs/Follow-my-lead.mp3",
    },
    {
      title: "Abule",
      artist: "Patoranking",
      img_src: "./images/pato-abule.webp",
      src: "./songs/Patoranking-Abule.mp3",
    },
    {
      title: "Mapariwo",
      artist: "Zinoleesky",
      img_src: "./images/zino.webp",
      src: "./songs/Zinoleesky-Mapariwo.mp3",
    },
    {
      title: "Unripe pawpaw",
      artist: "Zlatan ft. Papisnoop, JamoPyper",
      img_src: "./images/unripe.webp",
      src: "./songs/Unripe-pawpaw.mp3",
    }
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0
      } else {
        return currentSongIndex + 1
      }
    })
  }, [currentSongIndex, songs.length])



  return (
    <div className="App">
      <Player 
        currentSongIndex = {currentSongIndex}
        setCurrentSongIndex = {setCurrentSongIndex}
        nextSongIndex = {nextSongIndex}
        songs = {songs}
      />
     
    </div>
  );
}

export default App;
