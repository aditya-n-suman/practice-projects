import { BreadCrumb1 } from "@/components/breadCrumb";
import VideoPlayer from "@/components/videoPlayer";

const ButtonsPage = () => {
  return(
      <div className="min-h-screen grid grid-cols-4">
        <div className="lg:col-span-1 col-span-2 p-8">
          <BreadCrumb1 />
        </div>
        <div className="col-span-4">
          <VideoPlayer />
        </div>
      </div>

  )
}

export default ButtonsPage;