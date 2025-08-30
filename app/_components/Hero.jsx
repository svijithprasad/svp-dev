import { PulsatingButton } from '@/components/magicui/pulsating-button'
import { MagneticButton } from '@/components/ui/magnetic-button'
import FloatingCursors from '../_components/FloatingCursors'
import Image from 'next/image';
import React from 'react'

const Hero = () => {
    return (
        <>

            <div className='flex items-center flex-col justify-center h-screen w-full font-haken gap-2'>
                <div className='flex items-center w-[60%]  h-[70px] justify-center gap-6'>
                    <div className="w-20 h-20 rounded-full bg-amber-50 overflow-hidden">

                        <Image
                            src="/profile.png"
                            alt="profile"
                            priority
                            width={200}
                            height={200}
                            quality={100}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className='text-xl border border-[#FFFFE3]/20 rounded-full px-3 py-4'>Hello, I'm Vijith</div>
                </div>
                <div className='flex items-center gap-6'>
                    <div className='text-[#A374FF] font-bold text-8xl'>FULL-STACK</div>
                    <div className='text-wrap w-[100px]'>// Based in Karnataka, India</div>
                </div>
                <div className='text-[#FFD074] font-bold text-8xl'>CREATOR</div>


                <div className='flex items-center gap-5'>
                    <div className='text-[#FFFFE3] font-bold text-8xl'>DESIGNER</div>

                    <MagneticButton>
                        <button className="bg-[#0E100F] cursor-pointer border border-[#FFFFE3]/20 hover:bg-indigo-600 transition-colors px-10 text-lg text-white py-4 rounded-full flex items-center gap-4">
                            <span
                                className="inline-block h-3 w-3 rounded-full bg-green-500"
                                style={{
                                    animation: 'pulse-green 1.5s infinite',
                                }}
                            />
                            Let's Connect
                        </button>
                    </MagneticButton>
                </div>
                <div className='flex items-center'>
                    <div className='text-wrap w-[170px]'>// Engineering modern web applications efficiently</div>
                    <div className='text-[#17F1D1] font-bold text-8xl'>& DEVELOPER.</div>
                </div>
                <div className='text-wrap w-[700px] text-3xl text-center'>
                    I build digital experiences where <span className='text-[#A374FF]'>minimal</span> meets <span className='text-[#FFD074]'>accessibility</span> and <span className='text-[#17F1D1]'>functionality</span>.
                </div>
            </div >
            <FloatingCursors
                size={40}
                color="#A374FF"
                top="50%"
                left="70%"
                tooltipText="svp-dev"
                movementRange={20} // optional, default 20
            />

            <FloatingCursors
                size={40}
                color="#EE46D3"
                top="30%"
                left="40%"
                tooltipText="Product"
                movementRange={25}
            />

            <FloatingCursors
                size={40}
                color="black"
                top="80%"
                left="17%"
                tooltipText="Dev"
                movementRange={30}
            />

        </>
    )
}

export default Hero