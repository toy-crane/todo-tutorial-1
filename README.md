# Todo Tutorial

[Claude Code Playbook](https://docs.claude-hunt.com) 강의의 실습용 저장소입니다. Next.js 와 shadcn/ui 로 시작하는 작은 Todo 앱을 단계별로 발전시키며 Claude Code 사용법을 익힙니다.

## 프로젝트 소개

**오늘의 할 일**은 브라우저에 상태를 저장하는 가벼운 할 일 관리 앱입니다.

- 할 일 추가/완료 처리/삭제
- 우선순위 설정 (높음 / 보통 / 낮음)
- 카테고리 태그 (업무 / 개인 / 쇼핑) 및 카테고리별 필터
- 상태별 필터 (전체 / 진행중 / 완료)
- 정렬 (생성일순 / 이름순 / 마감일순)
- 텍스트 검색
- 라이트/다크 테마 전환

## 관련 링크

- 수강생 결과물 공유: https://claude-hunt.com

## 기술 스택

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- shadcn/ui (radix-maia 스타일, taupe 베이스)
- TypeScript / ESLint / Prettier
- 패키지 매니저: bun 1.3.6

## 시작하기

```bash
bun install
bun dev
```

개발 서버는 기본적으로 [http://localhost:3000](http://localhost:3000) 에서 열립니다.

자주 쓰는 스크립트:

```bash
bun dev            # 개발 서버 실행
bun run build      # 프로덕션 빌드
bun run start      # 빌드 결과 실행
bun run lint       # ESLint
bun run typecheck  # tsc --noEmit
bun run format     # Prettier 포맷팅
```

## 컴포넌트 추가

shadcn/ui 컴포넌트는 다음과 같이 추가합니다.

```bash
bunx --bun shadcn@latest add button
```

`components/ui` 디렉토리에 컴포넌트가 추가됩니다.

## Contributors

- 토이크레인 - Frontend Developer
