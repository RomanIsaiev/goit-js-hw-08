import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(getCurrentVideoTime, 1000));

function getCurrentVideoTime(data) {
  console.log(data.seconds);
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

const currentTime = Number(localStorage.getItem('videoplayer-current-time'));

player.setCurrentTime(currentTime);
