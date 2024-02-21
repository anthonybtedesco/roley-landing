import { Video } from "@components/Video";

export const Demo = () => {
  return (
    <div className="text-white lg:max-w-[1200px] mx-auto h-full w-full justify-center items-center flex flex-col">
      <div className=" sm:mt-14 sm:text-4xl md:mt-5 md:text-6xl lg:text-7xl mt-6 ml-5 text-2xl font-bold">
        <p>Demo</p>
      </div>
      <div className="mt-16">
        <Video src="" />
        {/* above video needs to be recorded demo */}
      </div>
    </div>
  );
};
