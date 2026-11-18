import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { beforeEach, describe, expect, it } from "vitest"

import { TodoApp } from "@/components/todo-app"

const SEED = [
  { id: "1", text: "장보기", completed: true },
  { id: "2", text: "청소하기", completed: false },
]

function setup() {
  const user = userEvent.setup()
  render(<TodoApp />)
  const itemTexts = () =>
    screen.queryAllByRole("listitem").map((li) => li.textContent)
  return { user, itemTexts }
}

describe("웹 인터페이스 가이드라인 개선", () => {
  beforeEach(() => {
    window.localStorage.setItem("todos", JSON.stringify(SEED))
    window.history.replaceState(null, "", "/")
  })

  it("필터를 고르면 URL에 반영되고, 전체로 돌아가면 사라진다", async () => {
    const { user } = setup()
    await user.click(screen.getByRole("tab", { name: "완료" }))
    expect(window.location.search).toBe("?filter=completed")
    await user.click(screen.getByRole("tab", { name: "전체" }))
    expect(window.location.search).toBe("")
  })

  it("URL의 filter 값으로 시작한다", () => {
    window.history.replaceState(null, "", "/?filter=active")
    const { itemTexts } = setup()
    expect(itemTexts()).toEqual(["청소하기"])
  })

  it("수정 버튼으로 키보드만으로도 항목을 고칠 수 있다", async () => {
    const { user, itemTexts } = setup()
    await user.click(screen.getByRole("button", { name: "청소하기 수정" }))
    await user.keyboard("{Control>}a{/Control}빨래하기{Enter}")
    expect(itemTexts()).toEqual(["장보기", "빨래하기"])
  })

  it("삭제 후 실행 취소를 누르면 원래 목록으로 돌아온다", async () => {
    const { user, itemTexts } = setup()
    await user.click(screen.getByRole("button", { name: "장보기 삭제" }))
    expect(itemTexts()).toEqual(["청소하기"])
    await user.click(screen.getByRole("button", { name: "실행 취소" }))
    expect(itemTexts()).toEqual(["장보기", "청소하기"])
  })

  it("완료한 일 지우기 후 실행 취소로 복원한다", async () => {
    const { user, itemTexts } = setup()
    await user.click(screen.getByRole("button", { name: /완료한 일 지우기/ }))
    expect(itemTexts()).toEqual(["청소하기"])
    await user.click(screen.getByRole("button", { name: "실행 취소" }))
    expect(itemTexts()).toEqual(["장보기", "청소하기"])
  })
})
