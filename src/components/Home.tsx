import second from "../images/second.jpg";
import third from "../images/third.jpg";
import fourth from "../images/fourth.jpg";
import fifth from "../images/fifth.jpg";
import six from "../images/six.jpg";
import seventh from "../images/seventh.jpg";
import ImageSlider from "./ImageSlider";
import { FlaskConical, Siren, Tablets } from "lucide-react";

const images = [second, third, fourth, fifth, six, seventh];

const Home = () => {
  return (
    <div className="max-w-full w-full aspect-10/4 mt-14">
      <ImageSlider imageUrls={images} />
      <div className="flex justify-center mt-5">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 mt-4 gap-5 rounded-lg bg-slate-400 p-3">
          <div className="w-80 p-6 bg-slate-100 hover:bg-slate-900 hover:text-white rounded-lg transition hover:animate-fade">
            <FlaskConical className="w-10 h-10" />
            <h1 className="text-xl mt-4 font-semibold">
              24 hour Labratory service
            </h1>
            <p className="text-base mt-3">
              Your health doesn't keep office hours, and neither do we. Our 24/7
              hospital is committed to delivering continuous, compassionate care
              whenever you need it most.
            </p>
          </div>
          <div className="w-80 p-5 bg-slate-100 rounded-lg">
            <Tablets className="w-10 h-10" />
            <h1 className="text-xl mt-4 font-semibold">
              24 hour Pharmacy service
            </h1>
            <p className="text-base mt-3">
              Your health doesn't keep office hours, and neither do we. Our 24/7
              hospital is committed to delivering continuous, compassionate care
              whenever you need it most.
            </p>
          </div>
          <div className="w-80 p-5 bg-slate-100 rounded-lg">
            <Siren className="w-10 h-10" />
            <h1 className="text-xl mt-4 font-semibold">
              24 hour Ambulance service
            </h1>
            <p className="text-base mt-3">
              Your health doesn't keep office hours, and neither do we. Our 24/7
              hospital is committed to delivering continuous, compassionate care
              whenever you need it most.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
