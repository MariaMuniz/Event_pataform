import { Header } from "../Components/Header";
import { Video } from "../Components/Video";
import { SiderBar } from "../Components/SiderBar";
import { useParams } from "react-router-dom";



export function Evento() {
  const { slug } = useParams<{ slug: string }>()

  return (<div>
    <Header />
    <main className="flex flex-1">
      {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
      <SiderBar />
    </main>
  </div>
  );
}