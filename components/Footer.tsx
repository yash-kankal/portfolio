import { FaLocationArrow } from "react-icons/fa6";
import Image from 'next/image';
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={1920}
          height={400}
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let&apos;s have a <span className="text-purple">conversation</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today with the button below!
        </p>
        <a href="mailto:ykankal@asu.edu">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center w-full px-10">
        <p className="md:text-base text-sm md:font-normal font-light">
          Yash Amol Kankal
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/yash-kankal"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <Image src={socialMedia[0].img} alt="GitHub" width={20} height={20} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/yashkankal/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <Image src={socialMedia[1].img} alt="LinkedIn" width={20} height={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
