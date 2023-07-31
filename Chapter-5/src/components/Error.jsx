import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>Oopss!!!</h1>
      <h3>Something went wrong!</h3>
      <h4>
        {err.statusText} : {err.status}
      </h4>
    </>
  );
};
export default Error;
