# Todo Tutorial

[Claude Code Playbook](https://docs.claude-hunt.com) 강의에서 작은 할 일 앱을 직접 만들어 보며 Claude Code 쓰는 법을 배우는 연습용 저장소입니다.

## 관련 링크

- 강의 본문: https://docs.claude-hunt.com
- 수강생 결과물 공유: https://claude-hunt.com

## 기술 스택

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- shadcn/ui (radix-maia 스타일, taupe 베이스)
- TypeScript / ESLint / Prettier
- 패키지 매니저: bun 1.3.6

## 시작하기

### 준비물

- [Git](https://git-scm.com)
- [bun](https://bun.sh) 1.3.6 이상 (`bun --version`으로 확인). Node.js는 따로 설치하지 않아도 됩니다.
- 환경 변수 파일(`.env`)이나 외부 서비스 계정은 필요 없습니다.

bun이 없다면 아래 명령으로 설치합니다.

```bash
curl -fsSL https://bun.sh/install | bash
```

### 설치와 실행

```bash
git clone https://github.com/toy-crane/todo-tutorial-1.git
cd todo-tutorial-1
bun install
bun dev
```

터미널에 `Ready`가 표시되면 브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다. "내 할 일" 화면이 보이면 성공입니다. 개발 서버는 `Ctrl+C`로 끝냅니다. 3000번 포트를 이미 쓰고 있다면 `bun dev --port 3001`처럼 다른 포트를 지정하세요.

### 자주 쓰는 스크립트

```bash
bun run lint       # ESLint
bun run typecheck  # tsc --noEmit
bun run test       # Vitest 테스트 한 번 실행
bun run build      # 프로덕션 빌드
bun run start      # 빌드 결과 실행 (먼저 build를 해야 합니다)
bun run format     # Prettier로 ts/tsx 파일을 직접 고쳐 씀
```

`bun run format`은 검사만 하지 않고 파일을 바로 수정하므로, 실행한 뒤 `git status`로 바뀐 파일을 확인하세요.

## 레슨별 시작 브랜치

레슨마다 시작 시점의 코드를 `lesson/<레슨 이름>` 브랜치로 제공합니다. 레슨 본문이 안내하는 브랜치로 바꾼 뒤 따라가세요.

```shell
git checkout lesson/claude-md
```

## 컴포넌트 추가

shadcn/ui 컴포넌트는 다음과 같이 추가합니다.

```bash
bunx --bun shadcn@latest add button
```

`components/ui` 디렉토리에 컴포넌트가 추가됩니다.

## 컴포넌트 사용

```tsx
import { Button } from "@/components/ui/button";
```
