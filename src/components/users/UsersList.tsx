import { IUser } from "@/types"
import UserCard from "./UserCard"

interface IProp {
  users: IUser[]
}

function UsersList({ users }: IProp) {
  return (
    <div className="grid auto-rows-auto grid-cols-1 items-start gap-4 sm:grid-cols-2 md:grid-cols-3 md:justify-items-center lg:grid-cols-4 lg:gap-6 lg:gap-y-8">
      {users.map((user) => (
        <UserCard
          key={user.id}
          username={user.username}
          name={user.name}
          surname={user.surname}
        />
      ))}
    </div>
  )
}

export default UsersList
