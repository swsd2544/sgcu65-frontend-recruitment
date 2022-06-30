import Card from "@/components/ui/Card"

interface IProps {
  username: string
  name: string
  surname: string
}

function UserCard({ username, name, surname }: IProps) {
  return (
    <Card className="group w-full p-4">
      <h4 className="overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-medium text-primary group-hover:whitespace-normal group-hover:break-all">
        {username}
      </h4>
      <p className="overflow-hidden text-ellipsis whitespace-nowrap font-medium group-hover:whitespace-normal group-hover:break-all">{`${name} ${surname}`}</p>
    </Card>
  )
}

export default UserCard
