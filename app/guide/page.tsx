import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "사용법 | todo",
  description: "할 일 앱의 기본 사용법을 안내합니다.",
}

const STEPS: { title: string; description: string }[] = [
  {
    title: "할 일 추가",
    description:
      "상단 입력창에 내용을 적고 Enter를 누르면 목록에 추가됩니다. 빈 내용은 추가되지 않습니다.",
  },
  {
    title: "완료 표시",
    description:
      "항목 왼쪽의 체크박스를 누르면 완료 처리되어 취소선이 그어집니다. 다시 누르면 진행중으로 돌아갑니다.",
  },
  {
    title: "내용 수정",
    description:
      "항목의 글자를 더블클릭하면 수정할 수 있습니다. Enter나 다른 곳을 클릭하면 저장되고, Esc를 누르면 취소됩니다.",
  },
  {
    title: "삭제",
    description: "항목 오른쪽의 휴지통 버튼으로 해당 항목을 지웁니다.",
  },
  {
    title: "필터로 보기",
    description:
      "전체, 진행중, 완료 탭으로 보고 싶은 항목만 골라 볼 수 있습니다.",
  },
  {
    title: "완료한 일 한꺼번에 지우기",
    description:
      "완료된 항목이 있으면 목록 아래에 '완료한 일 지우기' 버튼이 나타납니다. 누르면 완료된 항목이 모두 삭제됩니다.",
  },
]

export default function GuidePage() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-md flex-col gap-6 p-6 pt-16">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">사용법</h1>
        <p className="text-sm text-muted-foreground">
          할 일 앱을 처음 쓰는 분을 위한 안내입니다.
        </p>
      </div>

      <ol className="flex flex-col gap-4">
        {STEPS.map(({ title, description }, index) => (
          <li key={title} className="flex gap-3">
            <span
              aria-hidden
              className="flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium"
            >
              {index + 1}
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-semibold">{title}</h2>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </li>
        ))}
      </ol>

      <section className="flex flex-col gap-1 rounded-lg bg-muted/50 p-4">
        <h2 className="text-sm font-semibold">저장 방식</h2>
        <p className="text-sm text-muted-foreground">
          할 일은 서버가 아니라 이 브라우저에 저장됩니다. 다른 브라우저나
          기기에서는 보이지 않고, 브라우저 데이터를 지우면 함께 사라집니다.
        </p>
      </section>

      <Link
        href="/"
        className="text-sm font-medium underline underline-offset-4"
      >
        할 일 목록으로 돌아가기
      </Link>
    </main>
  )
}
