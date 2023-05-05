import React from "react";
import Pdf from "react-to-pdf";
import ReactToPdf from "react-to-pdf";
const Blog = () => {
  const ref = React.createRef();
  const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [14,12]
};
  return (
    <div className="mb-7">
      <ReactToPdf targetRef={ref} options={options} filename="blogs.pdf">
        {({ toPdf }) => (
          <div className="container py-10 px-10 mx-0 min-w-full grid place-items-center">
              <button className="btn btn-primary bg-gradient-to-r from-blue-600 to-indigo-500 text-white items-center" onClick={toPdf}>Generate to pdf</button>
          </div>
          // <button className="btn flex  btn-primary bg-gradient-to-r from-blue-600 to-indigo-500 text-white" onClick={toPdf}>
          //   Generate Download Pdf
          // </button>
        )}
      </ReactToPdf>
      <div ref={ref}>
        <h1 className="flex text-center text-3xl mt-3 font-bold justify-center">
          Some important question
        </h1>
        <div className="px-3 md:px-20 lg:px-52">
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-4 text-justify">
              <div className="border-solid border-2 p-4 bg-slate-100">
                <h3 className="text-2xl">
                  1.Differences between uncontrolled and controlled components?{" "}
                </h3>
                <p className="mt-2">
                  i. Uncontrolled components are those that operate on their own
                  without any intervention or control, while controlled
                  components are those that are actively managed by an external
                  entity. <br />
                  ii. Uncontrolled components are designed to perform their
                  functions independently, while controlled components are
                  designed to work in tandem with other components to achieve a
                  particular objective. <br />
                  iii. Uncontrolled components typically have unpredictable
                  performance, while controlled components have a predetermined
                  level of performance that can be monitored and adjusted as
                  need
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-4 text-justify">
              <div className="border-solid border-2 p-4 bg-slate-100">
                <h3 className="text-2xl">
                  2.How to validate React props using PropTypes?{" "}
                </h3>
                <p className="mt-2">
                  React provides a library called PropTypes that allows you to
                  specify the types and shapes of props that a component should
                  receive. This is helpful for catching bugs early in
                  development, ensuring that components receive the correct
                  props, and documenting how components should be used.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-4 text-justify">
              <div className="border-solid border-2 p-4 bg-slate-100">
                <h3 className="text-2xl">
                  3.Difference between nodejs and express js.
                </h3>
                <p className="mt-2">
                  {" "}
                  <li>
                    Node.js is a server-side JavaScript runtime that allows you
                    to run JavaScript code on the server. It provides an
                    event-driven, non-blocking I/O model that makes it ideal for
                    building scalable, high-performance web applications.
                    Node.js comes with a built-in module system and APIs for
                    working with file systems, networking, and more.
                  </li>
                  <li>
                    Express.js, on the other hand, is a web framework built on
                    top of Node.js that simplifies the process of building web
                    applications. Express.js provides a set of tools and APIs
                    for building web applications, such as middleware for
                    handling requests and responses, routing for mapping URLs to
                    controller functions, and templating engines for generating
                    HTML.
                  </li>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-4 text-justify">
              <div className="border-solid border-2 p-4 bg-slate-100">
                <h3 className="text-2xl">4.What is useMemo in react.js?</h3>
                <p className="mt-2">
                  {" "}
                  <span className="font-semibold">Custom Hook: </span>A custom
                  hook in React is a JavaScript function that allows you to
                  reuse logic across different components. Custom hooks are
                  created by extracting some common functionality from a
                  component and putting it in a separate function that can be
                  used by other components. <br />
                  Custom hooks can be useful in many situations. Here are some
                  reasons why you might create a custom hook:
                  <li>
                    {" "}
                    If you find yourself repeating the same code across multiple
                    components, you can create a custom hook to avoid
                    duplicating code.
                  </li>
                  <li>
                    Custom hooks can help to abstract away complex logic and
                    make your components more readable and maintainable.
                  </li>
                  <li>
                    Custom hooks can encapsulate stateful logic and prevent
                    components from becoming too complex.
                  </li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
