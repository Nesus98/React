import "./App.css"
import Welcome from "./components/Welcome";
import Wrapper2 from "./components/Wrapper2";

function App() {
  const today =new Date(Date.now()).toLocaleDateString(); 
  return (
    <Wrapper2>
      <Welcome name="Laura" today={today}></Welcome>
      <Welcome name="Jaen" today={today}></Welcome>
      <Welcome name="World" today={today}></Welcome>
    </Wrapper2>
  );
}

export default App;

