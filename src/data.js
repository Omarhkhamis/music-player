import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Despacito",
      cover: "./songs/Despacito.jpg",
      artist: "Luis Fonsi",
      audio: "./songs/Despacito.mp3",
      color: ["#E8A23D", "#2F491E"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "vis ta vie",
      cover: "./songs/MireilleMathieu.jpg",
      artist: "Mireille Mathieu",
      audio: "./songs/MireilleMathieu.mp3",
      color: ["#2E171E", "#D2C6C8"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "يدك",
      cover: "./songs/Kazem.jpg",
      artist: "كاظم الساهر",
      audio: "./songs/Kazem.mp3",
      color: ["#2652B7", "#B88882"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "My Heart Will Go On",
      cover: "./songs/Titanic.jpg",
      artist: "Céline Dion",
      audio: "./songs/Titanic.mp3",
      color: ["#B8ACC5", "#462D16"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "على شانك",
      cover: "./songs/nancy.jpg",
      artist: "نانسي عجرم",
      audio: "./songs/nancy.mp3",
      color: ["#536BA7", "#DCD5F4"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "One Night In Dubai",
      cover: "./songs/OneNightInDubai.jpg",
      artist: "Arash feat. Helena",
      audio: "./songs/OneNightInDubai.mp3",
      color: ["#B29EC1", "#3C2A20"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;
