import { BsArrowRightShort } from "../Misc/Icons.collection";

const Skills = () => {
  return (
    <div className="my-16 px-3 font-sen dark:text-white" id="skills">
      <p className="text-3xl font-bold dark:text-white">Skills & Uses</p>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 dark:text-slate-300 text-slate-800">
          <BsArrowRightShort size="30" />
          <span className="dark:text-white text-grey">Python</span>
          &nbsp;as my main language
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 dark:text-slate-300 text-slate-800">
          <BsArrowRightShort size="30" />
          <span className="dark:text-white">Java</span>
          &nbsp;as android developer
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 dark:text-slate-300 text-slate-800">
          <BsArrowRightShort size="30" />
          <span className="dark:text-white">Flask</span>
          &nbsp;as my API framework
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 dark:text-slate-300 text-slate-800">
          <BsArrowRightShort size="30" />
          <span className="dark:text-white text-slate-800">Sketch</span>
          &nbsp;as my main UI/UX sketch application
        </p>

      </div>

      <p className="text-lg font-medium dark:text-slate-300 text-slate-800">
        ...more skills include <span className="dark:text-white">SQL|NoSQL</span>,{" "}
        <span className="dark:text-white">figma</span>,{" "}
        <span className="dark:text-white">50mm films</span>{" "}
      </p>
    </div>
  );
};

export default Skills;
