import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import { useEffect, useState } from "react";

interface ImageProps {
  imageUrls: string[];
}

const ImageSlider = ({ imageUrls }: ImageProps) => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  };

  const handleNext = () => {
    setIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full flex overflow-hidden">
        {imageUrls.map((url) => (
          <img
            className="h-full w-full block object-cover flex-grow-0 
            flex-shrink-0 translate-x-0 duration-300
             ease-in-out"
            style={{ translate: `${-100 * index}%` }}
            src={url}
            key={url}
            alt=""
          />
        ))}
      </div>
      <button
        className="absolute top-0 bottom-0
       left-0 p-3 hover:bg-black hover:opacity-20 
       hover:transition duration-300
       hover:ease-in-out hover:animate-squish"
        onClick={handlePrev}
      >
        <ArrowBigLeft className="fill-black stroke-white w-8 h-8" />
      </button>
      <button
        className="absolute top-0 bottom-0 right-0 p-3 hover:bg-black hover:opacity-20 
        hover:transition duration-300 hover:ease-in-out hover:animate-squish"
        onClick={handleNext}
      >
        <ArrowBigRight className="fill-black stroke-white w-8 h-8" />
      </button>
      <div
        className="absolute bottom-1 
      text-red-600 translate-x-[-50%] left-[50%] flex gap-1 transition ease-in-out duration-300"
      >
        {imageUrls.map((_, currentIndex) => (
          <button
            className="w-4 h-4 mb-2 ml-1 hover:scale-125"
            key={currentIndex}
            onClick={() => setIndex(currentIndex)}
          >
            {currentIndex === index ? (
              <CircleDot className="fill-black stroke-white w-full h-full" />
            ) : (
              <Circle className="stroke-white h-full w-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
