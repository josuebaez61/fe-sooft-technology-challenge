import { render } from "@testing-library/react";
import HomePage from "../../../components/Pages/HomePage";
import { Provider } from "react-redux";
import { makeStore } from "../../../lib/redux/store";

const store = makeStore();

describe("HomePage", () => {
  test("renders the HomePage component", () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  });
});
