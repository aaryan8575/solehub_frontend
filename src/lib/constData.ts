import Facebook from "@/public/icons/facebook.svg"
import Twitter from "@/public/icons/twitter.svg"
import Instagram from "@/public/icons/instagram.svg"
import Linkedin from "@/public/icons/linkedin.svg"
import Location from "@/public/icons/location.svg"
import Email from "@/public/icons/email.svg"
import Phone from "@/public/icons/phone.svg"
import { Heading } from "@medusajs/ui"

//----------------------------NAVBAR----------------------------------//
export const navbarData = {
  navLinks: [
    {
      id: 1,
      title: "Shop",
      url: "/products",
    },
    {
      id: 2,
      title: "About us",
      url: "/about-us",
    },
    {
      id: 3,
      title: "Assortments",
      url: "/assortments",
    },
    {
      id: 4,
      title: "Blog",
      url: "/blog",
    },
  ],
}

export const dropDownData = {
  navData: [
    {
      id: 1,
      title: "New In",
      url: "/products?category=new_in",
    },
    {
      id: 2,
      title: "Bestseller",
      url: "/products?category=bestsellers",
    },
    {
      id: 3,
      title: "Loyalty Club",
      subtitle: [
        {
          id: 1,
          title: "Gift Card",
          url: "/products?category=gift_card",
        },
        {
          id: 2,
          title: "Wallet",
          url: "/products?category=wallet",
        },
        {
          id: 3,
          title: "Membership",
          url: "/products?category=membership",
        },
        {
          id: 4,
          title: "Reward Points",
          url: "/products?category=reward_point",
        },
      ],
    },
    {
      id: 4,
      title: "Fluerveda Assortments",
      subtitle: [
        {
          id: 1,
          title: "Body Care",
          url: "/products?category=body_care",
        },
        {
          id: 2,
          title: "Skin Care",
          url: "/products?category=skin_care",
        },
        {
          id: 3,
          title: "Home Care",
          url: "/products?category=home_care",
        },
        {
          id: 4,
          title: "Accessories",
          url: "//products?category=accessories",
        },
        {
          id: 5,
          title: "Gifting",
          url: "/products?category=gift",
        },
        {
          id: 6,
          title: "Travel Essentials",
          url: "/products?category=travel_essential",
        },
      ],
    },
    {
      id: 5,
      title: "Ayurvedic Formulations",
      subtitle: [
        {
          id: 1,
          title: "Essential Oils",
          url: "/products?category=essential_oil",
        },
        {
          id: 2,
          title: "Carrier Oils",
          url: "/products?category=carrier_oil",
        },
        {
          id: 3,
          title: "Crystal Therapy",
          url: "/products?category=crystal_therapy",
        },
      ],
    },
    {
      id: 6,
      title: "Aromatherapy",
      subtitle: [
        {
          id: 1,
          title: "Aromatherapy for Mind",
          url: "/products?category=aromatherapy_for_mind",
        },
        {
          id: 2,
          title: "Aromatherapy for Chakras",
          url: "/products?category=aromatherapy_for_chakras",
        },
        {
          id: 3,
          title: "Aromatherapy for Skin Concerns",
          url: "/products?category=aromatherapy_for_skin_concerns",
        },
        {
          id: 4,
          title: "Aromatherapy for Hair Concerns",
          url: "/products?category=aromatherapy_for_hair_concerns",
        },
        {
          id: 5,
          title: "Aromatherapy for Physical Health",
          url: "/products?category=aromatherapy_for_physical_health",
        },
        {
          id: 6,
          title: "Aromatherapy Kits",
          url: "/products?category=aromatherapy_kits",
        },
      ],
    },
    {
      id: 7,
      title: "Ageless Beauty",
      subtitle: [
        {
          id: 1,
          title: "Skin Care Essential",
          url: "/products?category=skin_care_essential",
        },
        {
          id: 2,
          title: "Hair Care Essential",
          url: "/products?category=hair_care_essential",
        },
        {
          id: 3,
          title: "Anti-Aging",
          url: "/products?category=anti_aging",
        },
        {
          id: 4,
          title: "Hydration",
          url: "/products?category=hydration",
        },
      ],
    },
    {
      id: 8,
      title: "Corporate",
      subtitle: [
        {
          id: 1,
          title: "Hotel",
          url: "/products?category=hotel",
        },
        {
          id: 2,
          title: "Spa",
          url: "/products?category=spa",
        },
        {
          id: 3,
          title: "Wellness",
          url: "/products?category=wellness",
        },
        {
          id: 4,
          title: "Private Sector",
          url: "/products?category=private_sector",
        },
        {
          id: 5,
          title: "Events",
          url: "/products?category=events",
        },
      ],
    },
    // {
    //   id:9,
    //   title:"Stories across the world",
    //   subtitle:[
    //     {
    //       id:1,
    //       title:"Events",
    //       url:"/events"
    //     },
    //     {
    //       id:2,
    //       title:"Inspiring Stories",
    //       url:"/inspiringStories"
    //     },
    //     {
    //       id:3,
    //       title:"Aromatherapist's word of mouth",
    //       url:"/aromatherapist'swordofmouth"
    //     },
    //     {
    //       id:4,
    //       title:"Success stories",
    //       url:"/Success-stories"
    //     },
    //     {
    //       id:5,
    //       title:"Aromatherapist",
    //       url:"/aromatherapist"
    //     },
    //     {
    //       id:6,
    //       title:"Salons (Hair Specialist) (1+)",
    //       url:"/salons"
    //     },
    //     {
    //       id:7,
    //       title:"Spa",
    //       url:"/spa"
    //     },
    //     {
    //       id:8,
    //       title:"Psycotherapy",
    //       url:"/psycotherapy"
    //     },
    //   ]

    // },
    {
      id: 10,
      title: "Accessories",
      subtitle: [
        {
          id: 1,
          title: "Hair",
          url: "/products?category=hair",
        },
        {
          id: 2,
          title: "Skin",
          url: "/products?category=skin",
        },
        {
          id: 3,
          title: "Objects of desire",
          url: "/products?category=objects_of_desire",
        },
        {
          id: 4,
          title: "Beauty care accesories",
          url: "/products?category=beauty_care_accesories",
        },
        {
          id: 5,
          title: "Hair care accesories",
          url: "/products?category=hair_care_accesories",
        },
      ],
    },
  ],
}

