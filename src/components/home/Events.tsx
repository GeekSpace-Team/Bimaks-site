import { FC } from "react";

const events = [
  {
    image: "/images/Kurumsal.png",
    title: "Event 1",
    subtitle: "This is the subtitle for Event 1.",
    link: "#",
  },
  {
    image: "/images/Kurumsal.png",
    title: "Event 2",
    subtitle: "This is the subtitle for Event 2.",
    link: "#",
  },
  {
    image: "/images/Kurumsal.png",
    title: "Event 3",
    subtitle: "This is the subtitle for Event 3.",
    link: "#",
  },
];

const Events: FC = () => {
  return (
    <div className="container mx-auto mt-10 mb-10">
      <p className="dark:text-gray-300 text-[40px] text-center mb-10">
        Our Events
      </p>
      <div className="flex flex-wrap justify-between gap-2">
        {events.map((event, index) => (
          <div key={index} className="w-full md:w-1/4 mt-5">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                <p className="text-gray-700 mb-4">{event.subtitle}</p>
                <a href={event.link} className="text-blue-500 hover:underline">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
