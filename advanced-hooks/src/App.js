import './App.css';
import StringProvider from './store/StringProvider';
import StringModifier from './components/StringModifier';
import StringReader from './components/StringReader';

function App() {
  return (
    <StringProvider>
        <StringReader></StringReader>
        <StringModifier></StringModifier>
    </StringProvider>
    );
}

export default App;
