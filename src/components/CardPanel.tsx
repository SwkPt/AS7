'use client'
import { useReducer } from "react"
import Card from "@/components/Card";
import Link from "next/link";

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

    /**
     * Mock Venue Data
     */
    const mockVenueRepo = [
        {vid: "001", name: "The Bloom Pavilion", image:'/img/bloom.jpg'},
        {vid: "002", name: "Spark Space", image:'/img/sparkspace.jpg'},
        {vid: "003", name: "The Grand Table", image:'/img/grandtable.jpg'}
    ]

    const [ratingList, dispatchRating] = useReducer(ratingReducer, new Map(
        mockVenueRepo.map(venue => [venue.name, 0])
    ))

    return(
        <div>
            <div style={{margin:"20px", display:"flex",flexDirection:"row",flexWrap:"wrap", justifyContent:"space-around",alignContent:"space-around"}}>
                {
                    mockVenueRepo.map( (venueItem)=>(
                        <Link href={`/venue/${venueItem.vid}`} key={venueItem.vid} className="w-1/5" >
                        <Card venueName={venueItem.name} imgSrc={venueItem.image} onRateChange={(venueName, ratingValue) => dispatchRating({type:'add', venueName, ratingValue})} />
                        </Link>
                    ) ) 
                }
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