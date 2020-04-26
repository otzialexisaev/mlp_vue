export default class Player {
  constructor () {
    this.audio = {
      domEl: null,
      setSrc (src) {
        this.domEl.src = src
      },
      init () {
        // создаем аудио тэг //
        let audioTag = document.createElement('audio')
        document.body.appendChild(audioTag)
        this.domEl = audioTag
        this.domEl.controls = true
      }
    }

    this.controls = {
      random: document.getElementById('randomBtn'),
      repeatAll: document.getElementById('repeatAllBtn'),
      repeatOne: document.getElementById('repeatOneBtn'),
      highlightRandom (switchValue) {
        this.highlight(this.random, switchValue)
      },
      highlightRepeatAll (switchValue) {
        this.highlight(this.repeatAll, switchValue)
      },
      highlightRepeatOne (switchValue) {
        this.highlight(this.repeatOne, switchValue)
      },
      highlight (el, switchValue) {
        if (switchValue) {
          el.classList.add('btnHighlight')
        } else {
          el.classList.remove('btnHighlight')
        }
      },
      play: document.getElementById('playPauseBtn'),
      next: document.getElementById('nextBtn'),
      prev: document.getElementById('prevBtn'),
      togglePlayPauseBtn (paused) {
        if (paused) {
          this.play.src = '../../img/playercontainer/playBtn.jpg'
        } else {
          this.play.src = '../../img/playercontainer/pauseBtn.jpg'
        }
      }
    }

    this.switches = {
      bRandom: false,
      bRepeatAll: false,
      bRepeatOne: false,
      toggleRandom () {
        this.bRandom = !this.bRandom
      },
      toggleRepeatAll () {
        this.bRepeatAll = !this.bRepeatAll
      },
      toggleRepeatOne () {
        this.bRepeatOne = !this.bRepeatOne
      }
    }
  }

  init () {
    this.audio.init()

    this.controls = {
      random: document.getElementById('randomBtn'),
      repeatAll: document.getElementById('repeatAllBtn'),
      repeatOne: document.getElementById('repeatOneBtn'),
      highlightRandom (switchValue) {
        this.highlight(this.random, switchValue)
      },
      highlightRepeatAll (switchValue) {
        this.highlight(this.repeatAll, switchValue)
      },
      highlightRepeatOne (switchValue) {
        this.highlight(this.repeatOne, switchValue)
      },
      highlight (el, switchValue) {
        if (switchValue) {
          el.classList.add('btnHighlight')
        } else {
          el.classList.remove('btnHighlight')
        }
      },
      play: document.getElementById('playPauseBtn'),
      next: document.getElementById('nextBtn'),
      prev: document.getElementById('prevBtn'),
      togglePlayPauseBtn (paused) {
        if (paused) {
          this.play.src = '../../img/playercontainer/playBtn.jpg'
        } else {
          this.play.src = '../../img/playercontainer/pauseBtn.jpg'
        }
      }
    }
    console.log(this.controls.random)
  }

  check () {}
}

// let player = new Player();
// console.log(player.audio);
