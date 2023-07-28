import { getDatabase, ref, set } from 'firebase/database';
import cloneDeep from 'lodash.clonedeep';
import { useEffect, useReducer, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import useQuestions from '../../hooks/useQuestions';
import Answers from '../Quiz/Answers';
import MiniPlayer from '../Quiz/MiniPlayer';
import ProgressBar from '../Quiz/ProgressBar';

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case 'questions':
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case 'answer': {
      const questions = cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;
      return questions;
    }
    default:
      return state;
  }
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const { id } = useParams();
  const { questions, loading, error } = useQuestions(id);

  const [qna, dispatch] = useReducer(reducer, initialState);

  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const { state } = useLocation();

  useEffect(() => {
    dispatch({
      type: 'questions',
      value: questions,
    });
  }, [questions]);

  const handleAnswerChange = (e, index) => {
    dispatch({
      type: 'answer',
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  // Handle when user clicks the next button to get the next question
  const nextQuestion = () => {
    if (currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
    }
  };

  // Handle when user clicks the prev button to get back to the previous question
  const prevQuestion = () => {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion - 1);
    }
  };

  // Calculate percentage of progress
  const percentageOfProgress =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  // Submit quiz
  const submitQuiz = async () => {
    const { uid } = currentUser;

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, { [id]: qna });

    navigate(`/result/${id}`, { state: qna });
  };

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && <h2>There was an error!</h2>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>

          <Answers
            input={true}
            options={qna[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar
            next={nextQuestion}
            prev={prevQuestion}
            progress={percentageOfProgress}
            submit={submitQuiz}
          />
          <MiniPlayer videoID={id} videoTitle={state.videoTitle} />
        </>
      )}
    </>
  );
};

export default Quiz;
