import { AppProps } from "next/app";
import "../styles/globals.css"
import Layout from "./Layout";

// 페이지에 컴포넌트를 랜더링 하려 할 때, NextJS는 컴포넌트들을 prop으로 가져와 App함수에 전달
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />

      <style jsx global>{`
        a{
          color: black;
        }
      `}</style>
    </Layout>
  );
}