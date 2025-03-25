import Head from "next/head"
import localFont from "next/font/local"
import Image from "next/image"
import Link from "next/link"

export default function Leafy() {
    return (
        <section className='my-40 text-white'>
            <div className='flex flex-col content-center justify-evenly text-center space-y-2'>
                <h1 className='font-bold text-4xl xl:text-xl md:text-xl '
                >
                    LEAFYTHINGS
                </h1>
                <h1 className='font-bold text-4xl underline '
                >
                    / Product Design / UI - UX /
                </h1>
                <p className='font-extralight xl:text-2xl md:text-4xl text-4xl m-5 p-4'
                >
                    A new and ever changing industry, Cannabis from a cultural and business
                    prespective has much room for innovation. Designing from a
                    wholesale and consumer stand point, I interprate and anticipate
                    the needs of the industry as it adapts to the gobal digital market
                </p>
            </div>
            <div className='content-center m-5 relative'>
                <Image
                    src="https://d6wod28es4wuu.cloudfront.net/buzzed_papersCompressd.webp"
                    width={2000}
                    height={500}
                    className='shadow-sm rounded-xl'
                />
            </div>
            <section className="flex relative flex-wrap justify-start p-5 ">
                <div className="w-full sm:w-1/2 lg:w-1/2 ">
                    <Image
                        src="https://d6wod28es4wuu.cloudfront.net/buzzd_baggyCompressed.webp"
                        width={3000}
                        height={3000}
                        className="w-full h-auto shadow-sm rounded-xl"
                    />
                </div>
                <div className=" w-full sm:w-1/2 lg:w-1/2 ">
                    <Image
                        src="https://d6wod28es4wuu.cloudfront.net/bussy_baggyCompressed.webp"
                        width={5000}
                        height={5000}
                        className="w-full h-auto shadow-sm rounded-xl"
                    />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/2 ">
                    <Image
                        src="https://d6wod28es4wuu.cloudfront.net/bussy_tray_largeCompressed.webp"
                        width={5000}
                        height={5000}
                        className="w-full h-auto shadow-sm rounded-xl"
                    />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/2 ">
                    <Image
                        src="https://d6wod28es4wuu.cloudfront.net/buzzd_tray_large.png"
                        width={5000}
                        height={5000}
                        className="w-full h-auto shadow-sm rounded-xl"
                    />
                </div>
            </section>
            <div className="flex flex-col items-center justify-center text-center space-y-2">
                <p className="font-extralight text-sm m-5 text-slate-500">
                    concept package designs for buzzd and busy bee
                </p>
            </div>
            <section className='flex flex-wrap items-start justfy-center'>
                <div className='text-sm w-full md:w-1/3 p-5'>
                    <li className="font-bold text-4xl xl:text-xl md:text-xl bg-gradient-to-r from-red-600 to-blue-600 hover:cursor-pointer hover:scale-105 transition-transform rounded-sm pl-2">
                        <Link target="_blank" href="https://eatmeedibles.com/"><spann> Eatme - UI</spann></Link>
                    </li>
                    {/* <h1 className='font-bold text-4xl xl:text-xl md:text-xl'> Eatme UI</h1> */}
                    <hr className='my-2'></hr>
                    <p className='font-monument relative'>
                        A direct to consumer desktop and mobile application.
                        A frictionless platform for both developers, consumers and clients.
                        Individualistic yet well researched platforms designed for a fast paced
                        ever changing digital market.<br></br> <br></br>
                        Eat me, with its bold and colorful package design, have themselves a platform
                        that highlights their unique branding, while cleverly revealing their product
                        categories and statistics.

                    </p>
                </div>
                <Image
                    src="https://d6wod28es4wuu.cloudfront.net/EatmedesktopPage.jpg"
                    width={2150}
                    height={5777}
                    className="md:w-[40%] w-full shadow-sm rounded-xl p-5 relative"
                />
                <Image
                    src="https://d6wod28es4wuu.cloudfront.net/shopEatme.jpg"
                    width={390}
                    height={2515}
                    className=" md:w-[20%] shadow-sm rounded-xl p-5 relative"
                />
            </section>
            <div className='flex flex-col content-center justify-evenly text-center space-y-2'>
                <h1 className='font-bold text-4xl '
                >
                    Some of my Jams
                </h1>
            </div>
            <div className="flex flex-wrap justify-center relative p-5">
                <iframe
                    src="https://embed.figma.com/design/rn1ZgoMlzSsIbvMH9JemnY/ProductPageLeafyThings?node-id=0-1&embed-host=share"
                    width="1000"
                    height="450"
                    allowFullScreen
                    style={{ border: 'none' }}
                />
            </div>
            <div className="flex flex-wrap justify-center relative p-5">
                <iframe
                    src="https://embed.figma.com/design/vxbySv183edvLMm1qJ3x8G/EatMe?node-id=0-1&embed-host=share"
                    width="1000"
                    height="450"
                    allowFullScreen
                    style={{ border: 'none' }}
                />
            </div>
        </section>
    )
}





