'use client'
import { useReducer } from "react"
import Card from "@/components/Card";
import { Rating } from "@mui/material";

export default function CardPanel(){

     const ratingReducer = (ratingList:Map<string, number>, action:{type:string, venueName:string, ratingValue?:number})=>{
        switch(action.type){
            case 'add':{
                const newMap = new Map(ratingList)
                newMap.set(action.venueName, action.ratingValue || 0)
                return newMap
            }
            case 'remove':{
                const newMap = new Map(ratingList)
                newMap.delete(action.venueName)
                return newMap
            }
            default: return ratingList
        }
    }

    const [ratingList, dispatchRating] = useReducer(ratingReducer, new Map([
        ['The Bloom Pavilion', 0],
        ['Spark Space', 0],
        ['The Grand Table', 0]
    ]))

    return(
        <div>
            <div className='m-5 flex flex-row flex-wrap justify-around content-around gap-6'>
            <Card venueName='The Bloom Pavilion' imgSrc='/img/bloom.jpg' onRateChange={(venueName, ratingValue) => dispatchRating({type:'add', venueName, ratingValue})} />
            <Card venueName='Spark Space' imgSrc='/img/sparkspace.jpg' onRateChange={(venueName, ratingValue) => dispatchRating({type:'add', venueName, ratingValue})} />
            <Card venueName='The Grand Table' imgSrc='/img/grandtable.jpg' onRateChange={(venueName, ratingValue) => dispatchRating({type:'add', venueName, ratingValue})} />
            </div>
            <div className='w-fill text-sl font-md'>Venue List with Rating: {ratingList.size}</div>
            {Array.from(ratingList.entries()).map(([venue, ratingValue]) => (
                <div key={venue} data-testid={venue} onClick={() => dispatchRating({type:'remove', venueName:venue})}>
                    {venue} Rating: {ratingValue}
                </div>
            ))}
        </div>
    );


}