// import Vimeo from 'vimeo-player';
import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Vimeo('vimeo-player');

const updateLocalStorage = throttle(() => {
    const currentTime = player.getCurrentTime();
    localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000);

player.on('timeupdate', updateLocalStorage);

const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
    player.setCurrentTime(savedTime);
}

player.on('play', () => {
    localStorage.removeItem('videoplayer-current-time');
});

// Припустимо, що `player` - це екземпляр Vimeo плеєра
const desiredTime = 300; // Ваш бажаний час в секундах

// Отримати тривалість відео
player.getDuration().then((duration) => {
    // Перевірити, чи ви встановлюєте час відтворення в межах тривалості відео
    if (desiredTime >= 0 && desiredTime <= duration) {
        // Встановити час відтворення
        player.setCurrentTime(desiredTime);
    } else {
        console.error('Invalid desired time.');
    }
});
