import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import Sobre         from './components/Sobre';
import Especialidade from './components/Especialidade';
import Servicos      from './components/Servicos';
import Depoimentos   from './components/Depoimentos';
import Contato       from './components/Contato';
import Footer        from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sobre />
      <Especialidade />
      <Servicos />
      <Depoimentos />
      <Contato />
      <Footer />
    </main>
  );
}