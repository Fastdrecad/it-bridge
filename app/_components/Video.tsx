export default function Video() {
  return (
    <div className="relative w-full h-screen m-0 p-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover m-0 p-0 backdrop-filter"
      >
        <source src="/it-bridge-video-loop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
