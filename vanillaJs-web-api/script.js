const video = document.getElementById("video");
const playpause = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const timestamp = document.getElementById("timestamp");
const progress = document.getElementById("progress");
const duration = document.getElementById("duration");

video.controls = false;

const clickPlaypause = () => {
	if (video.paused || video.ended) {
		video.play();
		document.getElementsByClassName("fa-play")[0].style.display = "none";
		document.getElementsByClassName("fa-pause")[0].style.display = "block";
	} else {
		video.pause();
		document.getElementsByClassName("fa-pause")[0].style.display = "none";
		document.getElementsByClassName("fa-play")[0].style.display = "block";
	}
};
const clickStop = () => {
	video.pause();
	video.currentTime = 0;
	progress.value = 0;
};
const seekProgress = (e) => {
	const rect = progress.getBoundingClientRect();
	const pos = (e.pageX - rect.left) / progress.offsetWidth;
	video.currentTime = pos * video.duration;
};

const formattedTime = (time, isHourLong) => {
	const inSeconds = Math.ceil(time);
	const hours = Math.ceil(inSeconds / 3600);
	let remainder = inSeconds % 3600;
	const minutes = Math.floor(remainder / 60);
	const seconds = Math.floor(remainder % 60);

	const hourStr = `${hours < 10 ? "0" : ""}${hours}`;

	return `${isHourLong ? hourStr + ":" : ""}${
		minutes < 10 ? "0" : ""
	}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const timeUpdateListener = () => {
	if (!progress.getAttribute("max")) {
		progress.setAttribute("max", video.duration);
		duration.innerText = `/ ${formattedTime(video.duration)}`;
	}
	progress.value = video.currentTime;
	timestamp.innerText = formattedTime(
		video.currentTime,
		video.duration >= 3600
	);
};

playpause.addEventListener("click", clickPlaypause);
stopBtn.addEventListener("click", clickStop);
video.addEventListener("click", clickPlaypause);
video.addEventListener("timeupdate", timeUpdateListener);
progress.addEventListener("click", seekProgress);
