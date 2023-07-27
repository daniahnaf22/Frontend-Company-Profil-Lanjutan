import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronLeft, ChevronRight } from "react-feather";

const cardData = [
  {
    id: 1,
    image: "/public/Image/blog2.jpg",
    description: "Deskripsi gambar 1",
    author: "Penulis 1",
    details: "Detail gambar 1",
  },
  {
    id: 2,
    image: "/public/Image/blog2.jpg",
    description: "Deskripsi gambar 2",
    author: "Penulis 2",
    details: "Detail gambar 2",
  },
  {
    id: 3,
    image: "/public/Image/blog2.jpg",
    description: "Deskripsi gambar 3",
    author: "Penulis 3",
    details: "Detail gambar 3",
  },
  {
    id: 4,
    image: "/public/Image/blog2.jpg",
    description: "Deskripsi gambar 4",
    author: "Penulis 4",
    details: "Detail gambar 4",
  },
  {
    id: 5,
    image: "/public/Image/blog2.jpg",
    description: "Deskripsi gambar 5",
    author: "Penulis 5",
    details: "Detail gambar 5",
  },
  {
    id: 6,
    image: "/public/Image/blog2.jpg",
    description: "Deskripsi gambar 6",
    author: "Penulis 6",
    details: "Detail gambar 6",
  },
  {
    id: 7,
    image: "/public/Image/blog2.jpg",
    description: "Deskripsi gambar 7",
    author: "Penulis 7",
    details: "Detail gambar 7",
  },
];

const Card = ({ data }) => (
  <div
    className="max-w-xs rounded overflow-hidden shadow-lg my-4 m-8"
    data-aos="zoom-in"
  >
    {/* Tambahkan my-4 untuk memberikan jarak atas dan bawah antara kartu */}
    <img className="w-full" src={data.image} alt={data.description} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{data.description}</div>
      <p className="text-gray-700 text-base">{data.author}</p>
    </div>
    <div className="px-6 py-4 ">
      <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-xl">
        {data.details}
      </button>
    </div>
  </div>
);

export default function Blog() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [currentCard, setCurrentCard] = useState(0);

  const handlePrev = () => {
    setCurrentCard(currentCard === 0 ? cardData.length - 1 : currentCard - 1);
  };

  const handleNext = () => {
    setCurrentCard(currentCard === cardData.length - 1 ? 0 : currentCard + 1);
  };

  const renderCards = () => {
    const startIndex = currentCard > 2 ? currentCard - 3 : currentCard;
    const endIndex = startIndex + (window.innerWidth < 640 ? 1 : 3);
    return cardData
      .slice(startIndex, endIndex)
      .map((card) => <Card key={card.id} data={card} />);
  };

  return (
    <div>
      <div id="" className="my-10">
        <h1 className="text-center text-2xl font-bold ">Blog</h1>
        <hr className="w-40 h-1 my-2 bg-teal-600 border-0 rounded  absolute px-2 -translate-x-1/2 left-1/2 dark:bg-gray-700" />
        <div className="flex items-center justify-center my-10">
          <button
            className="bg-teal-300 hover:bg-teal-400 text-gray-800 font-bold py-2 px-4 rounded-full"
            onClick={handlePrev}
          >
            <ChevronLeft />
          </button>
          {renderCards()}
          <button
            className="bg-teal-300 hover:bg-teal-400 text-gray-800 font-bold py-2 px-4 rounded-full"
            onClick={handleNext}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
