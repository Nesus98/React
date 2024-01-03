// import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import "./App.css";
import CardWrapper from "./components/CardWrapper";
import CardImg from "./components/CardImg";
import CardInfo from "./components/CardInfo";
import { freelancers } from "./db/freelancers";
import CardsContainer from "./components/CardsContainer";

function App() {
  console.log(freelancers);

  return (
    <CardsContainer>
      {freelancers.map((freelancer, index) => {
        return (
          <CardWrapper key={index} >
            <CardImg freelancer={freelancer}></CardImg>
            <CardInfo freelancer={freelancer}></CardInfo>
          </CardWrapper>
        );
      })}
    </CardsContainer>
  );
}

export default App;
