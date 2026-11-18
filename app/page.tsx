import Link from "next/link"

import { TodoApp } from "@/components/todo-app"

export default function Page() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-md flex-col gap-6 p-6 pt-16">
      <div className="flex items-baseline justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">내 할 일</h1>
        <Link
          href="/guide"
          className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          사용법
        </Link>
      </div>
      <TodoApp />
    </main>
  )
}
