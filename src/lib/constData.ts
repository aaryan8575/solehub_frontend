import Location from "@/public/icons/location.svg"
import Email from "@/public/icons/email.svg"
import Phone from "@/public/icons/phone.svg"

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
      url: "/contact-us",
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

export const whyChooseUs = {
  image: "/images/whyChooseUsImg.jpg",
  heading: "We take skincare seriously",
  description: `As said "Glowing skin is always in".So we believe in empowering individuals to embrace their authentic selves through skincare that goes beyond the surface.
    We strive to create products that cater to individual needs, embracing the beauty of differences. Join us in the journey to discover, enhance, and truly 'Bea You'.`,
  services: [
    {
      id: 1,
      icon: "/icons/shippingtruck.svg",
      heading: "Premium Quality Ingredients",
      serviceDescription:
        "At Bea You, we prioritize the use of premium and carefully curated ingredients in our beauty products. Our formulations are crafted with the finest botanical extracts, antioxidants, and cutting-edge skincare technologies to ensure optimal effectiveness and results you can see and feel.",
    },
    {
      id: 2,
      icon: "/icons/bag.svg",
      heading: "For Every Skin Type",
      serviceDescription:
        "We understand that each person's skin is unique. That's why our product range is designed to cater to various skin types, tones, and concerns. Whether you have sensitive skin, oily complexion, or specific skincare needs, our solutions is to address your individual beauty requirements.",
    },
    {
      id: 3,
      icon: "/icons/support.svg",
      heading: "Cruelty-Free and Environmentally Conscious",
      serviceDescription:
        "We are committed to ethical beauty practices. All our products are cruelty-free, meaning they are not tested on animals. Additionally, we prioritize environmentally conscious packaging and sustainable practices to minimize our impact on the planet. Choosing Bea You means making a responsible and compassionate choice for your beauty routine.",
    },
    {
      id: 4,
      icon: "/icons/return.svg",
      heading: "Visible and Lasting Results",
      serviceDescription:
        "Our products are formulated with a focus on delivering visible and long-lasting results. Whether you're seeking radiant skin, reduced signs of aging, or a flawless complexion, our beauty products are designed to meet your expectations. Experience the transformative power of our formulations and witness the positive changes in your skin.",
    },
    {
      id: 5,
      icon: "/icons/return.svg",
      heading: "Expertly Crafted by Skincare Specialists",
      serviceDescription:
        "Behind every Bea You product is a team of dedicated skincare specialists and beauty experts. Our professionals work tirelessly to stay at the forefront of beauty trends, ensuring that our products reflect the latest innovations in the industry. Trust in the expertise of our team to bring you skincare and beauty solutions that are both effective and on-trend.",
    },
    {
      id: 6,
      icon: "/icons/return.svg",
      heading: "Community and Empowerment",
      serviceDescription:
        "Behind every Bea You product is a team of dedicated skincare specialists and beauty experts. Our professionals work tirelessly to stay at the forefront of beauty trends, ensuring that our products reflect the latest innovations in the industry. Trust in the expertise of our team to bring you skincare and beauty solutions that are both effective and on-trend.",
    },
  ],
}

