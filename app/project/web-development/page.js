import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

export default function WebDevelopment() {
  return (
    <>
      <main className="bg-black px-10">
        <section>
          <div>
            <h3 className="text-3xl py-1 text-red-400 ">{'Web Development'}</h3>
          </div>
          <div className="bg-black lg:px-10 lg:flex gap-10">

            //Salambot
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gray-800 dark:bg-black flex flex-col flex-1">
              <div className='flex flex-1 flex-row items-stretch justify-center'>
                <Image alt='' src={"/website/website1.png"} width={300} height={400} className='mx-auto' />

              </div>
              <div className='flex flex-1 flex-col items-center justify-evenly'>
                <Link href="https://salambot.xyz" target='_blank' className="text-center shadow-lg  rounded-xl my-10 bg-gray-800 dark:bg-black flex-1">
                  <div className="flex items-center justify-center mt-2 text-red-400">
                    <h3 className="text-lg font-medium">Salambot Website</h3>
                    <FiExternalLink size={20} className="ml-2" />
                  </div>
                </Link>
                <p className="py-2 text-gray-300">
                  A landing page for in-house developed software from Ledakan Digital
                </p>
                <h4 className="py-4 text-amber-600">Technologies</h4>
                <p className="text-gray-300 py-1 dark:text-gray-300">{'Wordpress'}</p>
                <p className="text-gray-300 py-1 dark:text-gray-300">{'Elementor'}</p>
              </div>
            </div>

            //Inter Portfolio
            <div className="text-center shadow-lg p-10 mb-0 rounded-xl my-10 bg-gray-800 dark:bg-white flex flex-col flex-1">
              <div className='flex flex-1 flex-row items-stretch justify-center'>
                <Image alt='' src={"/website/website2.png"} width={300} height={400} className='mx-auto' />
              </div>
              <div className='flex flex-1 flex-col items-center justify-evenly'>
                <h3 className="text-lg text-red-400 font-medium pt-8 pb-2 ">
                  Inter Portfolio (current website)
                </h3>
                <p className="py-2 text-gray-300">
                  A portfolio website to showcase my works during the internship period
                </p>
                <h4 className="py-4 text-amber-600">Technologies</h4>
                <p className="text-gray-300 py-1 dark:text-gray-300">{'Next.js (React)'}</p>
                <p className="text-gray-300 py-1 dark:text-gray-300">{'Tailwind'}</p>
                <p className="text-gray-300 py-1 dark:text-gray-300">{'Vercel'}</p>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  )
}