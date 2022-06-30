import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Card from "@/components/ui/Card"
import SocialContainer from "@/components/socials/SocialContainer"
import RegisterForm from "@/components/register/RegisterForm"
import RegisterHeader from "@/components/register/RegisterHeader"
import FailedRegisterDialog from "@/components/register/FailedRegisterDialog"
import kite from "@/assets/kite.png"

function RegisterPage() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <FailedRegisterDialog
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />
      <img
        src={kite}
        alt="pink kite"
        className="absolute top-[10%] left-[10%] hidden aspect-square max-h-[92.5%] max-w-[35%] lg:block"
      />
      <div className="flex w-full flex-col items-center justify-center space-y-5 sm:items-end sm:pr-[8%]">
        <Card className="flex flex-col space-y-10 py-12 px-14 md:py-14 md:px-14 ">
          <RegisterHeader />
          <RegisterForm
            openModal={() => setIsOpen(true)}
            onSuccess={() => navigate("..")}
          />
        </Card>
        <SocialContainer />
      </div>
    </>
  )
}

export default RegisterPage
