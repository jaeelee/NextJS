/*
** Head 컴포넌트
** 현재 사용 안함
*/
import Head from "next/head";

interface IProps {
  title: string;
}

export default function Seo({ title }: IProps) {
  return (
    <Head>
      <title>{title} | Next movies</title>
    </Head>
  );
}
