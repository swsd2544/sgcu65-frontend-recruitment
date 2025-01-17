interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  href?: string
}

function SocialButton({ href, ...props }: IProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img {...props} className="h-16 w-16 cursor-pointer rounded-full" />
    </a>
  )
}

export default SocialButton
