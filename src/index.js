import summerBg from './assets/summer-bg.jpg'
import summerSounds from './assets/sounds/summer.mp3'
import rainBg from './assets/rainy-bg.jpg'
import rainSounds from './assets/sounds/rain.mp3'
import snowBg from './assets/winter-bg.jpg'
import snowSounds from './assets/sounds/winter.mp3'
import './index.scss'

const btnSummer = document.querySelector('.btn_summer')
const btnRain = document.querySelector('.btn_rain')
const btnSnow = document.querySelector('.btn_snow')
const body = document.querySelector('body')
const range = document.querySelector('.range')

const data = {
  summer: {
    img: summerBg,
    sound: summerSounds,
    element: btnSummer,
    currentTime: 0
  },
  rain: {
    img: rainBg,
    sound: rainSounds,
    element: btnRain,
    currentTime: 0
  },
  snow: {
    img: snowBg,
    sound: snowSounds,
    element: btnSnow,
    currentTime: 0
  }
}

let state = ''

const audio = new Audio()
audio.loop = true
audio.volume = 0.5

range.addEventListener('input', () => {
    audio.volume = range.value
}, false)

btnSummer.addEventListener('click', () => {
  if (state === 'summer') {
    audio.pause()
    data[state].element.children[0].classList.remove('svg_pause')
    data[state].currentTime = audio.currentTime
    state = ''
  } else {
    if (state) {
      data[state].element.children[0].classList.remove('svg_pause')
      data[state].currentTime = audio.currentTime
    }
    state = 'summer' 
    audio.src = data[state].sound
    data[state].element.children[0].classList.add('svg_pause')
    body.style.backgroundImage = `url(${summerBg})`
    audio.play() 
    audio.currentTime = data[state].currentTime
  }
})

btnRain.addEventListener('click', () => {
  if (state === 'rain') {
    data[state].element.children[0].classList.remove('svg_pause')
    data[state].currentTime = audio.currentTime
    audio.pause()
    state = ''
  } else {
    if (state) {
      data[state].element.children[0].classList.remove('svg_pause')
      data[state].currentTime = audio.currentTime
    }
    state = 'rain'
    audio.src = data[state].sound
    data[state].element.children[0].classList.add('svg_pause')
    body.style.backgroundImage = `url(${rainBg})`
    audio.play()
    audio.currentTime = data[state].currentTime
  }
})

btnSnow.addEventListener('click', () => {
  if (state === 'snow') {
    data[state].element.children[0].classList.remove('svg_pause')
    data[state].currentTime = audio.currentTime
    audio.pause()
    state = ''
  } else {
    if (state) {
      data[state].element.children[0].classList.remove('svg_pause')
      data[state].currentTime = audio.currentTime
    }
      state = 'snow'
      audio.src = data[state].sound
      data[state].element.children[0].classList.add('svg_pause')
      body.style.backgroundImage = `url(${snowBg})`
      audio.play()
      audio.currentTime = data[state].currentTime
  }
})