const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');


const prevBtn = document.getElementById('prev-btn');

const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress');


const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseBtn.innerHTML = '<i class="fa fa-play"></i>';
    } else {
        audioPlayer.play();
        playPauseBtn.innerHTML = '<i class="fa fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

audioPlayer.addEventListener('timeupdate', updateProgress);

audioPlayer.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audioPlayer.duration);
});

function updateProgress() {
    const { currentTime, duration } = audioPlayer;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    currentTimeEl.textContent = formatTime(currentTime);
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}