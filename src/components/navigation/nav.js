import Link from "next/link"


export default function Nav(){

    return(
        <header className="bg-white-200 ">
            <nav>
                <ul className="flex justify-between p-4">
                    <li>
                        <Link href="/"><span>logo</span></Link>
                    </li>
                    <li>
                        <Link href="/fullstack"> <span>fullstack</span></Link>
                    </li>
                    <li>
                        <Link href="/dashboard"><span>motion</span></Link>
                    </li>
                    <li>
                        <Link href="/github"><span>github</span></Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}