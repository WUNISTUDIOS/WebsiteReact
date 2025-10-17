import Link from 'next/link';
import Image from 'next/image';

export default function CardButton({ href, imageSrc, title, description }) {
  return (
    <Link href={href} 
        className="hover:cursor-pointer hover:scale-105 transition-transform lg:w-max p-5">
      <div>
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={800}
          className='rounded-3xl'
        />
        <h2
          className='font-bold text-2xl mt-2'
        >{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  )
}