import React from "react";
import eagleImage from "../assets/Egale1.png";
import heroimg from "../assets/heroimg.png";
import avatar1 from "../assets/E1.png";
import avatar2 from "../assets/E2.png";
import avatar3 from "../assets/E3.png";
import avatar4 from "../assets/E4.png";
import debtImage from "../assets/Rectangle.png";

export default function Allpage() {
  // Steps data
  const steps = [
    {
      number: 1,
      title: "Free Consultation",
      description:
        "Speak with a debt relief specialist to review your financial situation and explore options.",
    },
    {
      number: 2,
      title: "Custom Plan",
      description:
        "A tailored program is designed for your debt amount and financial needs.",
    },
    {
      number: 3,
      title: "Debt Freedom",
      description:
        "Follow the plan and become debt-free in as little as 24–48 months.",
    },
  ];

  return (
    <>
      {/* Section 1 */}
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
            If you’re feeling overwhelmed by credit card bills and loans
            amounting to $20,000 or more, you’re not alone. The endless cycle of
            payments can seem insurmountable, but there’s a proven path to
            relief that doesn’t involve taking on more debt.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-gradient-to-r from-[#0B1E3F] to-[#0E3C7E] py-10 px-4 flex justify-center items-center">
        <div className="max-w-3xl w-full bg-transparent border border-[#4FD1C5] rounded-lg p-6 sm:p-10 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 mx-0 md:mx-28">
            Introducing Hardship Debt Relief Program
          </h2>
          <p className="text-white text-base md:text-xl leading-relaxed mx-2 py-4">
            This program helped to pay off more than $1 billion in debt. It is
            designed to offer a real way out for Americans struggling with
            significant debt. More than 300,000 Americans with debts just like
            yours have found hope and a clear path to being debt-free within
            24–48 months.
          </p>
        </div>
      </section>

      {/* Section 3: Program Steps */}
      <div className="bg-gradient-to-r from-[#0B1E3F] to-[#0E3C7E] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            How the Program Works
          </h2>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 pt-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`border border-[#3bc1ff] bg-gradient-to-r from-[#0E3C7E] to-[#0B1E4F] rounded-lg p-6 text-left shadow-lg transition-transform duration-300 hover:scale-105 ${
                  index === 1 ? "md:translate-y-6" : "md:-translate-y-6"
                }`}
              >
                {/* Number */}
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

      {/* Footer / Disclaimer */}
      <div className="bg-gradient-to-r from-[#0d1f40] to-[#112d5c] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-start space-y-4 text-sm leading-relaxed">
          <p>
            <strong>Copyright © 2024-2025 All Rights Reserved - </strong>
            The information above has been fact-checked and updated for
            accuracy. Trademarks utilized on our website belong to their
            respective owners and no implied or expressed endorsement of our
            website or services is intended. Through in-depth research and
            experienced editors we provide feedback about products and services.
            We are independently owned, and opinions expressed here are our own.
          </p>
          <p>
            THIS IS AN ADVERTORIAL AND NOT AN ACTUAL NEWS ARTICLE, BLOG, OR
            CONSUMER PROTECTION UPDATE. Our disclaimer is that this site does
            receive compensation for product reviews and referrals or purchases
            made through our links. The story depicted here is for demonstration
            purposes only and everyone's results may vary. We hope you find our
            online resource informative and helpful. This website and the
            company that owns it is not responsible for any typographical or
            photographic errors. If you do not agree to our terms and policies,
            then please leave this site immediately. All trademarks, logos, and
            service marks (collectively the "Trademarks") displayed are
            registered and/or unregistered Trademarks of their respective
            owners.
          </p>
        </div>
      </div>
    </>
  );
}
