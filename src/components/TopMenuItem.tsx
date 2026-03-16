import Link from "next/link";


export default function TopMenuItem({title, pageRef} : {title:string, pageRef:string}){
    return(
        <Link
            href={pageRef}
            className='my-auto w-[120px] text-center text-[10pt] text-gray-500 [font-family:Verdana,Geneva,Tahoma,sans-serif]'
        >
            {title}
        </Link>
    );
}