import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from '@/sanity/lib/image';

export default function BlogCard({data}:{data:Data}) {
  return (
    <div>
        <div className='max-w-full'>
            <div className='max-w-7xl mx-auto py-10 px-10 flex justify-center'>
            <section className="flex flex-col justify-between h-[480px]  rounded bg-light/90 dark:bg-dark/40 shadow-md shadow-gray-300 dark:shadow-black/80 group hover:scale-105 transition-transform ease-out duration-700">
      {/* Image Section*/}
      <div className="relative max-h-76 flex-1">
        <Image
          src={urlForImage(data.image).url()}
          alt="AI for everyone"
          fill
          className="object-cover rounded-t"
        />
      </div>

      {/* Title and Summary */}
      <div className="flex flex-col justify-between gapx-y-4  p-4">
        <h2 className="text-lg font-semibold line-clamp-2 text-red-700 leading-tight mb-2">
        {data.title}
        </h2>
        <p className="text-white dark:text-light/70 line-clamp-3">
        {data.summary}
        </p>

        {/* Read More dynamic Link */}
        <Link
          href={`/blog/${data.slug}`}
          className="block px-4 py-1 text-center bg-white rounded text-dark font-semibold mt-4 hover:bg-gray-200 hover:text-red-700">
          Read More
        </Link>
      </div>
            </section>
            </div>
        </div>
    </div>
  )
}
