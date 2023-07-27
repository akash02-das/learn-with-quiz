import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

const useAnswers = (videoID) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchAnswers = async () => {
      // database related stuffs
      const db = getDatabase();
      const answersRef = ref(db, `answers/${videoID}/questions`);
      const answersQuery = query(answersRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const snapshot = await get(answersQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setAnswers((prevAnswers) => {
            return [...prevAnswers, ...Object.values(snapshot.val())];
          });
        }
      } catch (error) {
        setError(true);
        setLoading(false);
        console.error(error);
      }
    };

    fetchAnswers();
  }, [videoID]);

  return { answers, loading, error };
};

export default useAnswers;
