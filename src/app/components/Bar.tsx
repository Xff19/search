import Link from "next/link"
import {FaYoutube, FaTwitter,FaGithub,FaLaptop} from 'react-icons/fa'
export default function Bar() {
  return (
    <div>
      <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
        <div className="prose prose-xl mx-auto flex justify-between flex-col">
            <h1>
            <Link href='/' className="text-white/70 no-underline hover:text-white">sya</Link>
            </h1>
            <div className="flex justify-between flex-row sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
            <FaYoutube/>
            <FaTwitter/>
            <FaGithub/>
            <FaLaptop/>
            </div>
        </div>
      </nav>
    </div>
  )
}
