import React from "react";

function App() {
  return (
    <main className="container py-5 text-center">
      <style>
        {`
          @keyframes wobble-to-bottom-right-on-hover {
            16.65% {
              transform: translate(8px, 8px);
            }
            33.3% {
              transform: translate(-6px, -6px);
            }
            49.95% {
              transform: translate(4px, 4px);
            }
            66.6% {
              transform: translate(-2px, -2px);
            }
            83.25% {
              transform: translate(1px, 1px);
            }
            100% {
              transform: translate(0, 0);
            }
          }
          .link {
            padding: 60px 40px; /* Adjusted padding */
            margin: 10px;
            display: inline-block;
            color: #000;
            text-decoration: none;
            border: 2px solid #000; /* Added black border */
            
            transition: background-color 0.3s; /* Added transition */
          }
          .link:hover {
            background-color: #f4d93e; /* Change background color to yellow on hover */
            text-decoration: none;
            color: #000;
          }
          .wobble-to-bottom-right-on-hover:hover,
          .wobble-to-bottom-right-on-hover:focus,
          .wobble-to-bottom-right-on-hover:active {
            animation-name: wobble-to-bottom-right-on-hover;
            animation-duration: 1s;
            animation-timing-function: ease-in-out;
            animation-iteration-count: 1;
          }
        `}
      </style>
      <div className="container py-5 text-center">
        <a
          href="#"
          className="link wobble-to-bottom-right-on-hover inline-block m-4 rounded-full w-full"
        >
          <div className="text-5xl font-semibold"> See More</div>
        </a>
      </div>
    </main>
  );
}

export default App;
