import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: 10,
    minWidth: 400,
    backgroundColor: "#fff",
    textAlign: "start",
    marginBottom: "22px",
  },
  header: {
    display: "flex",
  },
  newsTitle: {
    fontWeight: "bold",
  },
  media: {
    marginLeft: "auto",
    height: 30,
    width: 30,
  },
  caption: {
    color: "#616161",
    marginBottom: 20,
  },
});

function News() {
  const classes = useStyles();

  const [data, setData] = useState(null);
  const url =
    " https://api.rss2json.com/v1/api.json?rss_url=https://feed.nrk.no/pan/rss/1.11001867";

  function updateNews() {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }

  useEffect(() => {
    updateNews();
    setInterval(() => updateNews(), 1000 * 60);
  }, []);

  if (!data) {
    return "loading...";
  }

  const lastNews = data.items[0];
  const nextNews = data.items[1];
  const nrkLogo = data.feed.image;

  function formatPubTime(item) {
    if (!item.pubDate) {
      return "-";
    }
    return moment
      .utc(item.pubDate)
      .tz("Europe/Oslo")
      .format("DD-MM-YYYY HH:mm ");
  }

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent className={classes.cardContent}>
          <div className={classes.header}>
            <Typography className={classes.newsTitle} variant="h5">
              {lastNews.title ?? "-"}
            </Typography>
            <CardMedia
              className={classes.media}
              image={nrkLogo}
              title="Contemplative Reptile"
            />
          </div>
          <Typography variant="caption">{formatPubTime(lastNews)}</Typography>
          <Typography variant="body1">{lastNews.description ?? "-"}</Typography>
        </CardContent>
      </Card>

      <Card className={classes.root} variant="outlined">
        <CardContent className={classes.cardContent}>
          <div className={classes.header}>
            <Typography className={classes.newsTitle} variant="h5">
              {nextNews.title ?? "-"}
            </Typography>
            <CardMedia
              className={classes.media}
              image={nrkLogo}
              title="Contemplative Reptile"
            />
          </div>
          <Typography variant="caption">{formatPubTime(nextNews)}</Typography>
          <br />
          <br />
          <Typography variant="body1">{nextNews.description ?? "-"}</Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default News;
