import { footerData } from "@/lib/constData"
import { fData } from "@/lib/constData"
import Link from "next/link"
import SocialIcons from "@/components/SocialIcons"
import Image from "next/image"
import styles from "./footer.module.css"
import NewsLetter from "@/components/NewsLetter"
import FleurvedaLogo from "@/public/icons/Fleurveda_Logo.svg"
import FleurvedaFlower from "@/public/icons/fleurveda_flower.svg"
import FleurvedaPeacock from "@/public/icons/fleurveda_peacock.svg"

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={styles.footerWrapper}>
      {/* <div className={styles.footerImageWrapper}>
        <Image
          fill
          src={footerData.footerImage}
          alt="footer image"
          className="object-contain"
        />
      </div> */}
      {/* newsletter */}
      {/* <NewsLetter /> */}
      <footer className={styles.footer}>
        {/* <p className={styles.heading}>{footerData.heading}</p> */}
        <div className={styles.footerDataWrapper}>
          <div className={styles.descriptionWrapper}>
            <a href="/" className="w-max">
              <FleurvedaLogo />
            </a>
            <p className={styles.description}>
              {/* {footerData.description} */}
              We are passionate about empowering you to embrace your natural
              beauty and achieve a glowing, healthy complexion.
            </p>

            <SocialIcons />
          </div>
          <div className={styles.footerLinks}>
            <>
              {fData?.fLinks?.map((item, index) => {
                return (
                  <div key={index} className={styles.footerLinkSection}>
                    {item?.map((link) => {
                      return (
                        <Link
                          key={link.id}
                          href={link.url}
                          className={styles.link}
                        >
                          {link.title}
                        </Link>
                      )
                    })}
                  </div>
                )
              })}
              <div className={styles.rightfooterlink}>
                <div>
                  <p className="text-caption1">Have questions & suggestions?</p>
                  <p className="text-caption1">Need assistance?</p>
                </div>
                <div>
                  <p className="text-caption1">Drop a email</p>
                  <a
                    className="text-caption1"
                    href="mailto:support@fleuraveda.com"
                  >
                    support@fleuraveda.com
                  </a>
                </div>
                <div>
                  <p className="text-caption1">Give us a call</p>
                  <a className="text-caption1" href="tel:+91 45679134">
                    +91 45679134
                  </a>
                </div>
              </div>
            </>
          </div>
        </div>

        {/* <hr className="opacity-30" />
        <div className={styles.copyrightWrapper}>
          <p className="sm">{footerData.copyright.description}</p>

          <Link
            href="https://thespecialcharacter.com/"
            target="_blank"
            className="font-semibold sm"
          >
            {footerData.copyright.developedBy}
          </Link>
          <div className={styles.copyrightLinks}>
            {footerData.copyright.links.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={link.url}
                  className={styles.copyrightLink}
                >
                  {link.title}
                </Link>
              )
            })}
          </div>
        </div> */}
      </footer>
      <div className={styles.fpimages}>
        <div className="absolute bottom-0 right-0">
          <FleurvedaPeacock />
        </div>
        <div className="absolute bottom-0 left-0">
          <FleurvedaFlower />
        </div>
      </div>
    </div>
  )
}

export default Footer
