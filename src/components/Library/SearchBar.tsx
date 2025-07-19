import React from 'react';

interface SearchBarProps {
  query: string;
  onQueryChange: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onQueryChange }) => {
  return (
    <div className="search-bar-revolving-glow w-full max-w-xl mx-auto">
      <div className="search-bar-content flex items-center w-full h-12 pr-2">
        <div className="pl-4 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            height="20"
            fill="none"
            className="text-gray-500"
          >
            <circle stroke="currentColor" r="8" cy="11" cx="11"></circle>
            <line stroke="currentColor" y2="16.65" y1="21" x2="16.65" x1="22"></line>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="w-full h-full bg-transparent text-gray-300 placeholder-gray-500 border-none outline-none px-4"
        />
        <button className="flex-shrink-0 flex items-center justify-center w-9 h-9 bg-gray-800/50 rounded-full border border-gray-700/80 hover:bg-gray-700 transition-colors">
          <svg
            preserveAspectRatio="none"
            height="18"
            width="18"
            viewBox="4.8 4.56 14.832 15.408"
            fill="none"
          >
            <path
              d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z"
              stroke="#d6d6e6"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
