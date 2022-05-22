# NextJS Introduction

nextJS 연습하기

# docs

## CSS module

- 평범한 CSS를 사용할 수 있게 해줌
- 클래스이름에 추가할 때 오브젝트의 프로퍼티형식으로 작성<br>
  -> 클래스 이름을 무작위로 생성하여 클래스 이름의 중복 고민 없이 재사용 가능

## styled jsx

- import 필요 없음
- 부모 컴포넌트가 클래스 이름을 사용하고 있어도 영향 없음(독립적)

## Custom App

- next JS가 모든 페이지를 렌더링 할 수 있게 하는 컴포넌트의 청사진(템플릿)
- NextJS는 APP컴포넌트를 사용하여 page를 초기화 한다.
- 기본 APP을 재정의하려면 `./pages/_app.tsx`파일을 만들어야함 (파일명 중요- 틀리면 실행 안됨)
  -> 다른 pages가 랜더링 되기 전에 App을 먼저 보기 때문
  <br>

* 파일명.module.css 파일 형태를 제외한 모든 나머지 css파일들은 \_app.js에서만 import해와서 사용해야 한다. (글로벌 css간의 충돌을 피하기 위해서이다.)

```typescript
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

### 사용시 가능한 일

1. 페이지 변경 간에 레이아웃 유지
2. 페이지 탐색 시 state 유지
3. componentDidCatch를 사용한 Custom 에러 처리
4. 페이지에 추가 데이터 삽입
5. Global CSS 추가 가능 -> 커스텀 앱 이외에서는 global.css사용이 불가능

## Layout

-
