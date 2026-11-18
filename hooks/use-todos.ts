"use client"

import { useCallback, useSyncExternalStore } from "react"

export type Todo = {
  id: string
  text: string
  completed: boolean
}

const STORAGE_KEY = "todos"
const EMPTY: Todo[] = []

const listeners = new Set<() => void>()
let cachedRaw: string | null = null
let cachedTodos: Todo[] = EMPTY

function readTodos(): Todo[] {
  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (raw === cachedRaw) return cachedTodos
  cachedRaw = raw
  try {
    const parsed: unknown = raw ? JSON.parse(raw) : []
    cachedTodos = Array.isArray(parsed) ? (parsed as Todo[]) : EMPTY
  } catch {
    cachedTodos = EMPTY
  }
  return cachedTodos
}

function writeTodos(todos: Todo[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  // 다른 탭에서 바뀐 내용도 반영
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) listener()
  }
  window.addEventListener("storage", onStorage)
  return () => {
    listeners.delete(listener)
    window.removeEventListener("storage", onStorage)
  }
}

export function useTodos() {
  const todos = useSyncExternalStore(subscribe, readTodos, () => EMPTY)

  const update = useCallback((fn: (prev: Todo[]) => Todo[]) => {
    writeTodos(fn(readTodos()))
  }, [])

  const addTodo = useCallback(
    (text: string) =>
      update((prev) => [
        { id: crypto.randomUUID(), text, completed: false },
        ...prev,
      ]),
    [update]
  )

  const toggleTodo = useCallback(
    (id: string) =>
      update((prev) =>
        prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
      ),
    [update]
  )

  const deleteTodo = useCallback(
    (id: string) => update((prev) => prev.filter((t) => t.id !== id)),
    [update]
  )

  const editTodo = useCallback(
    (id: string, text: string) =>
      update((prev) => prev.map((t) => (t.id === id ? { ...t, text } : t))),
    [update]
  )

  const clearCompleted = useCallback(
    () => update((prev) => prev.filter((t) => !t.completed)),
    [update]
  )

  // 삭제된 항목만 원래 위치에 다시 끼워 넣는다. 그 사이의 추가, 수정, 다른 탭의 변경은 그대로 둔다
  const restoreTodos = useCallback(
    (removed: { todo: Todo; index: number }[]) =>
      update((current) => {
        const next = [...current]
        const present = new Set(current.map((t) => t.id))
        removed
          .filter(({ todo }) => !present.has(todo.id))
          .sort((a, b) => a.index - b.index)
          .forEach(({ todo, index }) =>
            next.splice(Math.min(index, next.length), 0, todo)
          )
        return next
      }),
    [update]
  )

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    restoreTodos,
  }
}
