import Facebook from "@/public/icons/facebook.svg"
import Twitter from "@/public/icons/twitter.svg"
import Instagram from "@/public/icons/instagram.svg"
import Linkedin from "@/public/icons/linkedin.svg"
import Location from "@/public/icons/location.svg"
import Email from "@/public/icons/email.svg"
import Phone from "@/public/icons/phone.svg"
import { url } from "inspector"

//----------------------------NAVBAR----------------------------------//
export const navbarData = {
  navLinks: [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Shop",
      url: "/products",
    },
    {
      id: 3,
      title: "About us",
      url: "/about-us",
    },
    {
      id: 4,
      title: "Contact Us",
      url: "/contact",
    },
  ],
}

export const dropDownData = {
  navData: [
    {
      id: 1,
      title: "New In",
      url: "/new-in",
    },
    {
      id: 2,
      title: "Bestseller",
      url: "/bestseller",
    },
    {
      id: 3,
      title: "Loyalty Club",
      subtitle: [
        {
          id: 1,
          title: "Gift Card",
          url: "/gift-card",
        },
        {
          id: 2,
          title: "Wallet",
          url: "/wallet",
        },
        {
          id: 3,
          title: "Membership",
          url: "/memebership",
        },
        {
          id: 4,
          title: "Reward Points",
          url: "/reward-points",
        },
      ],
    },
    {
      id: 4,
      title: "Men",
      subtitle: [
        {
          id: 1,
          title: "Sports",
          url: "/products",
        },
        {
          id: 2,
          title: "Running & Yoga",
          url: "/products",
        },
        {
          id: 3,
          title: "Lofer",
          url: "/products",
        },
        {
          id: 4,
          title: "Scandles & Floters",
          url: "/products",
        },
        {
          id: 5,
          title: "Casual",
          url: "/products",
        },
        {
          id: 6,
          title: "Formal",
          url: "/products",
        },
      ],
    },
    {
      id: 5,
      title: "Women",
      subtitle: [
        {
          id: 1,
          title: "Running",
          url: "/products",
        },
        {
          id: 2,
          title: "Gym & Yoga",
          url: "/products",
        },
        {
          id: 3,
          title: "Heels",
          url: "/products",
        },
        {
          id: 4,
          title: "Scandles",
          url: "/products",
        },
        {
          id: 5,
          title: "Flats",
          url: "/products",
        },
        {
          id: 6,
          title: "Boots",
          url: "/products",
        },
      ],
    },
    {
      id: 6,
      title: "Kids",
      subtitle: [
        {
          id: 1,
          title: "Sports",
          url: "/products",
        },
        {
          id: 2,
          title: "School Shoes",
          url: "/products",
        },
        {
          id: 3,
          title: "Crocs",
          url: "/products",
        },
        {
          id: 4,
          title: "Flip Flops",
          url: "/products",
        },
        {
          id: 5,
          title: "Lofer",
          url: "/products",
        },
      ],
    },
    {
      id: 7,
      title: "Sale",
      subtitle: [
        {
          id: 1,
          title: "Sports Shoes Sale",
          url: "#",
        },
        {
          id: 2,
          title: "Running Shoes Sale",
          url: "#",
        },
        {
          id: 3,
          title: "Flip-Flops & Slider Sale",
          url: "#",
        },
        {
          id: 4,
          title: "Scandel Sale",
          url: "#",
        },
      ],
    },
    {
      id: 8,
      title: "Customize",
      url: "#",
    },
    {
      id: 9,
      title: "Brands",
      subtitle: [
        {
          id: 1,
          title: "Puma",
          url: "/products",
        },
        {
          id: 2,
          title: "Addidas",
          url: "/products",
        },
        {
          id: 3,
          title: "Nike",
          url: "/products",
        },
        {
          id: 4,
          title: "Skechers",
          url: "/products",
        },
        {
          id: 5,
          title: "Asics",
          url: "/products",
        },
        {
          id: 6,
          title: "Bata",
          url: "/products",
        },
        {
          id: 7,
          title: "Crocs",
          url: "/products",
        },
        {
          id: 8,
          title: "Woodland",
          url: "/products",
        },
        {
          id: 9,
          title: "Campus",
          url: "/products",
        },
      ],
    },
  ],
}

