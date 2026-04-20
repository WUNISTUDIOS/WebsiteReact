import Link from "next/link"

export default function Nav() {

  return (
    <header >
      <nav>
        <ul
          className="flex flex-wrap w-full font-extrabold fixed top-0 text-base xl:text-5xl md:text-4xl items-center justify-evenly bg-white text-black py-3">
          <li>
            <div>
              <Link href="/" className='hover:cursor-pointer hover:scale-105 transition-transform inline-block'>
                <span>Motion</span>
              </Link>
            </div>
          </li>
          <li className='hover:cursor-pointer hover:scale-105 transition-transform'>
            <Link href="/fullstack"
            >
              <span>Design</span></Link>
          </li>
          {/* <li>
                        <Link href="/dashboard"><span>motion/graphix</span></Link>
                    </li> */}
          <li className='hover:cursor-pointer hover:scale-105 transition-transform'
          >
            <Link href="/about"><span>About</span></Link>
          </li>

        </ul>
      </nav>
    </header>
  )
}
