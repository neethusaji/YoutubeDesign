import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import YouTubeClone from "./components/YouTube";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<YouTubeClone />} />
          <Route path="video/:id" element={<VideoPlayer />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
