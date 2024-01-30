import "./App.css";
import ReactDOM from "react-dom";
import TextInputWithFocusButton from "./components/TextInputWithFocusButton";

function App() {
  return (
    <>
      {/* {ReactDOM.createPortal(
        <h1>Hello World!</h1>,
        document.querySelector("#hello")
      )}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        recusandae necessitatibus sunt culpa ab, tempora sapiente quia nihil.
        Quia voluptas mollitia dolor deserunt reprehenderit quas vel, ex rerum
        doloremque nisi unde ratione quidem facilis corporis nihil laudantium!
        Voluptates reprehenderit id quis architecto asperiores quod iure sequi
        odit optio, esse delectus?
      </p> */}
      <TextInputWithFocusButton></TextInputWithFocusButton>
    </>
  );
}

export default App;
