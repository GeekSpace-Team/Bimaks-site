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
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{
          width: "100%",
        }}
        speed={5000}
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
                    onClick={() => navigate(item.path)}
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
