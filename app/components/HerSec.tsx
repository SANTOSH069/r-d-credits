import { Button } from '@/components/ui/button'
import BlueStar from "@/public/BlueStar.png";
import OrangeStarBg from "@/public/OrangeStarBg.png"
import Image from 'next/image';

const HerSec = () => {
  return (
    <div className='flex flex-col items-center align-middle text-center justify-center mx-auto py-6 relative'>
        <Image src={BlueStar} width={200} height={200} alt='BlueStar' className='-bottom-80 -left-120 relative'/>
        <Image src={OrangeStarBg} width={180} height={180} alt='OrangeStar' className='top-3 -right-20 absolute'/>

        <div className='flex items-center flex-col lg:font-6xl text-black max-w-4xl mx-auto'>
            <div className='scroll-m-20 text-center text-4xl font-bold tracking-tight text-balance'>
                get maximum <span className='hover:text-green-500 duration-150 transition-all ease-in cursor-pointer'>returns</span> with
            </div>
            <div className='scroll-m-20 text-center text-4xl font-bold tracking-tight text-balance'>
                minimum  <span className=' font-mono tracking-tighter text-blue-700'>efforts</span>
            </div>
        </div>
        <p className='mt-2 max-w-xl text-center text-black/50 mx-auto'>
           Cyrx is the only R&D tax credit solution that combines technical and R&D tax expertise with AI to simplify claim preparation and maximize returns.
        </p>
        <div className='flex flex-row items-center gap-4 mx-auto mt-4'>
           <Button variant={`default`} value={`Get Started`} className=' hover:text-neutral-100 transition-all ease-in duration-150'>Get Started</Button>
           <Button variant={`outline`} value={`Learn More`} className='hover:bg-blue-700 hover:text-neutral-100 transition-all ease-in duration-150'>Learn More</Button>
        </div>
        <div className='w-full h-auto mx-auto item-center mt-4'>
          
        </div>
    </div>
  ) 
}

export default HerSec