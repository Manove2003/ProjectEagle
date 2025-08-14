import React, { useState } from "react";
import eagleImage from "../assets/Egale1.png";
import heroimg from "../assets/heroimg.png"
import avatar1 from "../assets/E1.png"; 
import avatar2 from "../assets/E2.png";
import avatar3 from "../assets/E3.png";
import avatar4 from "../assets/E4.png";
import debtImage from "../assets/Rectangle.png";

export default function DebtReduction() {
     const steps = [
    {
      number: "01",
      title: "No Upfront Fees",
      description: "Answer a couple of questions below."
    },
    {
      number: "02",
      title: "Fast & Risk Free",
      description:
        "You can get a fast, no obligation savings estimate from a consolidation specialist in minutes – checking your eligibility won’t affect your credit score."
    },
    {
      number: "03",
      title: "Consolidate & Save",
      description:
        "By negotiating with creditors, our company helps you save on interest and potentially reduce your overall debt payments by hundreds of dollars a month."
    }
  ];
  const [formData, setFormData] = useState({
    debt: "",
    hardship: "",
    payments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = () => {
  const { debt, hardship, payments } = formData;
  const message = `Debt: ${debt}%0AHardship: ${hardship}%0APayments: ${payments}`;

  // Open WhatsApp with message
  // window.open(`https://wa.me/8882173264?text=${message}`, "_blank");

  // Open mobile call dialer
  window.location.href = "tel:8882173264";
};

  return (
    <>
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-r from-[#0B1E3F] to-[#0E3C7E] relative overflow-hidden">
      
      {/* Eagle Image */}
      <img
        src={eagleImage}
        alt="Eagle"
        className="absolute right-0 md:right-60 bottom-0 w-64 sm:w-80 md:w-[500px] object-contain opacity-100 z-0"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side */}
        <div className="text-white">
          <h1 className="text-2xl sm:text-3xl md:text-5xl pt-6 font-bold mb-4 max-w-xl">
            New debt reduction plan for Americans, qualifying individuals
            receive an average debt reduction of{" "}
            <span className="text-yellow-400">$26,352.</span>
          </h1>
          <p className="text-sm sm:text-base mb-6 max-w-md">
            Americans with $10,000 or more in credit card debt have a 95% approval rate – funding ends soon.
          </p>
          <button
            onClick={handleSubmit}
            className="bg-[#5C24FF] hover:bg-purple-700 px-6 py-3 rounded-full font-semibold text-white"
          >
            Check Your Eligibility
          </button>

                  <div className="flex items-center flex-wrap gap-3 py-8 ">
                    
                    
                    {/* Avatars */}
                    <div className="flex -space-x-2">
                      {[avatar1, avatar2, avatar3, avatar4].map((avatar, idx) => (
                        <img
                          key={idx}
                          src={avatar}
                          alt="User"
                          className="w-8 h-8 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
          
                    {/* Text */}
                    <span className="text-white text-sm">
                      1.4k People are <br></br>Happy in USA
                    </span>

                     {/* Stars */}
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.45a1 1 0 00.95.69h3.623c.969 0 1.371 1.24.588 1.81l-2.93 2.127a1 1 0 00-.364 1.118l1.12 3.45c.3.921-.755 1.688-1.54 1.118l-2.93-2.127a1 1 0 00-1.176 0l-2.93 2.127c-.785.57-1.84-.197-1.54-1.118l1.12-3.45a1 1 0 00-.364-1.118L2.768 8.877c-.783-.57-.38-1.81.588-1.81h3.623a1 1 0 00.95-.69l1.12-3.45z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                   <img src={heroimg} alt="" className=" -ml-4"/>
        </div>

        {/* Right Side Form */}
        <div className="backdrop-blur-sm md:backdrop-blur-md bg-white/8 rounded-2xl p-6 mt-0 md:mt-20 shadow-lg w-full sm:w-3/5 max-w-md md:ml-auto">
          <div className="space-y-4 text-white">
    <div>
  <p className="mb-2 font-medium">1. How much debt you have?</p>
  <div className="flex flex-wrap gap-x-4 gap-y-2">
    <label className="inline-flex items-center">
      <input
        type="radio"
        name="debt"
        value="Above $10000"
        onChange={handleChange}
        className="mr-2"
      />
      Above $10000
    </label>
    <label className="inline-flex items-center">
      <input
        type="radio"
        name="debt"
        value="Below $1000"
        onChange={handleChange}
        className="mr-2"
      />
      Below $1000
    </label>
  </div>
</div>

<div>
  <p className="mb-2 font-medium">2. Are you experiencing a financial hardship?</p>
  <div className="flex flex-wrap gap-x-4 gap-y-2">
    <label className="inline-flex items-center">
      <input
        type="radio"
        name="hardship"
        value="Yes"
        onChange={handleChange}
        className="mr-2"
      />
      Yes
    </label>
    <label className="inline-flex items-center">
      <input
        type="radio"
        name="hardship"
        value="No"
        onChange={handleChange}
        className="mr-2"
      />
      No
    </label>
  </div>
</div>

<div>
  <p className="mb-2 font-medium">3. Are you able to make monthly payments?</p>
  <div className="flex flex-wrap gap-x-4 gap-y-2">
    <label className="inline-flex items-center">
      <input
        type="radio"
        name="payments"
        value="Yes"
        onChange={handleChange}
        className="mr-2"
      />
      Yes
    </label>
    <label className="inline-flex items-center">
      <input
        type="radio"
        name="payments"
        value="No"
        onChange={handleChange}
        className="mr-2"
      />
      No
    </label>
  </div>
</div>

            <button
              onClick={handleSubmit}
              className="w-full bg-[#5C24FF] hover:bg-purple-700 py-3 rounded-full text-white font-semibold"
            >
              Check Your Eligibility
            </button>
          </div>
        </div>
      </div>
    </div>


     <section className="bg-gradient-to-r from-[#0B1E3F] to-[#0E3C7E] py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={debtImage}
            alt="Pay off debt faster"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text */}
        <p className="text-white text-center mt-6 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          If you’re feeling overwhelmed by credit card bills and loans amounting
          to $20,000 or more, you’re not alone. The endless cycle of payments
          can seem insurmountable, but there’s a proven path to relief that
          doesn’t involve taking on more debt.
        </p>
      </div>
    </section>


     <section className="bg-gradient-to-r from-[#0B1E3F] to-[#0E3C7E] py-10 px-4 flex justify-center items-center">
      <div className="max-w-3xl w-full bg-transparent border border-[#4FD1C5] rounded-lg p-6 sm:p-10 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 mx-0 md:mx-28">
          Introducing Hardship Debt Relief Program
        </h2>
        <p className="text-white text-base md:text-xl leading-relaxed mx-2 py-4">
         This program helped to pay off more than $1 billion in debt. It is designed to offer a real way out for Americans struggling with significant debt. More than 300,000 Americans with debts just like yours have found hope and a clear path to being debt-free within 24-48 months.

        </p>
      </div>
    </section>

    <div className="bg-gradient-to-r from-[#0B1E3F] to-[#0E3C7E] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          How the Program Works
        </h2>

        {/* Cards Container */}
        <div className="grid md:grid-cols-3 gap-8 pt-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`border border-[#3bc1ff]  bg-gradient-to-r from-[#0E3C7E] to-[#0B1E4F]   rounded-lg p-6 text-left shadow-lg   transition-transform duration-300 hover:scale-105 ${
                index === 1 ? "md:translate-y-6" : "md:-translate-y-6"
              }`}
            >
              {/* Number Circle */}
              <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold mb-4">
                {step.number}
              </div>
              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              {/* Description */}
              <p className="text-sm text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>


    <div className="bg-gradient-to-r from-[#0d1f40] to-[#112d5c] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-start">
        <p>
            <strong>Copyright © 2024-2025 All Rights Reserved - </strong>The information above has been fact-checked and updated for accuracy.
Trademarks utilized on our website belong to their respective owners and no implied or expressed endorsement of our website or services is intended. Through in-depth research and experienced editors we provide feedback about products and services. We are independently owned, and opinions expressed here are our own.

        </p>
        <p>
            THIS IS AN ADVERTORIAL AND NOT AN ACTUAL NEWS ARTICLE, BLOG, OR CONSUMER PROTECTION UPDATE. Our disclaimer is that this site does receive compensation for product reviews and referrals or purchases made through our links. The story depicted here is for demonstration purposes only and everyone's results may vary. We hope you find our online resource informative and helpful. This website and the company that owns it is not responsible for any typographical or photographic errors. If you do not agree to our terms and policies, then please leave this site immediately. All trademarks, logos, and service marks (collectively the "Trademarks") displayed are registered and/or unregistered Trademarks of their respective owners.
        </p>
    </div>
    </div>
    </>
  );
}
