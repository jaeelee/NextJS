import { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Seo from "../../components/Seo";

export default function Detail({
  params,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const title = params[0];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({
  params: { params },
}: InferGetServerSidePropsType<GetServerSideProps>) {
  return {
    props: { params },
  };
}
