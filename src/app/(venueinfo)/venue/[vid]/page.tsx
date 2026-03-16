import Image from "next/image";

export default async function VenueDetailPage({params}:{params: {vid:string}}) {
    const { vid } = await params
    
    const mockVenueRepo = new Map()
    mockVenueRepo.set("001", { name: "The Bloom Pavilion", image:'/img/bloom.jpg'})
    mockVenueRepo.set("002", { name: "Spark Space", image:'/img/sparkspace.jpg'})
    mockVenueRepo.set("003", { name: "The Grand Table", image:'/img/grandtable.jpg'})

    const venueData = mockVenueRepo.get(vid)
    
    if (!venueData) {
        return <main>Venue not found</main>
    }

    return(
    <div>
        <main className="text-center p-5" >
            <h1 className="text-lg font-medium " >Venue ID {vid}</h1>
            <div className="flex flex-row my-5" >
                <Image src={venueData.image}
                alt="venue image" width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%]"/>
            <div className="text-md mx-5" >{venueData.name}</div>
            </div>
        </main>
    </div>
    );
}

export async function generateStaticParams() {
    return [{vid:'001'},{vid:'002'},{vid:'003'}]
}