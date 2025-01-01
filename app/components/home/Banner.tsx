import Image from "next/image";

const Banner = () => {
  return (
    <div className="h-[257px] bg-black flex items-center justify-center">
      <div className="h-[237px] relative w-full">
        <Image src="/banner.jpeg" alt="" fill className="object-cover" />
      </div>
    </div>
  );
};

export default Banner;
