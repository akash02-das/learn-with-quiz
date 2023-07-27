import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

const useQuestions = (videoID) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      // database related stuffs
      const db = getDatabase();
      const quizRef = ref(db, `quiz/${videoID}/questions`);
      const quizQuery = query(quizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const snapshot = await get(quizQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setQuestions((prevQuestions) => {
            return [...prevQuestions, ...Object.values(snapshot.val())];
          });
        }
      } catch (error) {
        setError(true);
        setLoading(false);
        console.error(error);
      }
    };

    fetchQuestions();
  }, [videoID]);

  return { questions, loading, error };
};

export default useQuestions;
