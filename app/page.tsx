import Hero from "@/components/Hero";
import Newest from "@/components/Newest";


export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-8">
      <Hero />
      <Newest />
    </div>
  );
}
