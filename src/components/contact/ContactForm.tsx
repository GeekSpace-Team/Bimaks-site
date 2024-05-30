import { FC } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const ContactForm: FC = () => {
  return (
    <div className="mt-10 flex flex-col md:flex-row">
      {/* Left Side: Form */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-xl font-bold mb-4">Write Us</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-400 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-400 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-gray-700 font-semibold mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="border border-gray-400 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows={1}
              className="border border-gray-400 rounded-md p-2 w-full"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
      {/* Right Side: Map */}
      <div className="w-full md:w-1/2 p-4">
        <YMaps>
          <Map
            defaultState={{ center: [37.900759, 58.35373], zoom: 17.39 }}
            style={{ width: "100%", height: "400px" }}
          >
            <Placemark geometry={[37.900759, 58.35373]} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};

export default ContactForm;
