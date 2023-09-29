import React from 'react'
import Image from 'next/image'
export default function MyProfilePic() {
  return (
    <div>
      <section className='w-full mx-auto'>
        <Image
        className='border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8'
        src="/favicon.ico"
        width={200}
        height={200}
        alt='sya'
        priority={true}
        ></Image>
      </section>
    </div>
  )
}
