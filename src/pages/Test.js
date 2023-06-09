import { useParams } from "react-router";
import { useState } from "react";

import CustomButton from "../components/UI/CustomButton";
import ButtonNavLink from "../components/UI/ButtonNavLink";

const Test = () => {
    const { unitId } = useParams();
    const [ quizStarted, setQuizStarted ] = useState(false);

    const unitNum = unitId.charAt(1) === "0" ? unitId.substring(2) : unitId.substring(1);

    const handleStartTest = () => {
        setQuizStarted(true);
    };

    return (
      <section>
        <h2>Test Unit {unitNum}</h2>
        {!quizStarted && (
          <>
            <p>
              You will have to answer to 10 questions. For each question you
              have 4 possible answers. To answer for each question you have 10
              seconds. To pass this test you have to answer correctly to at
              least 8 of them. Good luck!
            </p>
            <CustomButton onClick={handleStartTest}>start</CustomButton>
            <ButtonNavLink to="/learn">go back</ButtonNavLink>
          </>
        )}
      </section>
    );
};

export default Test;