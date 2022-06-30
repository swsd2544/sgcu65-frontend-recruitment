interface IProps {
  className?: string
  children?: React.ReactNode | React.ReactNode[]
}

function Card({ children, className }: IProps) {
  const newClassName = `border border-primary rounded-lg w-96 bg-white ${className}`
  return <div className={newClassName}>{children}</div>
}

export default Card
