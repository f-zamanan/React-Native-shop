interface Tapes {
  tapeTitle: string;
  tapeDescription: string;
  tapeImage: string;
}

const tape: Tapes[] = [
  {
    tapeTitle: "Back to the Future",
    tapeDescription:
      "Marty travels through time in a modified DeLorean car, His existance depends on the outcome of his travels.",
    tapeImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn4BXDJejxY9qu5vSS1wxEZD4brvTm-sN40Q&s",
  },
  {
    tapeTitle: "Indiana Jones and the Raiders of the Lost Ark",
    tapeDescription:
      "the intrepid archaeologist Indiana Jones sets out in search of the fabled Lost Ark of the Covenant.",
    tapeImage: "https://i.redd.it/wgx7m102b0eb1.jpg",
  },
  {
    tapeTitle: "Terminator 1",
    tapeDescription:
      "A cyborg assassin known as a Terminator travels from 2029 to 1984 to kill Sarah Connor.",
    tapeImage:
      "https://m.media-amazon.com/images/M/MV5BZmE0YzIxM2QtMGNlMi00MjRmLWE3MWMtOWQzMGVjMmU0YTFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    tapeTitle: "Jurassic Park",
    tapeDescription:
      "An industrialist invites some experts to visit his theme park of cloned dinosaurs. After a power failure, the creatures run loose.",
    tapeImage:
      "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2021/08/19091127/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg",
  },
];

export default tape;
