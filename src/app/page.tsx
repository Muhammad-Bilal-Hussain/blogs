import BlogCard from "./components/BlogCard";
import BlogCard1 from "./components/BlogCard1";
import BlogCard2 from "./components/BlogCard2";
import { client } from "@/sanity/lib/client";


export const revalidate = 1;

export default async function Home() {
  // 1st row 
  const query = `*[_type=='blog'] | order(_createAt asc) {
    summary, title ,image,
    "slug":slug.current,
  }[0...3]`; 
  const data: Data[] = await client.fetch(query);

  // 2nd row 
  const query1 = `*[_type=='blog'] | order(_createAt asc) {
    summary, title ,image,
    "slug":slug.current,
  }[3...6]`; 
  const data1: Data[] = await client.fetch(query1);

  // 3rd row 
  const query2 = `*[_type=='blog'] | order(_createAt asc) {
    summary, title ,image,
    "slug":slug.current,
  }[6...9]`; 
  const data2: Data[] = await client.fetch(query2);

  return (
    <div className="bg-black">
      <main className="flex py-10 flex-col">
        <h1 className="text-2xl font-bold uppercase my-12 text-center text-red-700 sm:text-3xl lg:text-5xl">
          Most Recent Blogs
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {data.map((blog: Data) => (
            <BlogCard data={blog} key={blog.slug} />
          ))}
        </section>
      </main>
      <main className="flex py-10 flex-col">
        <h1 className="text-2xl font-bold uppercase text-center text-red-700 sm:text-3xl lg:text-5xl">
          Saudia Car Blogs
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data1.map((blog: Data) => (
            <BlogCard1 data1={blog} key={blog.slug} />
          ))}
        </section>
      </main>
      <main className="flex py-10 flex-col">
        <h1 className="text-2xl font-bold uppercase my-12 text-center text-red-700 sm:text-3xl lg:text-5xl">
          New Car Blogs
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {data2.map((blog: Data) => (
            <BlogCard2 data2={blog} key={blog.slug} />
          ))}
        </section>
      </main>
    </div>
  );
}
