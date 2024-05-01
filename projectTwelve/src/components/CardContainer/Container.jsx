import style from "./container.module.scss";

import supervisor from "../../assets/icon-supervisor.svg";
import team from "../../assets/icon-team-builder.svg";
import karma from "../../assets/icon-karma.svg";
import calculator from "../../assets/icon-calculator.svg";
import Card from "../Card/Card";

const cardArray = [
  {
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    image: supervisor,
    color: "cyan",
  },
  {
    title: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    image: team,
    color: "red",
  },
  {
    title: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    image: karma,
    color: "orange",
  },
  {
    title: "Calculator",
    description: "Uses data from past projects to evaluate delivery estimates",
    image: calculator,
    color: "blue",
  },
];

const Container = () => {
  return (
    <>
      <div className={style.containerDiv}>
        <div className={style.extreme}>
          {
            <Card
              key={0}
              title={cardArray[0].title}
              description={cardArray[0].description}
              image={cardArray[0].image}
              color={cardArray[0].color}
            />
          }
        </div>
        <div className={style.center}>
          <div className={style.centered}>
            {" "}
            {
              <Card
                key={1}
                title={cardArray[1].title}
                description={cardArray[1].description}
                image={cardArray[1].image}
                color={cardArray[1].color}
              />
            }
          </div>
          <div className={style.centered}>
            {" "}
            {
              <Card
                key={2}
                title={cardArray[2].title}
                description={cardArray[2].description}
                image={cardArray[2].image}
                color={cardArray[2].color}
              />
            }
          </div>
        </div>
        <div className={style.extreme}>
          {" "}
          {
            <Card
              key={3}
              title={cardArray[3].title}
              description={cardArray[3].description}
              image={cardArray[3].image}
              color={cardArray[3].color}
            />
          }
        </div>
      </div>
    </>
  );
};

export default Container;
