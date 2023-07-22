import Link from 'next/link';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import resume from './../../public/Resume.pdf';

export default function Navbar() {
    return <>
    <nav className="py-10 mb-12 flex justify-between">
            <Link href="/"><h1 className="text-xl text-gray-300   dark:text-gray-300">Azim Nurhan</h1></Link>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-gray-300" />
              </li>
              {/* <li>
                <a className="bg-gradient-to-r from-red-500 to-yellow-400  font-sans px-4 py-2 rounded-lg ml-8" href={resume} target='_blank' rel="noopener noreferrer">Resume</a>
              </li> */}
            </ul>
          </nav>
    </>
}