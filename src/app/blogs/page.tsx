import React from 'react'
import BlogCard from "../components/BlogsAll";
import { client } from "@/sanity/lib/client";

export default async function Blogs() {
      // 1st row 
  const query = `*[_type=='blog'] | order(_createAt asc) {
    summary, title ,image,
    "slug":slug.current,
  }`; 
  const data: Data[] = await client.fetch(query);
  return (
    <div>
        <main className="flex py-10 flex-col">
            <h1 className="text-2xl font-bold uppercase my-12 text-center text-red-700 sm:text-3xl lg:text-5xl">
            Blogs
            </h1>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {data.map((blog: Data) => (
                <BlogCard data={blog} key={blog.slug} />
            ))}
            </section>
        </main>
    </div>
  )
}
