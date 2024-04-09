import React from 'react';
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';
import AboutCard from './AboutCard';

const AboutUs = () => {
  return (
    <section class="py-14">
    <div class="max-w-screen-xl mx-auto md:px-8">
        <div class="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div class="flex-1 sm:hidden lg:block">
                <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/371353890_10160159763472600_5401612860686916809_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mNiRFP6PkJ0Ab58b5y0&_nc_ht=scontent-lga3-1.xx&oh=00_AfDKMb0zrIm181_gCZVjxo_4_j7g4fVlTXK4O2nNjpcTXQ&oe=66188FDC" class="md:max-w-lg sm:rounded-lg" alt=""/>
            </div>
            <div class="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                <h3 class="text-sky-400 font-semibold">
                    Professional services
                </h3>
                <p class="text-white text-3xl font-semibold sm:text-4xl">
                Are You Ready to Revolutionize Your Business?
                </p>
                <p class="mt-3 text-gray-200">
                Whether it be a website, a video game or a blockchain application, Viccci is here to transform your business with tailored software solutions that drive efficiency and innovation. 
                Embrace the future of technology and propel your company forward with our expert development services.
                </p>
                
            </div>
        </div>
    </div>
</section>
  );
};

export default AboutUs;
