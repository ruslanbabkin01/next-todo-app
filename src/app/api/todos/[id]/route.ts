import { NextResponse } from 'next/server'

const DATA_SOURCE_URL = 'https://jsonplaceholder.typicode.com/todos'

type Props = {
  params: {
    id: string
  }
}

export async function GET(request: Request, { params: { id } }: Props) {
  // const id = request.url.slice(request.url.lastIndexOf('/') + 1)

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`)

  const todo: Todo = await res.json()

  if (!todo.id) return NextResponse.json({ message: 'Todo not found' })

  return NextResponse.json(todo)
}

// example cookie and headers
// import { headers, cookies } from 'next/headers'
// import { redirect } from 'next/navigation'

// export async function DELETE(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   const id = params.id

//   const headerList = headers()
//   const type = headerList.get('Content-Type')

//   const cookiesList = cookies()
//   const coo2 = cookiesList.get('Cookie_2')?.value

//   // logic delete post
//   // redirect('/blog')

//   return NextResponse.json({ id, type, coo2 })
// }
