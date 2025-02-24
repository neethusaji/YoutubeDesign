import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Typography, Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const VideoPlayer = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    axios
      .get(`https://react-test.aventusinformatics.com/api/feeds/get-video-details?feed_id=${id}`)
      .then((response) => {
        if (response.data.status) {
          setVideo(response.data.data);
        }
      })
      .catch((error) => console.error("Error fetching video:", error));
  }, [id]);

  if (!video) {
    return <Typography variant="h6" textAlign="center" mt={5}>Loading video...</Typography>;
  }

  return (
    <div style={{ display: "flex" ,paddingTop:"80px"}}>
      <Sidebar />
      <div style={{ flexGrow: 1, backgroundColor: "#0f0f0f", minHeight: "100vh" }}>
        <Navbar />
        <Container maxWidth="md" sx={{ mt: 4, color: "white" }}>
          
          <Box component="video" controls sx={{ width: "100%", height: "400px", borderRadius: "8px" }}>
            <source src={video.video_link} type="video/mp4" />
            Your browser does not support the video tag.
          </Box>
          <Typography variant="h5" gutterBottom>{video.title}</Typography>
          <Typography variant="subtitle1" mt={2}>{video.channel_name}</Typography>
          <Typography variant="body1" mt={1}>{video.description}</Typography>
        </Container>
      </div>
    </div>
  );
};

export default VideoPlayer;
