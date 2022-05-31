import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About: NextComponentType = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="text-3xl font-bold text-white">Hi, I'm Andrea 👋</p>
        <p className="mt-1 text-lg text-gray-300">
          A junior data scientist | data analyst
        </p>

        <p className="mt-4 text-gray-400">
          Currently working in a small consulting company, <br /> 
          founded in 2008 and based in Rome, <br />
          intensely active in the field of Data Science throughout Italy. <br />
          Over the past few years i toked several pictures|polaroid, <br />
          made music, read about UI/UX design.
        </p>

        <Link href="https://unsplash.com/@meni_sco" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            See my photos
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>

      </div>

      <div className="hidden custom:block">
        <Image
          src="/assests/avatar.png"
          width="112"
          height="112"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
