import SectionHeader from "../common/SectionHeader"
import { testimonialCardType } from "@/utils/types"
import styles from "./testimonialCard.module.css"

const TestimonialCard = ({ data }: testimonialCardType) => {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.testimonialWrapper}>
        {/* <p className={styles.testimonialPersonName}>{data.name}</p>
        <p className={styles.testimonialPersonDesignation}>
          {data.designation}
        </p> */}
        <div className="pt-6 ">
          <SectionHeader heading={data.name} desc={data.designation} />
        </div>
      </div>
      <p className={styles.testimonialDescription}>{data.description}</p>
    </div>
  )
}

export default TestimonialCard
