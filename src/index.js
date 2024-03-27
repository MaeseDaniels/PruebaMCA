import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/index.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import Detail from "./pages/Detail";
import usePodcast from "./hooks/usePodcast";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Base = () => {
  const {
    GetPodcastList,
    podcastListState,
    GetPodcastDetail,
    podcastDetailState,
  } = usePodcast();
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App
          GetPodcastList={GetPodcastList}
          podcastListState={podcastListState}
        />
      ),
    },
    {
      path: "/podcast/:podcastId",
      element: (
        <Detail
          GetPodcastDetail={GetPodcastDetail}
          podcastDetailState={podcastDetailState}
          GetPodcastList={GetPodcastList}
          podcastListState={podcastListState}
        />
      ),
    },
    {
      path: "/podcast/:podcastId/episode/:episode",
      element: (
        <Detail
          GetPodcastDetail={GetPodcastDetail}
          podcastDetailState={podcastDetailState}
          GetPodcastList={GetPodcastList}
          podcastListState={podcastListState}
        />
      ),
    },
  ]);
  return (
    <>
      <header className="header">
        <h1>
          <a href="/">Podcaster</a>
        </h1>
        {podcastListState.isLoading || podcastDetailState.isLoading ? (
          <span>Loading</span>
        ) : (
          ""
        )}
      </header>
      <RouterProvider router={router} />
    </>
  );
};
root.render(
  <React.StrictMode>
    <Base />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
