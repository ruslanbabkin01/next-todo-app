import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

export const revalidate = 0

export default function Home() {
  return (
    <main className='className="mx-auto max-w-xl p-4 bg-stone-200 min-h-screen'>
      <AddTodo />
      <TodoList />
    </main>
  )
}
