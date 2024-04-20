import OpenModal from "@/components/common/OpenModal"
import RegisterTemplate from "@/modules/account/templates/register-template"

type Props = {}

const Register = (props: Props) => {
  return (
    <OpenModal>
      <RegisterTemplate query={"back"} />
    </OpenModal>
  )
}

export default Register
