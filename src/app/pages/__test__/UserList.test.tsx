import React from "react";
import { Provider } from "react-redux";
import appReducer from "@app/app.reducers";
import { applyMiddleware, createStore } from "redux";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import appMiddleware from "@app/app.middleware";
import { render, waitFor, screen } from "@testing-library/react";
import UserList from "../users/containers/UserList";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496",
            },
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
          },
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
              lat: "-43.9509",
              lng: "-34.4618",
            },
          },
          phone: "010-692-6593 x09125",
          website: "anastasia.net",
          company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
          },
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
          address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
              lat: "-68.6102",
              lng: "-47.0653",
            },
          },
          phone: "1-463-123-4447",
          website: "ramiro.info",
          company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications",
          },
        },
      ])
    );
  })
);

const middleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(middleware, logger));
middleware.run(appMiddleware);

const ReduxWrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

describe("Test user list screen", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  describe("Test call api success ", () => {
    test("Render list user screen ", async () => {
      render(<UserList />, { wrapper: ReduxWrapper });
      expect(screen.getByTestId("loading")).toBeInTheDocument();
      // await waitFor(() => {
      //   expect(screen.queryByTestId("loading")).toBeNull();
      // });
      await waitFor(() => {
        expect(screen.queryByTestId("user-list")).toBeInTheDocument();
      });
      expect(screen.queryByText("loading")).toBeNull();
      expect(screen.getByTestId("1")).toHaveAttribute("href", "/1");
    });
  });

  describe("Test call api error", () => {
    test("User list render Error", async () => {
      server.use(
        rest.get(
          "https://jsonplaceholder.typicode.com/users",
          (req, res, ctx) => {
            return res(ctx.status(500));
          }
        )
      );
      render(<UserList />, { wrapper: ReduxWrapper });
      expect(screen.getByTestId("loading")).toBeInTheDocument();
      await waitFor(() => {
        expect(screen.queryByTestId("loading")).toBeNull();
      });
      expect(screen.getByRole("alert")).toHaveTextContent(
        "Oops, failed to fetch!"
      );
    });
  });
});
