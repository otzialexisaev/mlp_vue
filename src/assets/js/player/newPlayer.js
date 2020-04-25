export default class Player {
  constructor() {
    this.audio = {
      domEl: null,
      setSrc() {
        this.domEl.src = "/files/Classmate.mp3";
      },
    };
    this.init();
  }

  init() {
    let audioTag = document.createElement("audio");

    document.body.appendChild(audioTag);
    this.audio.domEl = audioTag;
    this.audio.setSrc();
    this.audio.domEl.controls = true;
    console.log(this.audio.domEl);
  }

  check() {}
}

// let player = new Player();
// console.log(player.audio);
