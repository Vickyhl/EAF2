import React from "react";
import "./articles.css";

function Articles() {
  return (
    <>
      <h1 className="menAdv">Articles to enrich your knowledge</h1>

      <div className="tile-container">
        <a
          href="https://www.verywellfit.com/why-you-need-nutrition-and-fitness-3121363"
          className="tileAdv art1"
        >
          <p className="recipesText">
            Nutrition's Role in Physical Fitness: Why You Need to Consider Both
          </p>
        </a>

        <a
          href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6682932/"
          className="tileAdv art2"
        >
          <p className="recipesText">
            Integrated Role of Nutrition and Physical Activity for Lifelong
            Health
          </p>
        </a>

        <a
          href="https://diatribe.org/diet-and-exercise"
          className="tileAdv art3"
        >
          <p className="tileText">Diet and Exercise</p>
        </a>

        <a
          href="https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/12-tips-to-help-you-lose-weight/"
          className="tileAdv art4"
        >
          <p className="tileText">12 tips to help you lose weight</p>
        </a>

        <a
          href="https://www.health.harvard.edu/topics/nutrition"
          className="tileAdv art5"
        >
          <p className="tileText">Nutrition</p>
        </a>

        <a
          href="https://infinitylearn.com/surge/english/article/article-on-health-and-fitness/"
          className="tileAdv art6"
        >
          <p className="recipesText">
            Article on Health and Fitness – Long and short articles for students
          </p>
        </a>

        <a
          href="https://www.stileschiropracticchicago.com/health-articles/why-nutrition-is-the-most-important-part-of-fitness"
          className="tileAdv art7"
        >
          <p className="recipesText">
            Why Nutrition is the Most Important Part of Fitness
          </p>
        </a>

        <a
          href="https://www.sleepfoundation.org/physical-health/diet-exercise-sleep"
          className="tileAdv art8"
        >
          <p className="tileText">Diet, Exercise, and Sleep</p>
        </a>
      </div>
    </>
  );
}

export default Articles;
