import Link from 'next/link';
import Image from 'next/image';

export default function LeafyCard({ href, imageSrc, title, description }) {
  return (
    <Link href={href} 
        className="font-bold text-2xl text-center rounded-2xl p-20 py-10 shadow-2xl">
      <div>
        <Image
          src={imageSrc}
          alt={title}
          width={200}
          height={300}
          className='rounded-3xl p-10'
        />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  )
}
