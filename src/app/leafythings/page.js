import Head from "next/head"
import localFont from "next/font/local"
import Image from "next/image"
import Link from "next/link"

export default function Leafy() {
    return (
        <section className='mt-8 text-black relative'>
            <div className="flex flex-wrap justify-center items-start gap-8 w-[95%] max-w-10xl mx-auto mb-8">
                <Image
                    src="https://d6wod28es4wuu.cloudfront.net/mobileEatMeShop.webp"
                    width={574}
                    height={1602}
                    className="w-[25%] shadow-sm rounded-xl"
                />
                <Image
                    src="https://d6wod28es4wuu.cloudfront.net/mobileEatMeNewsLetter.webp"
                    width={574}
                    height={1602}
                    className="w-[25%] shadow-sm rounded-xl"
                />
            </div>
            <div className='w-[95%] max-w-10xl mx-auto p-5'>
                <h1 className="font-bold text-4xl xl:text-xl md:text-xl rounded-sm">Eatme</h1>
                <hr className='my-2' />
                <p className='font-monument text-base'>
                    A direct to consumer desktop and mobile application.
                    A frictionless platform for both developers, consumers and clients.
                    Individualistic yet well researched platforms designed for a fast paced
                    ever changing digital market.<br /><br />
                    Eat me, with its bold and colorful package design, have themselves a platform
                    that highlights their unique branding, while cleverly revealing their product
                    categories and statistics.
                </p>
                <p className="my-2">
                    <Link target="_blank" href="https://eatmeedibles.com/"><span className="text-black">visit-site</span></Link>
                </p>
            </div>
                        <div className='flex items-center justify-center m-5 relative'>
                <Image
                    src="https://d6wod28es4wuu.cloudfront.net/buzzed_papersCompressd.webp"
                    width={2000}
                    height={500}
                    className='shadow-sm rounded-xl'
                />
            </div>
            <div className="flex flex-col items-center justify-center text-center space-y-2">
                <p className="font-extralight text-sm m-5 text-black">
                    concept package designs for buzzd and busy bee
                </p>
            </div>

            {/* <div className='flex flex-col content-center justify-evenly text-center space-y-2'>
                <h1 className='font-bold text-4xl '
                >
                    Some of my Jams
                </h1>
            </div> */}
            {/* <div className="flex flex-wrap justify-center relative p-5">
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
            </div> */}
        </section>
    )
}





