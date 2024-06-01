import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { homeItems } from "../../data/data";

const HomeCarousel: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-10 mb-5 w-full">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={50}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 1,
          },
          639: {
            slidesPerView: 1,
          },
          865: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
          1500: {
            slidesPerView: 4,
          },
          1700: {
            slidesPerView: 5,
          },
        }}
        autoplay={{
          delay: 1000,
          pauseOnMouseEnter: true,
        }}
        style={{
          width: "100%",
        }}
        speed={500}
        loop={true}
      >
        <div className="flex w-full gap-5">
          {homeItems.map((item, i) => (
            <SwiperSlide key={`home_items_key${i}`}>
              <div className="max-w-xs rounded bg-white overflow-hidden shadow-lg hover:cursor-pointer">
                <img className="w-full" src={item.pic} alt="Card" />
                <div className="px-6 py-4 flex flex-col gap-6">
                  <div className="font-bold text-xl mb-2 text-center">
                    {item.title}
                  </div>
                  <button
                    className="bg-blue-500 px-4 py-2 w-full text-white hover:bg-blue-600 rounded-[6px]"
                    onClick={() => navigate(`/products/${item.id}`)}
                  >
                    More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default HomeCarousel;