//------------------------------- HOME PAGE ------------------------------//
export const homePageBanner = [
  {
    id: 1,
    backgroundBannerImage: "/images/bannerImage2.jpg",
    backgroundBannerImageMobile: "/images/bannerImageMobile.jpg",
  },
  {
    id: 2,
    backgroundBannerImage: "/images/bannerImage1.png",
    backgroundBannerImageMobile: "/images/bannerImageMobile.jpg",
  },

  {
    id: 3,
    backgroundBannerImage: "/images/bannerImage3.jpg",
    backgroundBannerImageMobile: "/images/bannerImageMobile.jpg",
  },
]

export const testimonialData = {
  heading: "Testimonials",
  testimonialCards: [
    {
      id: 1,
      description:
        "SoleHub elevated my shoe game! Unmatched comfort and style redefine my wardrobe. The fast delivery and impressive designs keep me coming back. Exceptional craftsmanship and durability make every pair a worthwhile investment. I'm a SoleHub enthusiast for life.",
      image: "/images/person-1.png",
      name: "John D.",
      designation: "CEO, Bea-You",
    },
    {
      id: 2,
      description: `"SoleHub is my footwear haven! The vast selection and quality are unmatched. Whether I'm after trends or comfort, they deliver. The unique designs turn heads, and the compliments keep rolling in. My go-to for stylish, comfortable shoes that make a statement.`,
      image: "/images/person-1.png",
      name: "Sarah M.",
      designation: "CEO, Co-Founder, XYZ Inc.",
    },
    {
      id: 3,
      description: `"SoleHub exceeded my expectations. From the seamless shopping experience to the prompt delivery, their commitment to excellence shines. The shoes not only look fantastic but also stand the test of time. A satisfied customer who will continue to choose SoleHub."`,
      image: "/images/person-1.png",
      name: "Michael P.",
      designation: "MD, ABC Inc.",
    },
    {
      id: 4,
      description: `"SoleHub's shoes are more than footwear – they're a style statement. Each pair is a conversation starter, and the compliments are constant. The unique designs set me apart, and the comfort is unmatched. SoleHub has become an integral part of my fashion identity."`,
      image: "/images/person-1.png",
      name: "Emily H.",
      designation: "Sales Manager, TCS",
    },
    {
      id: 5,
      description: `"SoleHub is my first and only choice. The top-notch craftsmanship ensures durability, and the styles cater to every occasion. The compliments I receive on my SoleHub shoes are a testament to their excellence. A brand that understands and delivers on both quality and style."`,
      image: "/images/person-1.png",
      name: "David S.",
      designation: "Project Manager, PQR Ltd.",
    },
  ],
}

//-------------------------------FOOTER-------------------------------//

// new data
export const fData = {
  fLinks: [
    [
      {
        id: 1,
        title: "Home",
        url: "/",
      },
      {
        id: 2,
        title: "Bestsellers",
        url: "/bestsellers",
      },

      {
        id: 3,
        title: "Collection",
        url: "/collection",
      },
      {
        id: 4,
        title: "Blog",
        url: "/blog",
      },
      {
        id: 5,
        title: "About us",
        url: "/about-us",
      },
      {
        id: 6,
        title: "FAQs",
        url: "/faqs",
      },
    ],
    [
      {
        id: 1,
        title: "Instructions",
        url: "/instructions",
      },
      {
        id: 2,
        title: "Privacy Policy",
        url: "/privacy-policy",
      },
      {
        id: 1,
        title: "License",
        url: "/license",
      },
      {
        id: 1,
        title: "Terms & Condition",
        url: "/term&condition",
      },
    ],
  ],
}
//-------------------------------------ABOUT US -------------------------------------------//

