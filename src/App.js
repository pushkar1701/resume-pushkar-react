import './App.scss';
import Header from './components/shared/header/header';
import Hero from './components/hero/hero';
import SkillSet from './components/skillset/skillset';
import About from './components/about/about';
import Experience from './components/experience/experience';
import Extra from './components/extra/extra';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <SkillSet />
      <Experience />
      <Extra />
    </div>
  );
}

export default App;
