import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { cn } from "@/lib/utils";

const BookSlider = ( ) => {
    const books = [
        {
            id: 1,
            image: "/images/banners/bookcover1.jpg",
            title: "Fabula Ultima Volume 1 Bookcover",
            link: "https://www.drivethrurpg.com/en/product/410108/fabula-ultima-ttjrpg"
        },
        {
            id: 2,
            image: "/images/banners/bookcover2.jpg",
            title: "Fabula Ultima Volume 2 Bookcover",
            link: "https://www.drivethrurpg.com/en/product/410108/fabula-ultima-ttjrpg"
        },
        {
            id: 3,
            image: "/images/banners/bookcover3.jpg",
            title: "Fabula Ultima Volume 3 Bookcover",
            link: "https://www.drivethrurpg.com/en/product/410108/fabula-ultima-ttjrpg"
        },
        {
            id: 4,
            image: "/images/banners/bookcover4.jpg",
            title: "Fabula Ultima Volume 4 Bookcover",
            link: "https://www.drivethrurpg.com/en/product/410108/fabula-ultima-ttjrpg"
        }
    ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? books.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === books.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-1/2 relative">
      {/* Left Arrow */}
      <div className="md:block hidden absolute left-12 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
        <IoIosArrowBack
          onClick={goToPrevious}
          className="p-2 w-20 h-20 hover:text-gray-600"
        />
      </div>

      {/* Book Display */}
      <div className="h-full w-full flex justify-center relative">
        <a href={books[currentIndex].link} target="_blank">
          <div className="flex justify-center mx-auto w-100 md:hover:scale-103 hover:brightness-110 md:p-0 px-12 transform transition-all duration-300">
            <img
              className="rounded-3xl overflow-hidden cursor-pointer w-full"
              src={books[currentIndex].image}
              alt={books[currentIndex].title}
            />
          </div>
        </a>
      </div>

      {/* Right Arrow */}
      <div className="md:block hidden absolute right-12 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
        <IoIosArrowForward
          onClick={goToNext}
          className="p-2 w-20 h-20 hover:text-gray-600"
        />
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6">
        {books.map((book, slideIndex) => (
          <div
            key={book.id}
            onClick={() => goToSlide(slideIndex)}
            className={cn(
              "h-3 rounded-full mx-1 cursor-pointer transition-all duration-300",
              currentIndex === slideIndex 
                ? "bg-primary w-5"
                : "bg-gray-300 w-3"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default BookSlider;
