import RegisterComponent from "./components/RegisterComponent";

export default async function Home() {
    const data = await fetch("http://127.0.0.1:3658/m1/738379-715099-default/party/58ee3298-2aad-4573-97e3-05ab12347fd5/service/efib/b8d417de-963f-45dc-82b2-b88e12342d0b/enrollment");
    const posts = await data.json();
    return <RegisterComponent description={posts.description} />;
}
