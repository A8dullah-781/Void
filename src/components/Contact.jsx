import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <div
      id="contact"
      className="w-screen h-full py-0 md:py-[5vh] md:px-0 px-[6vw] bg-[#1C1C1C] "
    >
      <div ref={sectionRef}>
        <div className="lg:h-[30vh] h-full lg:py-0 py-[4vh] w-full text-[#F2F2F2] fontone flex flex-col justify-center items-center text-center ">
          <div className="hidden md:block text-[1.5vw] tracking-wider  uppercase font-light">
            Contact us:
          </div>
          <div className="md:text-[3vw] text-[9vw] font-bold">
            Get in touch with us
          </div>
          <div className="md:text-[1.4vw] text-[4vw]  font-light">
            Fill out the form below or schedule a meeting with us at your
            convenience
          </div>
        </div>

        <div className="flex flex-row md:px-[7.5vw] px-0 md:h-[35vh] lg:h-full -mt-5 justify-center items-center">
          <div className="lg:h-[70vh]  h-full w-full md:w-[50%]">
            <div className="h-full w-full flex justify-center items-center ">
              <div className="text-[#F2F2F2] text-[4vw] pb-[4vw] md:text-[1.3vw] rounded-3xl w-full md:w-[85%]">
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
                      className="text-[#1C1C1C] font-light bg-[#F2F2F2] px-3 py-2 rounded-3xl"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="text-[#1C1C1C] font-light bg-[#F2F2F2] px-3  py-2 rounded-3xl"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      className="text-[#1C1C1C] font-light px-3 bg-[#F2F2F2] py-2 rounded-3xl resize-none"
                    />
                  </div>

                 <button
  type="submit"
  className="mt-2 text-[4vw] md:text-[1.3vw] btn-slidea bg-[#F2F2F2] w-[80%] md:w-[60%] py-4 rounded-2xl"
>
  <span className="bg-slide"></span>
  <span className="text-slide">Request a consultation</span>
</button>

                  <input type="hidden" name="_captcha" value="false" />
                </form>
              </div>
            </div>
          </div>

          <div className="lg:h-[70vh] h-[35vh] w-[50%] hidden md:block text-[#F2F2F2] fontone font-semibold text-[1.3vw] ">
            <div className="mt-10 flex flex-col pl-[7.5vw] justify-center items-start gap-4">
              <div>Why Work With Void Studio?</div>

              <ul className="list-disc ml-5 mb-2">
                <li>Void Studio Thoughtful, function-driven design</li>
                <li>Clear process from concept to execution</li>
                <li>Attention to materials, proportions, and flow</li>
                <li>Designs that feel intentional, not overdone</li>
              </ul>

              <div>info@voidstudio.co.uk</div>

              <div>
                Always busy and want to book <br />
                an exact time to call?
              </div>

              <button className="py-4 btn-slide px-10 rounded-2xl text-[#F2F2F2] border-[#F2F2F2] border-1 mt-1">
                <span className="bg-slide"></span>
                <span className="text-slide text-[#F2F2F2]">Book a call</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
