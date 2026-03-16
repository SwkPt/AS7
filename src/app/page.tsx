import Image from "next/image";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import CardPanel from "@/components/CardPanel";


export default function Home() {
  return (
    <div>
      <main className='w-full'>
        <Banner/>
        <CardPanel/>
        </main>
      </div>
  );
}
