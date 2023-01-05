import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-screen sm:my-20 ">
      <div className="flex  w-full flex-wrap xl:flex-nowrap container mx-auto  justify-between  py-[2rem] z-50 ">
        <div className="flex sm:mt-8 flex-col  text-left px-2   ">
          <img src="bird.png" className="align-middle"/>
          <h1 className="text-5xl font-bold leading-none ">What is $MNGO Token?</h1>
          <br/>
          <p className="max-w-lg text-xl ">
           $MNGO token is a fungible token built on Hedera with 50,000,000 supply. 
            It is the token that represents the Pandamania Collections (Hashmingos, Lady Mingos, and Panda Syndicates) and used within its community. 
            This  utility token offers different usages and activities that keeps the community engaged while rewarding them for being a supporter. 
            Mingo’s World or Pandamania ecosystem is built around the usage of MNGO and creating more and more ways to help maintain its importance 
            and usage throughout the entire Hedera, including making important partnerships to take the token to the next level. {" "}
          </p>
          <div className="flex  items-center sm:justify-center mt-10 sm:m-0 lg:justify-start ">
            <>
              
            </>
            <>
              
            </>
          </div>
        </div>
        <div className="h-[4 relative xl:fit xl:top-16 right-0">
          
        </div>
      </div>
    </div>
  );
}