//------------------------------- HOME PAGE ------------------------------//
export const homePageBanner = [
  {
    id: 1,
    backgroundBannerImage: "/images/bannerImage.jpeg",
    backgroundBannerImageMobile: "/images/bannerImageMobile.jpeg",
    heading: "Look within your self and discover",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when.",
    // actionBtn1: "View Collection asdf asdf asdf sad sdf asdf ",
    actionBtn2: "View Collection",
  },
  {
    id: 2,
    backgroundBannerImage: "/images/bannerImage.jpeg",
    backgroundBannerImageMobile: "/images/bannerImageMobile.jpeg",
    heading: "Look within your self and discover",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when.",
    // actionBtn1: "Explore",
    actionBtn2: "View Collection",
  },
  {
    id: 3,
    backgroundBannerImage: "/images/bannerImage.jpeg",
    backgroundBannerImageMobile: "/images/bannerImageMobile.jpeg",

    heading: "Look within your self and discover",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when.",
    actionBtn2: "View Collection",
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
      description: `"I've always believed that age is just a number, and with the Ageless Radiance Serum from [Your Beauty Brand], I've found the secret to aging gracefully. This serum is nothing short of a magic potion for my skin!

        I appreciate the meticulous selection of ingredients by [Your Beauty Brand]. Knowing that the serum is packed with antioxidants and nourishing elements gives me the confidence that I'm investing in the long-term health of my skin. Plus, the fact that the `,
      image: "/images/person-1.png",
      name: "Nishita",
      designation: "CEO, Bea-You",
    },
    {
      id: 2,
      description: `"I am absolutely in love with the Radiant Glow Daily Cleanser from Bea You As someone who has tried countless facewashes over the years, I can confidently say that this one stands out in a league of its own.
      After just a few weeks of incorporating it into my daily routine,  I noticed a difference. The gentle exfoliation and deep cleansing action of this facewash have worked wonders on my skin. What's even more impressive is its ability to tackle stubborn blemishes without drying out my skin. 
        "`,
      image: "/images/person-1.png",
      name: "Ritesh Newal",
      designation: "CEO, Co-Founder, XYZ Inc.",
    },
    {
      id: 3,
      description: `"I am absolutely in love with the Radiant Glow Daily Cleanser from Bea You As someone who has tried countless facewashes over the years, I can confidently say that this one stands out in a league of its own.
      After just a few weeks of incorporating it into my daily routine,  I noticed a difference. The gentle exfoliation and deep cleansing action of this facewash have worked wonders on my skin. What's even more impressive is its ability to tackle stubborn blemishes without drying out my skin. 
        "`,
      image: "/images/person-1.png",
      name: "Ritesh Newal",
      designation: "CEO, Co-Founder, XYZ Inc.",
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
        url: "/products?category=bestsellers",
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
// old data
export const footerData = {
  footerImage: "/icons/logo.svg",
  newsLetter: {
    heading: "Subscribe to Newsletter",
  },
  heading: "Bea You.",
  description:
    "Discover the beauty within with Beayou , be Beautiful You.It means you can wear the less makeup and let skin SHINE through.",
  socialMedia: [
    {
      id: 1,
      name: "facebook",
      icon: Facebook,
    },
    {
      id: 2,
      name: "Twitter",
      icon: Twitter,
    },
    {
      id: 3,
      name: "Instagram",
      icon: Instagram,
    },
    {
      id: 4,
      name: "Linkedin",
      icon: Linkedin,
    },
  ],
  footerLinks: [
    [
      {
        id: 1,
        title: "Shop",
        url: "/products",
      },
      {
        id: 2,
        title: "About us",
        url: "/about-us",
      },

      {
        id: 3,
        title: "Contact us",
        url: "/contact-us",
      },
    ],
    [
      {
        id: 1,
        title: "Support",
        url: "/",
      },
      {
        id: 2,
        title: "Privacy Policy",
        url: "/privacy-policy",
      },
      {
        id: 3,
        title: "Terms & Condition",
        url: "/terms-and-conditions",
      },
    ],
    [
      {
        id: 1,
        title: "Cleanser",
        url: `/products/cleanser`,
      },
      {
        id: 2,
        title: "Gluta Radiance",
        url: "/products/gluta-radiance",
      },
    ],
  ],
  copyright: {
    description: "Copyright ©2023. All Rights Reserved.",
    developedBy: "Developed By The Special Character.",
    links: [
      {
        id: 1,
        title: "Terms & Conditions",
        url: "/terms-and-conditions",
      },
      {
        id: 2,
        title: "Privacy Policy",
        url: "/privacy-policy",
      },
    ],
  },
}

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
  {
    id: 1,
    title: "Bath & body",
    image: "/images/categorycard3.jpg",
    link: "/products?category=Bath&body",
  },
  {
    id: 2,
    title: "Hair care",
    image: "/images/categorycard1.jpg",
    link: "/products?category=haircare",
  },
  {
    id: 3,
    title: "Skin Care",
    image: "/images/categorycard2.jpg",
    link: "/products?category=skincare",
  },
  {
    id: 4,
    title: "Spa",
    image: "/images/categorycard4.png",
    link: "/products?category=spa",
  },
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
// export const termsPageBanner = {
//   backgroundBannerImage: "",
//   heading: "Terms & Condition",
// }

// export const termsandcondition = {
//   content: `Welcome to Beayou! These terms and conditions outline the rules and regulations for the use of Beayou's Website, located at **https://www.beayou.thespecialcharacter.com** By accessing this website we assume you accept these terms and conditions. Do not continue to use Beayou.com if you do not agree to take all of the terms and conditions stated on this page. The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company’s terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company,s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.`,
//   terms: [
//     {
//       id: 1,
//       title: "Cookies",
//       description: `We employ the use of cookies. By accessing Beayou.com, you agreed to use cookies in agreement with the Beayou.s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.`,
//     },
//     {
//       id: 2,
//       title: "License",
//       description: `Unless otherwise stated, Beayou and/or its licensors own the intellectual property rights for all material on Beayou.com. All intellectual property rights are reserved. You may access this from Beayou.com for your own personal use subjected to restrictions set in these terms and conditions. You must not:

// Republish material from Beayou.com
// Sell, rent or sub-license material from Beayou.com
// Reproduce, duplicate or copy material from Beayou.com
// Redistribute content from Beayou.com

// This Agreement shall begin on the date hereof. Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Beayou does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Beayou, its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Beayou shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website. Beayou reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions. You warrant and represent that:

// You are entitled to post the Comments on our website and have all necessary licenses and consents to do so.
// The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party.
// The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy.
// The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.

// You hereby grant Beayou a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media. `,
//     },
//     {
//       id: 3,
//       title: "Content Liability",
//       description: `We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.`,
//     },
//     {
//       id: 4,
//       title: "Your Privacy",
//       description: `Please read Privacy Policy.`,
//     },
//     {
//       id: 5,
//       title: "Removal of links from our website",
//       description: `If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly. We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.`,
//     },
//     {
//       id: 4,
//       title: "Disclaimer",
//       description: `To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:

// limit or exclude our or your liability for death or personal injury.
// limit or exclude our or your liability for fraud or fraudulent misrepresentation.
// limit any of our or your liabilities in any way that is not permitted under applicable law.
// exclude any of our or your liabilities that may not be excluded under applicable law.

// The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty. As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.`,
//     },
//   ],
// }
