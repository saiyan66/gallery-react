import { useState } from 'react';
import { rockBandList } from './data';

export default function Rock() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const lastIndex = rockBandList.length - 1;
  const hasNext = index < lastIndex;
  const hasPrev = index > 0;

  function handleNextClick() {
    setIndex((current) => (current < lastIndex ? current + 1 : current));
    setShowMore(false);
  }

  function handlePrevClick() {
    setIndex((current) => (current > 0 ? current - 1 : current));
  }

  function handleMoreClick() {
    setShowMore((prev) => !prev);
  }

  const band = rockBandList[index];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-200 via-slate-300 to-indigo-200 flex items-start justify-center py-8">
      <div className="w-full max-w-2xl px-4">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-black text-center">
          Rockabilia
        </h1>

        <p className="text-center font-medium text-gray-600 mt-2">This is all about RnR</p>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handlePrevClick}
            disabled={!hasPrev}
            aria-label="Previous Band"
            className="px-3 py-1 text-gray-700 bg-white/60 rounded-lg shadow-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/80 transition"
          >
            Prev
          </button>

          <button
            onClick={handleNextClick}
            disabled={!hasNext}
            aria-label="Next Band"
            className="px-3 py-1 text-gray-700 bg-white/60 rounded-lg shadow-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/80 transition"
          >
            Next
          </button>
        </div>

        <img
          src={band.url}
          alt={band.alt}
          className="mx-auto w-72 rounded-lg shadow-lg mt-8"
        />

        <h2 className="text-2xl text-center text-gray-800 mt-6">
          <i>
            <strong>{band.name}</strong>
          </i>{' '}
          <span className="text-base text-gray-600">by {band.artist}</span>
        </h2>

        <div className="text-center mt-4">
          <button
            onClick={handleMoreClick}
            className="mt-3 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition"
            aria-expanded={showMore}
          >
            {showMore ? 'Hide' : 'Show'} details
          </button>

          {showMore && (
            <div className="mt-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl max-w-md mx-auto text-gray-800 leading-relaxed shadow">
              {band.description}
            </div>
          )}
        </div>

        <h3 className="mt-4 text-center text-gray-500">
          {index + 1} of {rockBandList.length}
        </h3>
      </div>
    </div>
  );
}
