import Header from "./components/Header";
import SkillTracker from "./components/SkillTracker";
import SkillTimer from "./components/SkillTimer";
import History from "./components/History";
import Foorter from "./components/Footer";

function App() {
  return (
    <main className="flex flex-col w-auto h-screen justify-around mr-5 ml-5">
      <Header />
      <div className="size-auto flex gap-5">
        <SkillTracker />
        <SkillTimer />
      </div>
      <History />
      <Foorter />
    </main>
  );
}

export default App;
