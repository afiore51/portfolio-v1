import type { NextComponentType } from "next";

import {
  BsSpotify,
  MdEmail,
  AiOutlineGithub,
  AiOutlineTwitter,
  FaInstagram,
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";

const Contact: NextComponentType = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/afiore51" />

        <Icon
          icon={<AiOutlineTwitter />}
          url="https://twitter.com/RuedesTroisFrer"
        />

        <Icon icon={<MdEmail />} url="mailto:andrea.fiore.zip@gmail.com" />

        <Icon
          icon={<FaInstagram />}
          url="https://www.instagram.com/aerdna.eroif/"
        />
      </div>
    </div>
  );
};

export default Contact;
