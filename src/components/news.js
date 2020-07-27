import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#21374a",
    color: "#FFFFFF",
    margin: 22,
    textAlign: "start",
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    marginLeft: "auto",
    height: 30,
    width: 30,
    marginTop: "30",
  },
});

function News() {
  const classes = useStyles();

  const [data, setData] = useState(null);
  const rss = "https://feed.nrk.no/pan/rss/1.11001867";
  const url = `https://api.rss2json.com/v1/api.json?rss_url=${rss}`;

  // const newdate = moment().startOf("hour");

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) {
    return "loading...";
  }

  const lastNews = data.items[0];
  const nextNews = data.items[1];
  const nrkLogo = data.feed.image;

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5">{lastNews.title ?? "-"}</Typography>
          <Typography variant="caption">{lastNews.pubDate ?? "-"}</Typography>
          <br />
          <br />
          <Typography variant="body1">{lastNews.description ?? "-"}</Typography>
          <CardMedia
            className={classes.media}
            image={nrkLogo}
            title="Contemplative Reptile"
          />
        </CardContent>
      </Card>

      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5">{nextNews.title ?? "-"}</Typography>
          <Typography variant="caption">{nextNews.pubDate ?? "-"}</Typography>
          <br />
          <br />
          <Typography variant="body1">{nextNews.description ?? "-"}</Typography>
          <CardMedia
            className={classes.media}
            image={nrkLogo}
            title="Contemplative Reptile"
          />
        </CardContent>
      </Card>
    </>
  );
}

export default News;
