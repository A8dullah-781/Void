import React from "react";

const Contact = () => {
  return (
    <div className="w-screen h-screen bg-[#F2F2F2] ">
      <div className="h-[30vh] w-full text-black fontone flex flex-col justify-center items-center text-center ">
        <div className="text-[1.5vw] tracking-wider  uppercase font-light">Contact us:</div>
        <div className="text-[3vw]  font-bold">Get in touch with us</div>
        <div className="text-[1.4vw]  font-light">
          Fill out the form below or schedule a meeting with us at your <br />
          convenience
        </div>
      </div>

      <div className="flex flex-row px-[7.5vw] -mt-5 justify-center items-center">

        <div className="h-[70vh] w-[50%]">
<div className="h-full w-full  ">
        <div className="text-black text-[1.3vw] rounded-3xl w-[85%]">
          <form
            action="https://formsubmit.co/your-email@example.com"
            method="POST"
            className="flex p-6 flex-col justify-evenly gap-4"
          >
            

            <div className="flex flex-col gap-1">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                className="text-[#F2F2F2] font-light bg-[#1C1C1C] px-3 py-2 rounded-3xl"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="text-[#F2F2F2] font-light bg-[#1C1C1C] px-3  py-2 rounded-3xl"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="text-[#F2F2F2] font-light px-3 bg-[#1C1C1C] py-2 rounded-3xl resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 text-[1.3vw] bg-[#1C1C1C] w-[60%] text-[#FEF1D9] py-4 rounded-2xl "
            >
              Request a consultation
            </button>

            <input type="hidden" name="_captcha" value="false" />
          </form>
        </div>
      </div>
        </div>

        <div className="h-[70vh] w-[50%] fontone font-semibold text-[1.3vw] ">

          <div className="mt-10 flex flex-col pl-[7.5vw] justify-center items-start gap-4">  
            <div>Why Work With Void Studio?</div>

            <ul className="list-disc ml-5 mb-2">
                <li>Void Studio Thoughtful, function-driven design</li>
                <li>Clear process from concept to execution</li>
                <li>Attention to materials, proportions, and flow</li>
                <li>Designs that feel intentional, not overdone</li>
            </ul>

            <div>info@voidstudio.co.uk</div>

            <div>Always busy and want to book <br />
                 an exact time to call?</div>

            <button className="py-4 px-10 rounded-2xl border-black border-1 mt-1">Book a call</button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
