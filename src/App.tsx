import Header from "./components/Header";
import SkillTracker from "./components/SkillTracker";
import SkillTimer from "./components/SkillTimer";
import History from "./components/History";
import Foorter from "./components/Footer";
import data from "./assets/data.json";

function App() {
  return (
    <main className="flex flex-col w-auto h-full items-center gap-10">
      <Header />
      <div className="h-[70%] w-[80%] flex flex-wrap gap-5 md:flex-nowrap md:w-[60%]">
        <SkillTracker skillTrackerData={data.skills_learning} />
        <SkillTimer skillTimerData={data.skills_timing} />
      </div>
      <History historyData={data.history} />
      <Foorter />
    </main>
  );
}

export default App;
