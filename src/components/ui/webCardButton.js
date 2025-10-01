import Link from 'next/link';
import Image from 'next/image';

export default function CardButton({ href, imageSrc, title, description }) {
  return (
    <Link href={href} 
        className="text-center content-center hover:cursor-pointer hover:scale-105 transition-transform">
      <div>
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={500}
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