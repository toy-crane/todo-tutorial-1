import "@testing-library/jest-dom/vitest"
import { cleanup } from "@testing-library/react"
import { afterEach } from "vitest"

afterEach(() => {
  cleanup()
  window.localStorage.clear()
  // 필터가 URL에 남아 다음 테스트에 영향을 주지 않게 초기화한다
  window.history.replaceState(null, "", "/")
})
