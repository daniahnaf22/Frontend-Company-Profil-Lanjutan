import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div id="" className="mt-10">
        <h1 className="text-center text-2xl font-bold">Contact Us</h1>
        <hr className="w-40 h-1 my-2 bg-teal-600 border-0 rounded  absolute px-2 -translate-x-1/2 left-1/2 dark:bg-gray-700  -z-10" />
        <div className=" px-10 flex flex-wrap mt-8 ">
          <div
            className="card-body w-full  bg-base-100 shadow-xl md:w-1/2 mt-10"
            data-aos="fade-right"
          >
            <form className="w-full max-w-lg mt-8">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="name"
                    type="text"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-none h-40"
                    id="message"
                    placeholder="Enter your message..."
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="w-full md:w-1/2" data-aos="fade-left">
            <div className="mt-8 m-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.744713242943!2d106.77571937395113!3d-6.164932660416178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f64e4465a04b%3A0xfaebc2488523dc0b!2sNusantech!5e0!3m2!1sid!2sid!4v1688111694094!5m2!1sid!2sid"
                width="600"
                height="600"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
