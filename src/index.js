import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
        author="Sam" 
        timeAgo="Today at 4:45PM" 
        imgUrl={faker.image.image()}
        comment="Nice tutorial"/>
      <CommentDetail 
        author="Alex" 
        timeAgo="Today at 2:00AM" 
        imgUrl={faker.image.image()}
        comment="What a nice day!" />
      <CommentDetail 
        author="Jane" 
        timeAgo="Yesterday at 5:00PM" 
        imgUrl={faker.image.image()}
        comment="Lets fly away." />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
