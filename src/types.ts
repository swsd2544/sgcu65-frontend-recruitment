export interface User {
  name: string
  surname: string
  username: string
}

export interface CreateUserDto extends User {
  email: string
  password: string
}

export interface IUser extends User {
  id: number
}
