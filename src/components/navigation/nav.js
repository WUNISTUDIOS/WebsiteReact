import Link from "next/link"


export default function Nav(){

    return(
        <header className="bg-white-200 ">
            <nav className="">
                <ul className="flex text-xl items-center justify-between p-5">
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
                        <Link href="/dashboard"><span>motion</span></Link>
                    </li>
                    <li>
                        <Link href="/github"><span>about</span></Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}