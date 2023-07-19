import { DB_URL } from './constants'

export default async function fetchTodos() {
  const res = await fetch(DB_URL)

  const todos: Todo[] = await res.json()

  return todos
}
