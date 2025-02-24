import React, { useEffect, useState } from "react";
import { Container, Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const YouTubeClone = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get("https://react-test.aventusinformatics.com/api/feeds/get-videos")
      .then((response) => {
        if (response.data.status) {
          setVideos(response.data.data.results.data);
        }
      })
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);

  return (
    <Container sx={{ paddingTop: "80px" }}>
      <Grid container spacing={3}>
        {videos.map((video) => (
          <Grid item xs={12} sm={6} md={4} key={video.id}>
            <Link to={`/video/${video.id}`} style={{ textDecoration: "none" }}>
              <Card sx={{ backgroundColor: "black", color: "white", cursor: "pointer" }}>
                <CardMedia component="video" controls src={video.video_link} title={video.title} sx={{ height: "200px" }} />
                <CardContent>
                  <Typography variant="h6" color="white">{video.title}</Typography>
                  <Typography variant="body2" color="white">{video.channel_name}</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default YouTubeClone;
