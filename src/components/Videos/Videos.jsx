import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';

import useVideoList from '../../hooks/useVideoList';
import Video from './Video';

const Videos = () => {
  const [page, setPage] = useState(1);
  const { videos, loading, error, hasMore } = useVideoList(page);

  return (
    <div style={{ textAlign: 'center' }}>
      <InfiniteScroll
        dataLength={videos.length}
        hasMore={hasMore}
        next={() => setPage(page + 8)}
        loader={<h2>Loading...</h2>}
      >
        {videos?.map((video) =>
          video.noq > 0 ? (
            <Link to='/quiz' key={video.youtubeID}>
              <Video video={video} />
            </Link>
          ) : (
            <Video video={video} key={video.youtubeID} />
          )
        )}
      </InfiniteScroll>

      {!loading && videos.length === 0 && <div>No videos found!</div>}
      {error && <div>There was an error!</div>}
    </div>
  );
};

export default Videos;
