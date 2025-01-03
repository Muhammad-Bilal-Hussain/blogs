import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import {components} from "@/app/components/CustumComponent";
import BlogCard2 from "../../components/BlogCard2";

export const revalidate = 1;

export default async function page({ params: { slug } }: { params: { slug: string } }) {
  const query = `*[_type=='blog' && slug.current=="${slug}"]{
    title, image, summary, content, 
    author->{bio, image, name}
  }[0]`;

  const data = await client.fetch(query);
//   console.log(data);

  // 3rd row 
  const query2 = `*[_type=='blog'] | order(_createAt asc) {
    summary, title ,image,
    "slug":slug.current,
  }[6...9]`; 
  const data2: Data[] = await client.fetch(query2);


  return (
    <div className="max-w-full">
      <div className="max-w-7xl mx-auto">
      <div className=" px-10">
        {/* slug data  */}
      <div className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-red-700">
        {data.title}
      </h1>

      {/* Featured Image */}
      <Image
        src={urlForImage(data.image).url()}
        width={500}
        height={500}
        alt="AI for everyone"
        className="rounded"
      />

      {/* Blog Summary Section */}
      <section>
        <h2 className="text-xl xs:text-2xl md:text-3xl py-8 font-bold uppercase text-red-700">
          Summary
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-white">
          {data.summary}
        </p>
      </section>

      {/* Author Section */}
      <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
        <Image
          src={urlForImage(data.author.image).url()}
          width={200}
          height={200}
          alt="author"
          className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-red-700 dark:text-light">{data.author.name}</h3>
          <p className="italic text-xs xs:text-sm sm:text-base text-white dark:text-light/80">
            {data.author.bio}
          </p>
        </div>
      </section>

      {/* Main Body of Blog */}
      <PortableText
        value={data.content} components={components}
      />
    </div>
    {/* cards  */}
      <div>
        <main className="flex py-10 flex-col">
            <h1 className="text-2xl font-bold uppercase my-12 text-center text-red-700 sm:text-3xl lg:text-5xl">
              Recent Post
            </h1>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {data2.map((blog: Data) => (
                <BlogCard2 data2={blog} key={blog.slug} />
              ))}
            </section>
        </main>
      </div>
      </div>
      </div>
    </div>

  );
}