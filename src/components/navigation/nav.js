import Link from "next/link"

export default function Nav(){

    return(
        <header >
            <nav>
                <ul 
                    className="flex flex-wrap w-full font-extrabold fixed text-base xl:text-5xl md:text-4xl items-center justify-evenly bg-white ">
                    <li>
                        <div>
                            <Link href="/"
                            >
                                <img 
                                    src="/images/moon_renderfav.png"
                                    alt="logo"
                                    width={200}
                                    height={200}
                                    className='hover:cursor-pointer hover:scale-105 transition-transform'
                                >
                                </img>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <Link href="/fullstack"
                        > 
                        <span>fullstack</span></Link>
                    </li>
                    {/* <li>
                        <Link href="/dashboard"><span>motion/graphix</span></Link>
                    </li> */}
                    <li>
                        <Link href="/about"><span>about</span></Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}