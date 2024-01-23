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
    <section>
      {/* {!pathname.includes("/blog") && <SectionHeader heading="Blogs" desc="" />} */}
      <SectionHeader heading="Blogs" desc="" />
      <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {Blogsdata.map((item) => (
          <BlogCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  )
}

export default Blogs
