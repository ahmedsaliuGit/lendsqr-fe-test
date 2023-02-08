import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  let errorMsg;

  if (isRouteErrorResponse(error)) {
    errorMsg = (
      <p>
        <i>
          {error.status} {error.statusText}
        </i>
      </p>
    );
  } else {
    errorMsg = <p>{"Unknown Error"}</p>;
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {errorMsg}
    </div>
  );
}
