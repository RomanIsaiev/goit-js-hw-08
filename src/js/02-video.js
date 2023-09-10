import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// player.on('timeupdate', throttle(getCurrentVideoTime, 1000));

// function getCurrentVideoTime(data) {
//   localStorage.setItem('videoplayer-current-time', data.seconds);
// }

// const currentTime = Number(localStorage.getItem('videoplayer-current-time'));

// player.setCurrentTime(JSON.parse(localStorage.getItem(currentTime)) || 0);

const CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const getCurrentTime = function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) || 0);
