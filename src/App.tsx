import Header from "./components/Header";
import SkillTracker from "./components/SkillTracker";
import SkillTimer from "./components/SkillTimer";
import History from "./components/History";
import Foorter from "./components/Footer";
import data from "./assets/data.json";

function App() {
  return (
    <main className="flex flex-col w-auto h-auto items-center gap-10">
      <Header />
      <div className="h-auto w-[80%] flex gap-5 ">
        <SkillTracker />
        <SkillTimer />
      </div>
      <History historyData={data.history} />
      <Foorter />
    </main>
  );
}

export default App;
