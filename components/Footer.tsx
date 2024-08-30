import { FaLocationArrow } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  const handleCall = (phoneNumber: String) => {
    // Check if user is on mobile device
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // Use a tel link to open the phone app with the number pre-filled
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // Inform user that call can't be initiated directly on desktop
      alert(
        "Call functionality is not available on desktop devices. Please use a phone to call."
      );
    }
  };

  const handleWhatsapp = (phoneNumber: String) => {
    // Open WhatsApp chat with pre-filled number (might require additional setup)
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank"); // Check compatibility for your region
  };

  return (
    <footer className="w-full  pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let's team up and make things happen. Reach out today, and let's
          discuss a path to success.
        </p>
        <a href="mailto:gulshank1602@gmail.com" target="_blank">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="mr-2 flex gap-2">
          <span className="text-purple text-xl">Contact: </span>
          {/* <FaWhatsapp
            className="mr-1 mt-1 cursor-pointer"
            onClick={() => handleWhatsapp("7505566716")}
          />{" "} */}
          <FaPhone
            className="mr-1 mt-1 cursor-pointer"
            onClick={() => handleCall("7505566716")}
          />
          7505566716
        </div>{" "}
        <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link} target="_blank">
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
