import { DB_URL } from './constants'

export default async function fetchTodo(id: string) {
  const res = await fetch(`${DB_URL}/${id}`)

  if (!res.ok) return undefined

  const todo: Todo = await res.json()

  return todo
}
