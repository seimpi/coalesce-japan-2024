import './App.css';
import { HeaderComponent } from './components/HeaderComponent';
import { IntroComponent } from './components/IntroComponent';
import { HighlightsComponent } from './components/HighlightsComponent';
import { ItineraryComponent } from './components/ItineraryComponent';
import { FormComponent } from './components/FormComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <IntroComponent />
      <HighlightsComponent />
      <ItineraryComponent />
      <FormComponent />
    </div>
  );
}

export default App;
