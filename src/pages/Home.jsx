import FirstHeader from "../templates/FirstHeader";
import SecondHeader from "../templates/SecondHeader";
import Hero from "../templates/Hero";
import Introduction from "../templates/Introduction";
import ErrorBoundary from "../components/ErrorBoundary";
import SelectedBuildings from "../components/SelectedBuildings";
import Agent from "../components/Agent";
import RegisterEmail from "../components/RegisterEmail";

const Home = () => {
  return (
    <>
      <FirstHeader />
      <SecondHeader />
      <Hero />
      <Introduction />
      <ErrorBoundary>
        <SelectedBuildings />
      </ErrorBoundary>
      <RegisterEmail />
      <ErrorBoundary>
        <Agent />
      </ErrorBoundary>
      
    </>
  );
};
export default Home;
