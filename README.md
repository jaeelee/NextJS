# NextJS
- react로 만드는 서버사이드 렌더링 프레임워크

## 규칙
- pages 폴더 안에 있는 파일명에 따라 route가 결정
    >ex) pages/about.js생성 -> localhost:3000/about
- 예외로 index.js는 앱이 시작하는 파일로 /index를 붙이면 안됨
- component이름은 중요하지 않음
- 대신 반드시 ```export default function```을 사용해야 페이지 렌더링 가능
- jsx를 쓸 때 React를 import할 필요 없음

## 장점
- 앱에 있는 페이지들이 미리 렌더링 됨 (서버사이드 렌더링)
