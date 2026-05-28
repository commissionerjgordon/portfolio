import { useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Portfolio from './pages/portfolio/Portfolio';
import './App.css';

function App() {
  const [darkMode] = useState(true);
  const name = 'James Gordon';
  const email = 'jgtechdev@gmail.com';
  const linkedin = 'https://www.linkedin.com/in/commissioner-gordon/';
  const github = 'https://github.com/commissionerjgordon';

  return (
    <div className="bg-slate-950 text-slate-200 min-h-screen">
      <Navbar name={name} linkedin={linkedin} github={github} />

      <Portfolio
        name={name}
        email={email}
        linkedin={linkedin}
        github={github}
      />

      <Footer name={name} />
    </div>
  );
}

export default App;