export const aboutUsContent = [
  {
    id: 1,
    title: "Welcome to SoleHub",
    description: `At SoleHub, we believe that every step matters. Established with a passion for footwear and a commitment to style, comfort, and quality, we are your ultimate destination for all things shoes.`,
  },
  {
    id: 2,
    title: "Our Story",
    description: `SoleHub was born out of a simple idea: to provide footwear enthusiasts with a curated collection of trendy, comfortable, and high-quality shoes at affordable prices. Founded by AKSA in 2023, our journey began with a vision to redefine the online shopping experience for shoe lovers everywhere.`,
  },
  {
    id: 3,
    title: "Our Mission",
    description: `Our mission at SoleHub is to offer an unparalleled selection of footwear that caters to diverse tastes and preferences. We strive to empower individuals to express their unique style through our carefully curated range of shoes, from casual sneakers to elegant heels and everything in between.`,
  },
  {
    id: 4,
    title: "What Sets Us Apart",
    description: `At SoleHub, we distinguish ourselves through our unwavering commitment to customer satisfaction. We go above and beyond to ensure that every customer receives personalized attention and finds the perfect pair of shoes to suit their needs. With a seamless shopping experience, prompt customer support, and fast shipping, we aim to exceed your expectations at every turn.`,
  },
  {
    id: 5,
    title: "Our Promise",
    description: `When you shop at SoleHub, you can trust that you're investing in more than just a pair of shoes; you're investing in quality, comfort, and style that will accompany you on every step of your journey. We stand behind the craftsmanship of our products and are dedicated to providing you with footwear that not only looks good but also feels great.`,
  },
  {
    id: 6,
    title: "Join the SoleHub Community",
    description: `We invite you to join our growing community of shoe enthusiasts and experience the SoleHub difference for yourself. Whether you're a sneakerhead, a fashionista, or simply someone who appreciates a great pair of shoes, we welcome you to explore our collection and find your perfect fit.`,
  },
]

//-----------------------------CART-------------------------------------//

export const cartPageBanner = {
  heading: "Cart",
}

export const cartPage = {
  cartHeaderList: [
    {
      id: 1,
      name: "Image",
    },
    {
      id: 2,
      name: "Product",
    },
    {
      id: 3,
      name: "Price",
    },
    {
      id: 4,
      name: "Quantity",
    },
    {
      id: 5,
      name: "Total",
    },
    {
      id: 6,
      name: "Remove",
    },
  ],
  cartProductList: [
    {
      id: 1,
      productImage: "/images/product1.png",
      productName: "Chair",
      productPrice: "₹50.00",
    },
    {
      id: 2,
      productImage: "/images/product2.png",
      productName: "Chair",
      productPrice: "₹50.00",
    },
    {
      id: 3,
      productImage: "/images/product3.png",
      productName: "Chair",
      productPrice: "₹50.00",
    },
    {
      id: 4,
      productImage: "/images/product1.png",
      productName: "Chair",
      productPrice: "₹50.00",
    },
    {
      id: 5,
      productImage: "/images/product2.png",
      productName: "Chair",
      productPrice: "₹50.00",
    },
    {
      id: 6,
      productImage: "/images/product3.png",
      productName: "Chair",
      productPrice: "₹50.00",
    },
  ],
  cartActionBtn1: "Update Cart",
  cartActionBtn2: "Continue shopping",
}

export const coupon = {
  heading: "Coupon",
  description: "Lorem a src jkuyyhur",
  CouponActionBtn: "Apply Code",
}

export const cartTotal = {
  heading: "Cart Totals ",
  subtotal: "Subtotal",
  total: "Total",
  checkoutActionBtn: "Proceed To Checkout",
}
//-----------------------------CATEGORY CARD--------------------------//
export const categorydata = [
  { id: 1, title: "Formal", image: "/images/categorycard1.jpeg" },
  { id: 2, title: "Sneakers", image: "/images/categorycard2.avif" },
  { id: 3, title: "Heels", image: "/images/categorycard3.jpg" },
  { id: 4, title: "Scandles", image: "/images/categorycard4.jpeg" },
]
//------------------------------BLOGS----------------------------//
export const Blogsdata = [
  {
    id: 1,
    image: "/images/Blog1.png",
    title: "Cracking the Coconut Code",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    date: " 1 Month ago",
    time: " 6 MIn Read",
    link: "",
  },
  {
    id: 2,
    image: "/images/Blog2.png",
    title: "Cracking the Coconut Code",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    date: " 1 Month ago",
    time: " 6 MIn Read",
    link: "",
  },
  {
    id: 3,
    image: "/images/Blog3.png",
    title: "Cracking the Coconut Code",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    date: " 1 Month ago",
    time: " 6 MIn Read",
    link: "",
  },
]
