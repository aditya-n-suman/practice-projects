'use client'

const VideoPlayer = () => {
  return (
    <main className="">
      <h2>Video Player</h2>
      <video
        src="/assets/sample.mp4"
        id="video-player"
        className="aspe"
        poster="https://png.pngtree.com/png-vector/20190215/ourlarge/pngtree-play-video-icon-graphic-design-template-vector-png-image_530837.jpg"
      >
        </video>
    </main>
  );
};

export default VideoPlayer;
