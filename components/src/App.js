import "./App.css"
import Welcome from "./components/Welcome";

function App() {
  const today =new Date(Date.now()).toLocaleDateString(); 
  return (
    <div className="main">
      <Welcome name="Laura" today={today}></Welcome>
      <Welcome name="Jaen" today={today}></Welcome>
      <Welcome name="World" today={today}></Welcome>
    </div>
  );
}

export default App;

