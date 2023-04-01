import React from "react";

const Question = () => {
  return (
    <div className="grid md:grid-cols-2 m-12">
      <div className="bg-slate-100  p-5 rounded-xl shadow-xl">
       
      <article className="bg-slate-200 md:m-12  p-5 rounded-xl mb-5">
        <h1 className="font-semibold text-xl">
          What is the difference between props and state?
        </h1>
        <p>
          <span className="font-semibold">Ans : </span>Props are read-only
          inputs passed to a component from its parent, while state is mutable
          data that represents the internal state of a component.
        </p>
      </article>
      <article className="bg-slate-200 md:m-12 p-5 rounded-xl mb-5">
        <h1 className="font-semibold text-xl">How useState works?</h1>
        <p>
          <span className="font-semibold">Ans : </span>The useState hook is used
          to manage state in functional React components. It takes an initial
          value and returns a state variable and a function to update it. When
          the state is updated, the component is re-rendered with the new data.
          The state variable and the update function can be used throughout the
          component.
        </p>
      </article>
      <article className="bg-slate-200 md:m-12 p-5 rounded-xl mb-5">
        <h1 className="font-semibold text-xl">
          What else can useEffect() do other than load data?
        </h1>
        <p>
          <span className="font-semibold">Ans : </span>The useState hook is used
          to manage state in functional React components. It takes an initial
          value and returns a state variable and a function to update it. When
          the state is updated, the component is re-rendered with the new data.
          The state variable and the update function can be used throughout the
          component.
        </p>
      </article>
      <article className="bg-slate-200 md:m-12 p-5 rounded-xl mb-5">
        <h1 className="font-semibold text-xl">How does react work?</h1>
        <p>
          <span className="font-semibold">Ans : </span>React is a JavaScript
          library that uses a virtual DOM to efficiently render and update the
          user interface. It uses a component-based architecture, where each
          component manages its own state and updates the DOM in response to
          changes.
        </p>
      </article>
    </div>
    </div>
  );
};

export default Question;
