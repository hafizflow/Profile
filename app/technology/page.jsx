import Image from "next/image";

const TechNology = () => {
  return (
    <div className="text-white text-center flex flex-col justify-center items-center bg-[#171717] py-14 mt-10 sm:mt-24">
      <p className="text-xl sm:text-2xl bg-gradient-to-tr text-transparent bg-clip-text from-gray-50 via-gray-300 to-gray-500 font-medium">
        Technologies I work with
      </p>
      <div className="flex gap-x-10 mt-9 flex-wrap w-auto mx-[3%] md:w-[43rem] justify-center gap-y-5">
        <div className="flex flex-col items-center">
          <Image src="/Techs/dart.svg" alt="Dart" width={50} height={50} />
          <p className="mt-2">Dart</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/Techs/flutter.svg"
            alt="Flutter"
            width={50}
            height={50}
          />
          <p className="mt-2">Flutter</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/Techs/api.svg" alt="API" width={50} height={50} />
          <p className="mt-2">REST API</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/Techs/postman.svg"
            alt="Postman"
            width={50}
            height={50}
          />
          <p className="mt-2">Postman</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/Techs/firebase.svg"
            alt="Firebase"
            width={50}
            height={50}
          />
          <p className="mt-2">Firebase</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/Techs/sqlite.svg" alt="MongoDB" width={50} height={50} />
          <p className="mt-2">SQLite</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/Techs/getx.svg" alt="GetX" width={50} height={50} />
          <p className="mt-3">GetX</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/Techs/bloc.svg" alt="Bloc" width={50} height={50} />
          <p className="mt-2">Bloc</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/Techs/kotlin.svg" alt="Kotlin" width={50} height={50} />
          <p className="mt-2">Kotlin</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/Techs/nodejs.svg" alt="Node.js" width={50} height={50} />
          <p className="mt-2">Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/Techs/mongodb.svg"
            alt="MongoDB"
            width={50}
            height={50}
          />
          <p className="mt-2">MongoDB</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/Techs/git.svg" alt="Git" width={50} height={50} />
          <p className="mt-2">Git</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/Techs/github.svg" alt="GitHub" width={50} height={50} />
          <p className="mt-2">GitHub</p>
        </div>
      </div>
    </div>
  );
};

export default TechNology;
