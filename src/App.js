import React, {useState} from "react";
import SingleQuestion from "./Question";
import data from "./data/data"
function App() {

  const [Questions] = useState(data)
    return (
      <div className="container">
       <h3>Questions and Answers about login</h3>
       <section className="info">
        {Questions.map((question) => {
          return <SingleQuestion key={question.id} {...question}></SingleQuestion>
        })}
       </section>
    </div>
  );
}

export default App;
 