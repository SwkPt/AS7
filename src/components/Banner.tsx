import Image from 'next/image';
export default function Banner(){
    return(
        <div className='relative h-[80vh] w-full overflow-hidden'>
            <Image src={'/img/banner.jpg'}
            alt='cover'
            fill={true}
            className='object-cover'
            />
            <div className='absolute inset-0 bg-black/30' />
            <div className='relative z-20 flex h-full flex-col items-center justify-center px-4 text-center text-white'>
                <h1 className='text-3xl font-bold tracking-wide sm:text-5xl'>where every event finds its venue</h1>
                <h3 className='mt-4 text-base sm:text-xl'>Finding the perfect venue for all sort of event!!!</h3>
            </div>
        </div>
    );
}