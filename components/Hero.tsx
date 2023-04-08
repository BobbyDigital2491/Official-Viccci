import Link from "next/link";

export default function Hero() {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
      <video
        className='object-cover h-full w-full absolute -z-10'
        src="https://bafybeiegubvvc553ux2joxq5qbyiypmvgavvhdrk7tckpgufby7q65j4ra.ipfs.dweb.link/video%20copy.mp4"
        autoPlay
        loop
        muted
      />
      <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
        <h1 className='py-2'>Viccci&nbsp;
          <span className='blue'>Protocol</span> 
        </h1>
        <p className='text-xl py-4'>
        Take control of your data with Viccci Protocol. Our platform empowers 
        users to own and monetize their own data, giving you complete control 
        over your information. Viccci offers a secure, decentralized platform 
        for your data management needs. Own your data and turn it into a valuable asset,
        take back control of your data. 
        
        </p>
        <div>
          <a href="/about"><button className='m-2'>About</button></a>
          <a href="/whitepaper"><button className='m-2'>Whitepaper</button></a>
        </div>
      </div>
     
    </div>
  );
}
