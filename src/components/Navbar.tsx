import logo from "@/assets/sgcu-logo.svg"

function Navbar() {
  return (
    <div className="mx-auto flex h-20 w-full max-w-6xl items-center">
      <div className="mx-7 flex items-center gap-7">
        <img src={logo} alt="SGCU logo" />
        <span className="text-2xl text-primary">ISD SGCU</span>
      </div>
    </div>
  )
}

export default Navbar
