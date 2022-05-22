import Link from "next/link";
import { useRouter } from "next/router";
// import sytles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  return (
    // <nav className={sytles.nav}>
    <nav>
      {/* public 폴더에 있는 파일은 슬래시를 통해 가져올 수 있음  */}
      <img src="/vercel.svg" />
      <div>
        {/* anchor 태그 사용시 전체 페이지가 새로고침 되기 떄문에 속도가 느려짐 -> Link태그 사용하기 */}
        {/* Link에서는 href만 사용 className, style등 적용 안됨 -> 아래에 <a>태그 사용하는 이유 */}
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
      {/* styled jsx */}

      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
