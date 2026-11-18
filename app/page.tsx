import { TodoApp } from "@/components/todo-app"

export default function Page() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-md flex-col gap-6 p-6 pt-16">
      <h1 className="text-3xl font-bold tracking-tight">내 할 일</h1>
      <TodoApp />
    </main>
  )
}
