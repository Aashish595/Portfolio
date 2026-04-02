import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = ({ image, alt, video, link }: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleMouseEnter = async () => {
    if (!video) return;

    try {
      setIsVideo(true);
      const response = await fetch(`src/assets/${video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideoUrl(blobUrl);
    } catch (error) {
      console.error("Video preview failed:", error);
    }
  };

  const handleMouseLeave = () => {
    setIsVideo(false);
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={link || "#"}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-cursor="disable"
      >
        {link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}

        <img src={image} alt={alt || "Project preview"} />

        {isVideo && videoUrl && (
          <video src={videoUrl} autoPlay muted playsInline loop />
        )}
      </a>
    </div>
  );
};

export default WorkImage;