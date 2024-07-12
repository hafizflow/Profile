import ProjectComponents from "./ProjectComponents";

const ShowCase = () => {
  return (
    <div className="mx-[16%] mt-16 flex justify-center flex-col items-center">
      <p className="text-2xl bg-gradient-to-tr text-transparent bg-clip-text from-gray-50 via-gray-300 to-gray-500 font-medium mt-7">
        Projects I worked on
      </p>
      <ProjectComponents
        image={"/projects/cover.png"}
        title="NFT Selling app"
        description="This app is designed and developed to Sell Nfts"
        technology="nextjs , tailwind"
        gitUrl="https://github.com/Riyad139/NFT-market"
        demoUrl="https://nft-market-demo-seven.vercel.app"
      />
    </div>
  );
};

export default ShowCase;
