import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className='bg-black'>
                <div className='flex flex-row justify-center px-5'>
                    <div className="text-4xl sm:text-5xl flex justify-center gap-5 sm:gap-12 py-10  text-gray-300">
                        <AiFillTwitterCircle href="#" />
                        <Link href="https://linkedin.com/in/azim-nurhan-ahmad" target="_blank"><AiFillLinkedin /></Link>
                        <Link href="https://github.com/NurhanAzim" target="_blank"><AiFillGithub /></Link>
                    </div>
                    <div className='flex justify-end items-center py-10 px-10 text-gray-300'>
                        <Link href={'#navbar'}>Back to Top</Link>
                    </div>
                </div>
            </footer>
        </>
    )
}