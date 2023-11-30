import second from "../images/second.jpg";
import third from "../images/third.jpg";
import fourth from "../images/fourth.jpg";
import fifth from "../images/fifth.jpg";
import six from "../images/six.jpg";
import seventh from "../images/seventh.jpg";
import ImageSlider from "./ImageSlider";

const images = [second, third, fourth, fifth, six, seventh];

const Home = () => {
  return (
    <div className="max-w-full w-full aspect-10/4 m-auto">
      <ImageSlider imageUrls={images} />
    </div>
  );
};

export default Home;
