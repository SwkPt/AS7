'use client'
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Banner(){
    const router = useRouter();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const bannerImages = [
        '/img/cover.jpg',
        '/img/cover2.jpg',
        '/img/cover3.jpg',
        '/img/cover4.jpg'
    ];

    const handleImageClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    };

    const handleNavigate = () => {
        router.push('/venue');
    };

    return(
        <div className='relative h-[80vh] w-full overflow-hidden'>
            <div className='cursor-pointer' onClick={handleImageClick}>
                <Image src={bannerImages[currentImageIndex]}
                alt='cover'
                fill={true}
                className='object-cover'
                />
            </div>
            <div className='absolute inset-0 bg-black/30' />
            <div className='relative z-20 flex h-full flex-col items-center justify-center px-4 text-center text-white cursor-pointer' onClick={handleNavigate}>
                <h1 className='text-3xl font-bold tracking-wide sm:text-5xl'>where every event finds its venue</h1>
                <h3 className='mt-4 text-base sm:text-xl'>Select Venue</h3>
            </div>
        </div>
    );
}