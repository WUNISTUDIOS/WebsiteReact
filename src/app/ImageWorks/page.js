import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function ImageWorksPage() {
    return (
        <div>
            <section className="flex flex-wrap items-center justify-start w-full p-10">
                <div className="w-full sm:w-1/2 lg:w-1/3 ">
                    <Image
                        src={"https://d6wod28es4wuu.cloudfront.net/WebWearesoback.webp"}
                        width={3000}
                        height={3000}
                        className="w-full h-auto"
                    />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 ">
                    <Image
                        src={
                            "https://d6wod28es4wuu.cloudfront.net/circleFaceCompressed.webp"
                        }
                        width={5000}
                        height={5000}
                        className="w-full h-auto"
                    />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 ">
                    <Image
                        src={"https://d6wod28es4wuu.cloudfront.net/UntitledCompressed.webp"}
                        width={5000}
                        height={5000}
                        className="w-full h-auto"
                    />
                </div>
            </section>
            <div className="flex flex-col items-center justify-center text-center">
                <p className="font-extralight text-slate-500 text-sm">
                    select graphic work in collaboration with Lewy180
                </p>
            </div>
            <section className='flex flex-col md:flex-row items-center justify-center text-white'>
                <div className=' w-full lg:w-2/5 p-10'>
                    <ImageWorksCard
                        href="/ImageWorks"
                        imageSrc="https://d6wod28es4wuu.cloudfront.net/bugCloseuppsd.webp"
                        title="Biblically accurate slop harvester"
                    // description='Design - Development'
                    />
                </div>
                {/* <div className="justify-center text-center items-center">
            <h1 className="font-bold text-4xl xl:text-xl md:text-xl">
              Biblically accurate slop harvester
            </h1>
          </div> */}
            </section>
            <section className='flex flex-col md:flex-row items-center justify-center text-white py-10'>
                {/* <div className="flex flex-col justify-center text-center items-center rounded-sm">
            <h1 className="font-bold text-4xl xl:text-xl md:text-xl rounded-sm">
              Unintled explorations of blend modes
            </h1>
            <p>in collaboration with Lewy180</p>
          </div> */}
                <div className=' w-full lg:w-2/5 p-10'>
                    <ImageWorksCard
                        href="/ImageWorks"
                        imageSrc="https://d6wod28es4wuu.cloudfront.net/UntitledCompressed.webp"
                        title="Unintled explorations of blend modes"
                        description='in collaboration with Lewy180'
                    />
                </div>
            </section>
        </div>
    );
}
