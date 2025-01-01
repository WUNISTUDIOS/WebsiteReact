import Head from "next/head"
import localFont from "next/font/local"
import Image from "next/image"

export default function Leafy(){
    return (
        <section className='my-40'>
            <div className='flex flex-col content-center justify-evenly text-center space-y-2'>
                <h1 className='font-bold text-4xl xl:text-xl md:text-xl '
                >
                    LEAFYTHINGS
                </h1>
                <h1 className='font-bold text-4xl '
                >
                    / Product Design / UI - UX / 
                </h1>
                <p className='font-extralight xl:text-2xl md:text-4xl text-4xl m-5'
                > 
                    A new and ever changing industry, Cannabis from a cultural and business
                    prespective has much room for innovation. Designing from
                    wholesale and consumer stand point, I interprate and anticipate
                    the needs of the industry as it adapts to the gobal digital market
                </p>
            </div>
            <div className='content-center m-5 relative'>
            <Image
                    src="/images/buzzed_papers.png"
                    width={2000}
                    height={500}
                    className='shadow-sm rounded-xl'
                />
            </div>
        <section className="flex relative flex-wrap justify-start p-5 ">
            <div className="w-full sm:w-1/2 lg:w-1/2 ">
            <Image
                src="/images/buzzd_baggy.png"
                width={3000}
                height={3000}
                className="w-full h-auto shadow-sm rounded-xl"
            /> 
            </div>
            <div className=" w-full sm:w-1/2 lg:w-1/2 ">
                <Image
                    src="/images/bussy_baggy.png"
                    width={5000}
                    height={5000}
                    className="w-full h-auto shadow-sm rounded-xl"
                /> 
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/2 ">
            <Image
                src="/images/bussy_tray_large.png"
                width={5000}
                height={5000}
                className="w-full h-auto shadow-sm rounded-xl"
            /> 
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/2 ">
                <Image
                    src="/images/buzzd_tray_large.png"
                    width={5000}
                    height={5000}
                    className="w-full h-auto shadow-sm rounded-xl"
                /> 
            </div>
        </section>
            <div className="flex flex-col items-center justify-center text-center space-y-2">
                <p className="font-extralight text-sm m-5"> 
                    concept package designs for buzzd and busy bee
                </p>
            </div>
        <section className='flex flex-wrap items-start justfy-center'>
            <div className='text-sm w-full md:w-1/3 p-5'>
            <h1 className='font-bold text-4xl xl:text-xl md:text-xl'> Eatme UI</h1>
            <hr className='my-2'></hr>
            <p className='font-monument relative'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, <br></br> <br></br>but also the leap into 
                electronic typesetting, remaining essentially unchanged. It was popularised in 
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            </p>
            </div>
            <Image
                src="/images/EatmedesktopPage.jpg"
                width={2150}
                height={5777}
                className="md:w-[40%] w-full shadow-sm rounded-xl p-5"
            />
            <Image
                src="/images/shopEatme.jpg"
                width={390}
                height={2515}
                className=" md:w-[20%] shadow-sm rounded-xl p-5"
            />
            </section>
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





