import { ArticleList } from "@/components/ui/ArticleList";
import { Galery } from "@/components/ui/Galery";
import { Slider } from "@/components/ui/Slider";
import { Topbar } from "@/components/ui/Topbar";

export const PrivateHome = () => {
  return (
    <main>
      <Topbar />
      <Slider />
      <ArticleList />
      <Galery />
    </main>
  );
};
