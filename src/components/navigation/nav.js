import Link from "next/link"


export default function Nav(){

    return(
        <header >
            <nav className="bg-white-200 text-6-xl header top-0 left-0 z-50 mx-auto pb-10">
                <ul className="flex w-full font-bold fixed text-xl m-auto items-center justify-evenly p-5">
                    <li>
                        <div>
                            <Link href="/">
                                <img 
                                    src="/images/moon_renderfav.png"
                                    alt="logo"
                                    width={80}
                                    height={80}
                                >
                                </img>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <Link href="/fullstack"> <span>fullstack</span></Link>
                    </li>
                    <li>
                        <Link href="/dashboard"><span>motion/graphix</span></Link>
                    </li>
                    <li>
                        <Link href="/about"><span>about</span></Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}