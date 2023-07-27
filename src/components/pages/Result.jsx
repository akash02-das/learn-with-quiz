import { useLocation, useParams } from 'react-router-dom';
import useAnswers from '../../hooks/useAnswers';
import Analysis from '../Result/Analysis';
import Summary from '../Result/Summary';

const Result = () => {
  const { id } = useParams();
  const { state } = useLocation();

  const { answers, loading, error } = useAnswers(id);

  const calculateScore = () => {
    let score = 0;

    answers?.forEach((question, index1) => {
      let correctIndexes = [],
        checkedIndexes = [];

      question?.options?.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2);
        if (state[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });

      // Check correctIndexes & checkedIndexes arrays are equal or not
      const isEqualArray =
        correctIndexes.length === checkedIndexes.length &&
        correctIndexes.every((value, index) => value === checkedIndexes[index]);

      if (isEqualArray) score += 5;
    });

    return score;
  };

  const userScore = calculateScore();

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && <h2>There was an error!</h2>}

      {answers && answers.length > 0 && (
        <>
          <Summary score={userScore} numOfQuestions={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
};

export default Result;
