import Profile from "@/components/Profile";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default async function Home() {
  return (
    <main className="space-y-4">
      <LanguageSwitcher />
      <div className="flex flex-col md:flex-row sm:gap-x-4 gap-y-4">
        <Profile />
        <TechStack />
      </div>
      <Projects />
    </main>
  );
}
