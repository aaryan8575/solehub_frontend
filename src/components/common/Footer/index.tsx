import { footerData } from "@/lib/constData"
import { fData } from "@/lib/constData"
import Link from "next/link"
import SocialIcons from "@/components/SocialIcons"
import Image from "next/image"
import styles from "./footer.module.css"

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        {/* <p className={styles.heading}>{footerData.heading}</p> */}
        <div className={styles.footerDataWrapper}>
          <div className={styles.descriptionWrapper}>
            <a href="/">
              <img src="/images/SolehubLogo.png" alt="logo" className="h-16" />
            </a>
            <p className={styles.description}>
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
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-caption1">Have questions & suggestions?</p>
                  <p className="text-caption1">Need assistance?</p>
                </div>
                <div>
                  <p className="text-caption1">Drop a email</p>
                  <a
                    className="text-caption1"
                    href="mailto:support@solehub.com"
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
      </footer>
    </div>
  )
}

export default Footer
