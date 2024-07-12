import { DiGithubBadge } from "react-icons/di";
import { HiOutlineExternalLink } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
export default function ProjectComponents({
  image,
  technology,
  title,
  description,
  gitUrl,
  demoUrl,
}) {
  return (
    <div className="flex flex-col gap-y-3 md:gap-y-0 md:flex-row mt-11">
      <div className=" relative flex group justify-center items-center sm:w-[24rem] h-60 ">
        <div className=" hidden text-white brightness-150 animate-pulse   group-hover:flex absolute z-50   gap-x-3">
          <Link
            href={demoUrl}
            target="_blank"
            className="flex  items-center gap-x-2"
          >
            <HiOutlineExternalLink size={23} />
            <p>Demo</p>
          </Link>

          <Link
            href={gitUrl}
            target="_blank"
            className="flex  items-center gap-x-2"
          >
            <DiGithubBadge size={25} />
            <p>Source code</p>
          </Link>
        </div>
        <Image
          src={image}
          className="w-96 transition group-hover:brightness-50  group-hover:blur-sm group-hover:scale-105 h-60 object-cover "
          width={1920}
          height={1080}
          alt="NFT"
        />
      </div>

      <div className="text-gray-200 mx-7 my-3 text-sm w-72 ">
        <p className="text-2xl font-medium">{title}</p>
        <p className="mt-4">{description}</p>
        <p className="uppercase text-gray-400 mt-7">Technologies used</p>
        <p className="mt-2 text-gray-300">{technology}</p>
        <div className="mt-6 flex gap-x-7">
          <Link
            href={demoUrl}
            target="_blank"
            className="flex  items-center gap-x-2"
          >
            <HiOutlineExternalLink size={23} />
            <p>Demo</p>
          </Link>

          <Link
            href={gitUrl}
            target="_blank"
            className="flex  items-center gap-x-2"
          >
            <DiGithubBadge size={25} />
            <p>Source code</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
