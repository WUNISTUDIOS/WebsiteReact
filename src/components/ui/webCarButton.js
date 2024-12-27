import Link from 'next/link';
import Image from 'next/image';

export default function CardButton({ href, imageSrc, title, description }) {
  return (
    <Link href={href} 
        className="font-bold text-2xl p-20 text-center rounded-2xl shadow-2xl">
      <div>
        <Image
          src={imageSrc}
          alt={title}
          width={200}
          height={300}
          className='rounded-3xl p-5'
        />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  )
}