export const testimonialData = {
  heading: "Testimonials",
  testimonialCards: [
    {
      id: 1,
      description:
        "SoleHub elevated my shoe game! Unmatched comfort and style redefine my wardrobe. The fast delivery and impressive designs keep me coming back. Exceptional craftsmanship and durability make every pair a worthwhile investment. I'm a SoleHub enthusiast for life.",
      image: "/images/person-1.png",
      name: "John D.",
      designation: "CEO, ABC Ltd.",
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

export const DealsData = {
  heading: "Crazy Deals",
  DealCards: [
    {
      id: 1,
      image: "/images/deal1.jpg",
      title: "Upto 50% off",
    },
    {
      id: 2,
      image: "/images/deal2.jpg",
      title: "New Arrivals",
    },
    {
      id: 3,
      image: "/images/deal3.jpg",
      title: "Daily Deals",
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
        url: "/",
      },
      {
        id: 5,
        title: "About us",
        url: "/about-us",
      },
      // {
      //   id: 6,
      //   title: "FAQs",
      //   url: "/faqs",
      // },
    ],
    [
      // {
      //   id: 1,
      //   title: "Instructions",
      //   url: "/instructions",
      // },
      {
        id: 1,
        title: "Privacy Policy",
        url: "/privacy-policy",
      },
      {
        id: 2,
        title: "License",
        url: "/license",
      },
      {
        id: 3,
        title: "Terms & Condition",
        url: "/term&condition",
      },
    ],
  ],
}

// export const socialIcons = [
//   {
//     icon: Facebook,
//     name: "facebook",
//     link: "https://m.facebook.com/?wtsid=rdr_0hGHy1l132QhSpvyh",
//   },
//   {
//     icon: Instagram,
//     name: "instagram",
//     link: "https://www.instagram.com/",
//   },
//   {
//     icon: Pinterest,
//     name: "pinterest",
//     link: "https://www.pinterest.com.au/ideas/",
//   },
//   {
//     icon: Twitter,
//     name: "twitter",
//     link: "https://twitter.com/",
//   },
// ]

//-----------------------------SHOP SECTION---------------------------------------------//

export const shopPageBanner = {
  backgroundBannerImage: "",
  heading: "Shop",
}

export const topProduct = {
  heading: "It's a SKIN-VESTMENT",
  description: `At 'Bea You,' our mission transcends conventional beauty standards.Our goal is to foster a community where every skin journey is celebrated, recognizing that beauty is diverse and personal.
    'Bea You' is not just a skincare brand; it's a commitment to authenticity, self-love, and the belief that everyone deserves to feel confident in their unique skin.`,
  actionBtn: "Explore",
}

export const products = [
  {
    id: 1,
    handle: "product-1",
    productThumbnail: {
      id: 0,
      url: "/images/product1.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product2.png",
      },
      {
        id: 2,
        url: "/images/product3.png",
      },
      {
        id: 3,
        url: "/images/product1.png",
      },
    ],
    productName: "Cleanser",
    price: {
      productDiscountPrice: "₹399/-",
      productOriginalPrice: "₹499/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: `Cucumber Extract, Lemon Extract, Rosemary Extract, Glycolic Acid, Lactic Acid, Sodium Hyaluronate, Niacinamide, L- Argenine, Licorice Extract, Alpha Arbutin, Berberis Extract, Propylene Glycol.
    Pluethylene Glycol 400, Glycerin, Edta, Fragrance, Triethanol Amine, Phenoxyethanol, Ethylhexylglycerin & Aqua 
    DIRECTION FOR USE: Put a pea size amount of Fair-Wish Under Eye Gel on the Tip of your ring finger & apply small dots under the eye & message gently. Be Careful & make sure you are not getting close to your eyelash line.`,
    howToUse: `Apply cleanser and gently massage into skin barrier.
    Wash with normal water.`,
    productDescription: `**Feel Refresh | BE Nourished| Be Beautiful | Bea You**

Get cleansed, soft & hydrated skin in just 40 seconds* with Bea You Face Cleanser. It gently yet effectively cleanses skin to remove dirt, oil and other impurities without making skin dry. Adding it in your routine will minimize the effects of environmental stressors on the skin, leaving you with cleanand soft skin. 
		
Defend against 5 sign of Skin sensitivity: Weakened free, Dryness, Roughness, Irritaton, roughness, Tightness 
		
Paraben Sulphate free 
Cruelty free 
Make in india 
		
**Key point:** Hydrating Glycerin, Vitamin B3 & B5, Non foaming formula vitamin b3: prevent water loss and retain skin's moisture content. It's also known to increase keratin. Vitamin b5 : it helps to boost the production of glutathione in our skin. it has anti-inflammatory properties that soothe irritated and dry skin`,
    additionalInfo: `**Image and actual product may very**
		
		**STORAGE:** Store in a cool place. Keep away from direct sun light. WARNING: Do not refrigerate. Replace the cap tightly after use.`,
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 2,
    handle: "product-2",
    productThumbnail: {
      id: 0,
      url: "/images/product2.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product2.png",
      },
      {
        id: 2,
        url: "/images/product2.png",
      },
      {
        id: 3,
        url: "/images/product2.png",
      },
    ],
    productName: "Gluta Radiance",
    price: {
      productDiscountPrice: "₹399/-",
      productOriginalPrice: "₹499/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: `Cucumber Extract, Lemon Extract, Rosemary Extract, Glycolic Acid, Lactic Acid, Sodium Hyaluronate, Niacinamide, L- Argenine, Licorice Extract, Alpha Arbutin, Berberis Extract, Propylene Glycol.
    Pluethylene Glycol 400, Glycerin, Edta, Fragrance, Triethanol Amine, Phenoxyethanol, Ethylhexylglycerin & Aqua 
    DIRECTION FOR USE: Put a pea size amount of Fair-Wish Under Eye Gel on the Tip of your ring finger & apply small dots under the eye & message gently. Be Careful & make sure you are not getting close to your eyelash line.
    `,
    howToUse: `Apply cleanser and gently massage into skin barrier.
    Wash with normal water.`,
    productDescription: `Power Glutathione | Reduce hyperpigmentation | Pore minimizer | Deep Hydration |Be Beautiful | Bea You

Unleash your inner radiance with Bea You Gluta Radiance moisturiser.The powerhouse of hydration with vitamin A,C, E. IThis gives your skin a replenished and dewy appearance, It also leaves your skin feeling soft and supple throughout the day.
      
Defend against 5 sign of Skin sensitivity: Weakened free,Dryness,Roughness,Irritaton,roughness,Tightness
      
Paraben Sulphate free
Cruelty free
Make in india

Key point: 
Glutathione 2%, Alpha Arbutin 0.2%, Niacinamide 0.2%, Hyaluronic Acid 0.2%, Kojic Acid 1%, with Vitamin A,C,E   
vitamin b3: prevent water loss and retain skin's moisture content. It's also known to increase keratin.  
Vitamin b5 : it helps to boost the production of glutathione in our skin. it has anti-inflammatory properties that soothe irritated and dry skin

* Image and actual product may very

STORAGE: Store in a cool place. Keep away from direct sun light.
WARNING: Do not refrigerate. Replace the cap tightly after use.
`,
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 3,
    handle: "product-3",
    productThumbnail: {
      id: 0,
      url: "/images/product3.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product3.png",
      },
      {
        id: 2,
        url: "/images/product3.png",
      },
      {
        id: 3,
        url: "/images/product3.png",
      },
    ],
    productName: "Ergonomic Chair",
    price: {
      productDiscountPrice: "₹599/-",
      productOriginalPrice: "₹799/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: "",
    howToUse: "",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 4,
    handle: "product-4",
    productThumbnail: {
      id: 0,
      url: "/images/product1.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product1.png",
      },
      {
        id: 2,
        url: "/images/product1.png",
      },
      {
        id: 3,
        url: "/images/product1.png",
      },
    ],
    productName: "Ergonomic Chair",
    price: {
      productDiscountPrice: "₹899/-",
      productOriginalPrice: "₹1099/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: "",
    howToUse: "",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 5,
    handle: "product-5",
    productThumbnail: {
      id: 0,
      url: "/images/product2.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product2.png",
      },
      {
        id: 2,
        url: "/images/product2.png",
      },
      {
        id: 3,
        url: "/images/product2.png",
      },
    ],
    productName: "Ergonomic Chair",
    price: {
      productDiscountPrice: "₹399/-",
      productOriginalPrice: "₹699/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: "",
    howToUse: "",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 6,
    handle: "product-6",
    productThumbnail: {
      id: 0,
      url: "/images/product3.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product3.png",
      },
      {
        id: 2,
        url: "/images/product3.png",
      },
      {
        id: 3,
        url: "/images/product3.png",
      },
    ],
    productName: "Ergonomic Chair",
    price: {
      productDiscountPrice: "₹199/-",
      productOriginalPrice: "₹399/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: "",
    howToUse: "",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 7,
    handle: "product-7",
    productThumbnail: {
      id: 0,
      url: "/images/product1.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product1.png",
      },
      {
        id: 2,
        url: "/images/product1.png",
      },
      {
        id: 3,
        url: "/images/product1.png",
      },
    ],
    productName: "Ergonomic Chair",
    price: {
      productDiscountPrice: "₹99/-",
      productOriginalPrice: "₹199/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: "",
    howToUse: "",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 8,
    handle: "product-8",
    productThumbnail: {
      id: 0,
      url: "/images/product2.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product2.png",
      },
      {
        id: 2,
        url: "/images/product2.png",
      },
      {
        id: 3,
        url: "/images/product2.png",
      },
    ],
    productName: "Ergonomic Chair",
    price: {
      productDiscountPrice: "₹699/-",
      productOriginalPrice: "₹999/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: "",
    howToUse: "",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 9,
    handle: "product-9",
    productThumbnail: {
      id: 0,
      url: "/images/product3.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product3.png",
      },
      {
        id: 2,
        url: "/images/product3.png",
      },
      {
        id: 3,
        url: "/images/product3.png",
      },
    ],
    productName: "Ergonomic Chair",
    price: {
      productDiscountPrice: "₹699/-",
      productOriginalPrice: "₹899/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: "",
    howToUse: "",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
]

export const productReviews = [
  {
    id: 1,
    name: "Tomas Doe",
    image: "/images/person-1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra amet, sodales faucibus nibh. Vivamus amet potenti ultricies nunc gravida duis. Nascetur scelerisque massa sodales.",
    rating: 4,
  },
  {
    id: 2,
    name: "Tomas Doe",
    image: "/images/person-1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra amet, sodales faucibus nibh. Vivamus amet potenti ultricies nunc gravida duis. Nascetur scelerisque massa sodales.",
    rating: 5,
  },
  {
    id: 3,
    name: "Tomas Doe",
    image: "/images/person-1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra amet, sodales faucibus nibh. Vivamus amet potenti ultricies nunc gravida duis. Nascetur scelerisque massa sodales.",
    rating: 4,
  },
  {
    id: 4,
    name: "Tomas Doe",
    image: "/images/person-1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra amet, sodales faucibus nibh. Vivamus amet potenti ultricies nunc gravida duis. Nascetur scelerisque massa sodales.",
    rating: 3,
  },
]
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

export const aboutUsPageBanner = {
  backgroundBannerImage: "/images/bannerImage.png",
  heading: "About Us",
  description:
    "Discover the beauty within with Beayou , be Beautiful You.It means you can wear the less makeup and let skin SHINE through.",
  actionBtn1: "Shop Now",
  actionBtn2: "Explore",
}

export const servicePageBanner = {
  backgroundBannerImage: "",
  heading: "Service",
  description:
    "Discover the beauty within with Beayou , be Beautiful You.It means you can wear the less makeup and let skin SHINE through.",
  actionBtn1: "Shop Now",
  actionBtn2: "Explore",
}

//-----------------------------CONTACT-US--------------------------//

export const contactUsPageBanner = {
  backgroundBannerImage: "/images/bannerImage.png",
  heading: "Contact Us",
  description:
    "Discover the beauty within with Beayou , be Beautiful You.It means you can wear the less makeup and let skin SHINE through.",
  actionBtn1: "Shop Now",
  actionBtn2: "Explore",
}

export const contactDetails = [
  {
    id: 1,
    name: "Address",
    icon: Location,
    description: "43 Raymouth Rd. Baltemoer, London 3910",
  },
  {
    id: 2,
    name: "Email",
    icon: Email,
    description: "info@yourdomain.com",
  },
  {
    id: 3,
    name: "Phone-number",
    icon: Phone,
    description: "+1 294 3925 3939",
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
  { id: 3, title: "Heels", image: "/images/categorycard3.jpeg" },
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
//-----------------------------CHECKOUT FORM--------------------------//

//-----------------------------TERMS AND CONDITION--------------------------//
