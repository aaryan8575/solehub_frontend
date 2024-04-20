import FaceBook from "@/public/icons/fleurveda_facebook.svg"
import Instagram from "@/public/icons/fleurveda_instagram.svg"
import Pinterest from "@/public/icons/fleurveda_pinterest.svg"
import Twitter from "@/public/icons/fleurveda_twitter.svg"

type Props = {}

const socialIcons = [
  {
    icon: <FaceBook />,
    link: "https://m.facebook.com/?wtsid=rdr_0hGHy1l132QhSpvyh",
  },
  {
    icon: <Instagram />,
    link: "https://www.instagram.com/",
  },
  {
    icon: <Pinterest />,
    link: "https://www.pinterest.com.au/ideas/",
  },
  {
    icon: <Twitter />,
    link: "https://twitter.com/",
  },
]

const SocialIcons = (props: Props) => {
  return (
    <>
      <div className="flex gap-2">
        {socialIcons.map((item) => {
          return (
            <a key={item.link} href={item.link}>
              {item.icon}
            </a>
          )
        })}
      </div>
    </>
    // <div className="flex gap-2">
    //   {footerData.socialMedia.map((item) => {
    //     const Icon = item.icon
    //     return (
    //       <Button key={item.id} variant="round" color="green">
    //         <span className="sr-only">{item.name} account button</span>
    //         <Icon className="h-5" />
    //       </Button>
    //     )
    //   })}
    // </div>
  )
}

export default SocialIcons
