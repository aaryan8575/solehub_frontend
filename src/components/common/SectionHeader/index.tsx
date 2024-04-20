import React from "react"

type Props = {
  heading: string
  desc?: string
}

const SectionHeader: React.FC<Props> = ({ heading, desc }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center sm:max-w-[60%] mx-auto">
        {heading && <h3>{heading}</h3>}
        {desc && <p className="text-center ">{desc}</p>}
      </div>
    </>
  )
}

export default SectionHeader
