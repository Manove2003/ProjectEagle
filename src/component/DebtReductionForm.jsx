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
    { number: "01", title: "No Upfront Fees", description: "Answer a couple of questions below." },
    { number: "02", title: "Fast & Risk Free", description: "You can get a fast, no obligation savings estimate..." },
    { number: "03", title: "Consolidate & Save", description: "By negotiating with creditors, our company helps you save..." }
  ];

  const [formData, setFormData] = useState({
    debt: "",
    hardship: "",
    payments: "",
    resident: "",
    creditDebt: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true); // hide form & show result
  };

  // ✅ Check qualification logic
  const isQualified = formData.resident === "Yes" && formData.creditDebt === "Yes";

  return (
      <div className="min-h-screen flex flex-col justify-center items-center   px-4 bg-gradient-to-r from-[#0B1E3F] to-[#0E3C7E] relative overflow-hidden">
      {/* Eagle Image */}
      <img
        src={eagleImage}
        alt="Eagle"
        className="absolute right-0 md:right-60 bottom-0 w-64 sm:w-80 md:w-[500px] object-contain opacity-100 z-0"
      />

      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div className="text-white">
          <h1 className="text-2xl sm:text-3xl md:text-5xl pt-6 font-bold mb-4 max-w-xl">
            New debt reduction plan for Americans, qualifying individuals receive an average debt reduction of{" "}
            <span className="text-yellow-400">$26,352.</span>
          </h1>
          <p className="text-sm sm:text-base mb-6 max-w-md">
            Americans with $10,000 or more in credit card debt have a 95% approval rate – funding ends soon.
          </p>
          <button className="bg-[#5C24FF] hover:bg-purple-700 px-6 py-3 rounded-full font-semibold text-white">
            Check Your Eligibility
          </button>
          <img src={heroimg} alt="Hero" className="-ml-4 mt-8" />
        </div>

        {/* Right Side */}
        <div className="backdrop-blur-sm md:backdrop-blur-md bg-white/8 rounded-2xl p-6 mt-0 md:mt-20 shadow-lg w-full sm:w-3/5 max-w-md md:ml-auto text-white">
          {!submitted ? (
            // ✅ Show form before submit
            <div className="space-y-4">
              {/* Q1 */}
              <div>
                <p className="mb-2 font-medium">1. How much debt you have?</p>
                <label>
                  <input type="radio" name="debt" value="Above $10000" onChange={handleChange} /> Above $10000
                </label>
                <label className="ml-4">
                  <input type="radio" name="debt" value="Below $1000" onChange={handleChange} /> Below $1000
                </label>
              </div>

              {/* Q2 */}
              <div>
                <p className="mb-2 font-medium">2. Are you experiencing a financial hardship?</p>
                <label>
                  <input type="radio" name="hardship" value="Yes" onChange={handleChange} /> Yes
                </label>
                <label className="ml-4">
                  <input type="radio" name="hardship" value="No" onChange={handleChange} /> No
                </label>
              </div>

              {/* Q3 */}
              <div>
                <p className="mb-2 font-medium">3. Are you able to make monthly payments?</p>
                <label>
                  <input type="radio" name="payments" value="Yes" onChange={handleChange} /> Yes
                </label>
                <label className="ml-4">
                  <input type="radio" name="payments" value="No" onChange={handleChange} /> No
                </label>
              </div>

              {/* Q4 */}
              <div>
                <p className="mb-2 font-medium">4. Are you a resident of the United States?</p>
                <label>
                  <input type="radio" name="resident" value="Yes" onChange={handleChange} /> Yes 
                </label>
                <label className="ml-4">
                  <input type="radio" name="resident" value="No" onChange={handleChange} /> No 
                </label>
              </div>

              {/* Q5 */}
              <div>
                <p className="mb-2 font-medium">5. Is your credit card debt above $10,000?</p>
                <label>
                  <input type="radio" name="creditDebt" value="Yes" onChange={handleChange} /> Yes 
                </label>
                <label className="ml-4">
                  <input type="radio" name="creditDebt" value="No" onChange={handleChange} /> No 
                </label>
              </div>

              {/* Submit button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-[#5C24FF] hover:bg-purple-700 py-3 rounded-full text-white font-semibold mt-4"
              >
                Check Your Eligibility
              </button>
            </div>
          ) : (
            // ✅ After submit: Show result
            <div className="text-center">
              {isQualified ? (
                <>
                  <p className="text-green-400 font-semibold mb-4">
                    🎉 Congratulations! You may qualify for debt relief. Please call us now: <br/> 888-217-3264
                  </p>
                  <button
                    onClick={() => (window.location.href = "tel:8882173264")}
                    className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-full text-white font-bold"
                  >
                    📞 Call 888-217-3264
                  </button>
                </>
              ) : (
                <p className="text-red-400 font-semibold">
                  ❌ Sorry, you are not qualified at this time.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

  