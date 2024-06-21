const video = document.getElementById("video")
const playpause = document.getElementById("play")
const stopBtn = document.getElementById("stop")
const timestamp = document.getElementById("timestamp")
const progress = document.getElementById("progress")

video.controls = false;

const clickPlaypause = () => {
  if(video.paused || video.ended) {
    video.play();
    document.getElementsByClassName('fa-play')[0].style.display = "none"
    document.getElementsByClassName('fa-pause')[0].style.display = "block"
  } else {
    video.pause();
    document.getElementsByClassName('fa-pause')[0].style.display = "none"
    document.getElementsByClassName('fa-play')[0].style.display = "block"
  }
}
const clickStop = () => {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;
}
const seekProgress = (e) => {

}

playpause.addEventListener('click', clickPlaypause);
stopBtn.addEventListener('click', clickStop);

video.addEventListener("timeupdate", () => {
  if(!progress.getAttribute("max")) {
    progress.setAttribute("max", video.duration)
  }
  progress.value = video.currentTime;
})
progress.addEventListener("click", (e) => {
  const rect = progress.getBoundingClientRect();
  const pos = (e.pageX - rect.left) / progress.offsetWidth;
  video.currentTime = pos * video.duration;
})
