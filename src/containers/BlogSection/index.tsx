"use client"
import SectionHeader from "../../components/common/SectionHeader"
import { Blogsdata } from "../../lib/constData"
import { usePathname } from "next/navigation"
import BlogCard from "../../components/BlogCard"

const Blogs = () => {
  const pathname = usePathname()
  // const displayProducts = products
  //   ? pathname.includes("/blog")
  //     ? products
  //     : products.slice(0, 8)
  //   : []

  return (
    <section className="py-8">
      <div className="flex flex-col gap-6">
        {!pathname.includes("/blog") && (
          <SectionHeader heading="Blogs" desc="" />
        )}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-sm:gap-2">
          {Blogsdata.map((item) => (
            <BlogCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blogs
