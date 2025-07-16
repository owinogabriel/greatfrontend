import type { SubTitleProps, TitleProps } from "../../interface"

export  const Title = ({children, className=""}:TitleProps) => {
return(
  <h1 className={`text-[#554CCD] font-semibold text-sm ${className}`} >{children}</h1>
)
}

export const SubTitle = ({children, className =""}: SubTitleProps) => {
  return(
    <h2 className={`text-3xl  text-[#171717] font-semibold text-center md:text-4xl ${className}`} >{children}</h2>
  )
}