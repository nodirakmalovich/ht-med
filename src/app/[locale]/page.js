
import HomePage from "@/pages/Home/HomePage";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('Index');
  return <HomePage />;
}
