import './App.css';
import { Footer } from './Components/Footer/Footer';
import { Hero } from './Components/Hero';
import { Join } from './Components/Join/Join';
import { Plans } from './Components/Plans/Plans';
import { Program } from './Components/Program/Program';
import { Reasons } from './Components/Reasons/Reasons';
import { Testimonial } from './Components/Testimonial/Testimonial';
function App() {
  return (
    <div className="App">
<Hero />
<Program />
<Reasons />
<Plans />
<Testimonial />
<Join />
<Footer />

    </div>
  );
}

export default App;