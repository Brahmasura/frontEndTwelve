import style from "./App.module.scss";
import Container from "./components/CardContainer/Container";

function App() {
  return (
    <>
      <div className={style.mainDiv}>
        <h1>Reliable, Efficient delivery</h1>
        <h1>Powered By Technology</h1>
        <p className={style.headingP}>
          Our Artificial Intelligent powered tools use millions of project data
          <br /> points to ensure that your project is successful
        </p>

        <Container/>

        
      </div>
    </>
  );
}

export default App;
