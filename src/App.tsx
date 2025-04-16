import Header from "./components/Header";
import TechTracker from "./components/TechTracker";
import SkillTimer from "./components/SkillTimer";
import History from "./components/History";
import Foorter from "./components/Footer";

function App() {
  return (
    <main className="flex flex-col w-auto h-full items-center gap-10">
      <Header />
      <div className="h-[70%] w-[80%] flex flex-wrap gap-5 md:flex-nowrap md:w-[60%]">
        <TechTracker />
        <SkillTimer />
      </div>
      <History />
      <Foorter />
    </main>
  );
}

export default App;
