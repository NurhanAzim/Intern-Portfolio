import Image from 'next/image';
import Link from 'next/link';

import website1 from './../../../public/website/website1.png';
import website2 from './../../../public/website/website2.png';

export default function WebDevelopment() {
  return (
    <>
      <main className="bg-black px-10">
        <section>
          <div>
            <h3 className="text-3xl py-1 text-red-400 ">Web Development</h3>
          </div>
          <div className="bg-black lg:px-10 lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gray-800 dark:bg-black flex-1">
               <Image alt='' src={"/website/website1.png"} width={300} height={400} className='mx-auto' />

              <Link href="https://salambot.xyz"><h3 className="text-lg text-red-400 font-medium pt-8 pb-2 ">Salambot Website</h3></Link>

              <p className="py-2 text-gray-300">
                A landing page for in-house developed software from Ledakan Digital
              </p>
              <h4 className="py-4 text-amber-600">Technologies</h4>
              <p className="text-gray-300 py-1 dark:text-gray-300">{'Wordpress'}</p>
              <p className="text-gray-300 py-1 dark:text-gray-300">{'Elementor'}</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gray-800 dark:bg-white flex-1">
               <Image alt='' src={"/website/website2.png"} width={300} height={400} className='mx-auto' />
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
        </section>
      </main>
    </>
  )
}