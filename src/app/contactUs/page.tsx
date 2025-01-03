import React from "react";

function ContactUs() {
  return (
   <div>
    <h1 className=" font-black text-center text-5xl text-white">Contact Us</h1>
<section  id="ContactUs" className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0 mt-0"
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1071.424477002983!2d67.07166459956017!3d24.968133753870077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb340c07e30c253%3A0xa6fc133faa900be3!2sSector-11-E%20Sector%2011%20E%20North%20Karachi%20Twp%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e1!3m2!1sen!2sus!4v1731389662666!5m2!1sen!2sus"
        style={{ filter: "contrast(1.4) opacity(0.8)" }}
      />

      <div className="bg-black relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-red-700 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1 text-white">
          House 1949. Sector 11E, Muslim Town, Karachi, Pakistan ( Karachi, Sindh, Pakistan)
          postal address = Buffer Zone (Kp-1979)
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-red-700 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-white leading-relaxed">bh1977955@email.com</a>
          <h2 className="title-font font-semibold text-red-700 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed text-white">123-456-7890</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-black flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-red-700 text-lg mb-1 font-medium title-font">
        Feedback
      </h2>
      <p className="leading-relaxed mb-5 text-red-700">
        I&apos;m Available for Your Discussion or Query
      </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-red-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-red-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-red-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-red-700 bg-white border-0 py-2 px-6 focus:outline-none hover:text-white hover:bg-red-700 rounded text-lg">
        SEND
      </button>
    </div>
  </div>
</section>
   
</div>
  );
}

export default ContactUs;