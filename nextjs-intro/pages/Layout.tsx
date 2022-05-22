import Head from "next/head";
import { useRouter } from "next/router";
import NavBar from "../components/NavBar";

interface ObjType {
  [key: string]: string;
}
// children : 하나의 component를 또 다른 component를 넣을 때 사용
export default function Layout({ children }: React.PropsWithChildren<{}>) {
  const router = useRouter();
  const obj: ObjType = { "/": "Home", "/about": "About" };
  return (
    <>
      <Head>
        <title>{obj[router.pathname]} | Next movies</title>
      </Head>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
