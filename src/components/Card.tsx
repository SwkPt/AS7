import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';
import { useState } from 'react';

export default function ProductCard({venueName,imgSrc,onRateChange}:{venueName:string, imgSrc:string,onRateChange:(venueName:string, ratingValue:number)=>void}){
    const [ratingValue, setRatingValue] = useState<number>(0);
    
    return(
        <InteractiveCard contentName={venueName}>
            <div className='w-full h-[70%] relative rounded-t-lg '> 
                <Image src={imgSrc}
                    alt='Venue Picture'
                    fill={true}
                    className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-full h-[15%] p-[10px] text-emerald-60'>
                {venueName}
            </div>
            <Rating className='mx-[5px] h-[15%]' id={venueName + " Rating"} name={venueName + " Rating"} 
            data-testid={venueName + " Rating"} value={ratingValue} onChange={(e, value)=>{setRatingValue(value || 0); e?.stopPropagation(); onRateChange(venueName, value || 0);}} ></Rating>
        </InteractiveCard> 
    );
}