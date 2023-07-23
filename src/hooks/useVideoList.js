import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from 'firebase/database';
import { useEffect, useState } from 'react';

const useVideoList = (page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      // database related stuffs
      const db = getDatabase();
      const videosRef = ref(db, 'videos');
      const videoQuery = query(
        videosRef,
        orderByKey(),
        startAt(page.toString()),
        limitToFirst(8)
      );

      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const snapshot = await get(videoQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setVideos((prevVideos) => {
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        } else {
          setHasMore(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
        console.error(error);
      }
    };

    fetchVideos();
  }, [page]);

  return { videos, loading, error, hasMore };
};

export default useVideoList;
