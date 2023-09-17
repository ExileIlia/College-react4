import React, { useState } from "react";
import SingleQuestion from "./Question";
import data from "./data";

function App() {
  const [questions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about Login</h3>
        <section className="info">
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App; 