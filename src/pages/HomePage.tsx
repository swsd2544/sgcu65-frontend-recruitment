import { fetchUsers } from "@/axios"
import { IUser } from "@/types"
import { useState } from "react"
import { useQuery } from "react-query"
import FailedFetchUsersDialog from "@/components/users/FailedFetchUsersDialog"
import LoadingModal from "@/components/users/LoadingModal"
import UsersHeader from "@/components/users/UsersHeader"
import UsersList from "@/components/users/UsersList"

function HomePage() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchText, setSearchText] = useState<string>("")
  const { isLoading, data: users = [] } = useQuery<IUser[], Error>(
    "users",
    fetchUsers,
    {
      onError: () => {
        setIsOpen(true)
      },
    }
  )

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase()) ||
      user.surname.toLowerCase().includes(searchText.toLowerCase()) ||
      user.username.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <>
      <LoadingModal show={isLoading} />
      <FailedFetchUsersDialog
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />
      <div className="mx-auto my-[3%] flex w-[90%] max-w-6xl flex-col gap-5 lg:gap-12">
        <UsersHeader searchText={searchText} setSearchText={setSearchText} />
        {!isLoading && <UsersList users={filteredUsers} />}
      </div>
    </>
  )
}

export default HomePage
