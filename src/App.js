import './App.css';
import Rive from '@rive-app/react-canvas';
import { HeaderComponent } from './components/HeaderComponent';
import { IntroComponent } from './components/IntroComponent';
import { HighlightsComponent } from './components/HighlightsComponent';
import { ItineraryComponent } from './components/ItineraryComponent';
import { FormComponent } from './components/FormComponent';
import { ProgressBarComponent } from './components/ProgressBarComponent';

function App() {
  return (

    <div className="App">
      <ProgressBarComponent />
      <HeaderComponent />
      <IntroComponent />
      <HighlightsComponent />
      <ItineraryComponent />
      <FormComponent />
    </div>
  );
}

export default App;
