// import { Typography, Grid, Card, CardContent } from "@material-ui/core";
// import React, { useCallback } from "react";
// import { withStyles } from "@material-ui/core/styles";
// import ReactPlayer from "react-player";

// const styles = theme => ({
//     header: {
//         fontFamily: "RobotoBold",
//         fontSize: "52px",
//         fontWeight: "bold",
//         fontStretch: "normal",
//         fontStyle: "normal",
//         lineHeight: "1.43",
//         letterSpacing: "normal",
//         color: "#fff"
//     },
//     header1: {
//         fontFamily: "RobotoBold",
//         padding: "16px 40px",
//         fontSize: "38px",
//         fontWeight: "bold",
//         fontStretch: "normal",
//         lineHeight: "1.43",
//         letterSpacing: "normal",
//         color: "#969696",
//         fontStyle: "italic"
//     },
//     react_player: {
//         position: "absolute",
//         top: 0,
//         left: 0,
//         right: 0,
//         width: "100% !important",
//         height: "100% !important"
//       },
//       player_wrapper: {
//         position: "relative",
//         paddingTop: "56.25% /* Player ratio: 100 / (1280 / 720) */"
//       },
//       reactcard: {
//         position: "relative",
//         borderRadius: "10px",
//         border: "1px #979797",
//         background: "none",
//         boxShadow: "none",
//         // margin: "0px 10px 0px 10px",
//         height: "100%",
//         "@media only screen and (min-width:200px) and (max-width:1000px)": {
//           height: "100%",
//           width: "95%"
//         }
//       },
//       videoCard: {
//         background: "none !important",
//         height: "217px",
//         margin: "0px 10px 0px 10px",
//         borderRadius: "8px"
//       },
//       videoTitle: {
//         color: "#dddddd",
//         fontSize: "14px",
//         fontFamily: "OpenSans-Regular",
//         // margin: "10px 0px 0px 3px",
//         whiteSpace: "nowrap",
//         overflow: "hidden",
//         textOverflow: "ellipsis",
//         width: "200px",
//         display: "block",
//         "@media only screen and (min-width:1200px) and (max-width:1350px)": {
//           width: "146px"
//         },
//         "@media only screen and (min-width:1350px)  and (max-width:1439px)": {
//           width: "190"
//         }
//       },
// })

// const SwiperComp = ({ classes, traders }) => {

//     const renderVideos = useCallback(
//         (traders = [], grid = 3) => {
//           if (traders?.length > 0) {
//             return (
//               <Grid container>
//                 {traders?.length > 0 &&
//                   traders.map((step, index) => {
//                     return (
//                       <Grid item md={grid} xs={12} key={index}>
//                         <Card className={classes.videoCard}>
//                           <CardContent className={classes.player_wrapper}>
//                             <ReactPlayer
//                               url={step?.videoLink}
//                               controls={true}
//                               className={classes.react_player}
//                               width="100%"
//                               height="100%"
//                               playing={step?.play}
//                               onPlay={() => {
//                                 console.log('index:', index)
//                                 // handlePlayArtcleVideos(index)
//                             }
//                             }
//                               onReady={() => console.log("onReady")}
//                               onStart={() => console.log("onStart")}
//                               config={{
//                                 youtube: { playerVars: { showInfo: 0 } }
//                               }}
//                             //   light={
//                             //     <img
//                             //       src="/../../ui-assets/images/play-icon.svg"
//                             //       alt="play"
//                             //       width={60}
//                             //       height={60}
//                             //     />
//                             //   }
//                             />
//                           </CardContent>
//                         </Card>
//                         <Grid
//                           container
//                           alignItems="center"
//                           justify="space-between"
//                           style={{ padding: "6px 10px" }}
//                         >
//                           <Typography className={classes.videoTitle}>
//                             {step?.header || ""}
//                           </Typography>
//                           {/* <Typography className={classes.videoPublished}>
//                             {moment(step?.publishedDateTime)
//                               .startOf("hour")
//                               .fromNow()}
//                           </Typography> */}
//                         </Grid>
//                         <br />
//                       </Grid>
//                     );
//                   })}
//               </Grid>
//             );
//           }
//           return null;
//         },
//         [classes]
//       );
//     return (
//         <Grid style={{ width: "100%", textAlign: "center", padding: "40px 0px " }}>
//             {renderVideos(traders)}
//         </Grid>
//     )
// }
// export default (withStyles(styles)(SwiperComp));

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ReactPlayer from "react-player";
import { CardActions, IconButton } from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "100%"
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    "@media(max-width:400px)": {
      display: "flex",
      margin: "0px 11px 0px 11px !important"
    },
    overflowX: "auto",
    overflowY: "auto",
    width: "100%",
    // display: "-webkit-box",
    maxHeight: 320,
    padding: "40px 19px"
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  videoCard: {
    background: "none !important",
    height: "100% !important",
    margin: "0px 10px 0px 10px !important",
    borderRadius: "8px"
    // width: "32.5w"
  },
  videoTitle: {
    color: "#dddddd",
    fontSize: "14px",
    fontFamily: "OpenSans-Regular",
    // margin: "10px 0px 0px 3px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "200px",
    display: "block",
    "@media only screen and (min-width:1200px) and (max-width:1350px)": {
      width: "146px"
    },
    "@media only screen and (min-width:1350px)  and (max-width:1439px)": {
      width: "190"
    }
  },
  react_player: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100% !important",
    height: "100% !important"
  },
  player_wrapper: {
    position: "relative",
    paddingTop: "56.25% /* Player ratio: 100 / (1280 / 720) */"
  },
  videoTitle: {
    color: "#fff",
    fontSize: "16px",
    fontFamily: "RobotoRegular",
    margin: "0px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "90%",
    display: "block"
  },
  desc: {
    color: "#969696",
    fontSize: "14px",
    fontFamily: "RobotoRegular",
    margin: "0px !important",
    textTransform: "capitalize"
  },
  cardAction: {
    padding: "0px",
    display: "block"
  },
  tradebud: {
    width: "20px",
    height: "20px",
    margin: "0 12px",
    opacity: "0.5",
    backgroundColor: "#969696",
    "&:hover": {
      opacity: "0.7",
      backgroundColor: "#ff9600"
    }
  }
});

function SwiperComp(props) {
  const { classes, traders = [] } = props;
  let budsArray = [];
  let count = traders.length / 4;
  for (let i = 0; i < count; i++) {
    budsArray.push(i);
  }
  const renderBuds = () => {
    return (
      <Grid container justify="center">
        {budsArray.length > 0 &&
          budsArray.map(item => {
            return (
              <IconButton className={classes.tradebud} key={item}></IconButton>
            );
          })}
      </Grid>
    );
  };
  return (
    <div className={classes.root}>
      <GridList spacing={4} cols={4} className={classes.gridList}>
        {traders.map((tile, index) => (
          <GridListTile
            item
            md={4}
            sm={6}
            key={tile.header}
            className={classes.videoCard}
          >
            <Card className={classes.videoCard}>
              <CardContent style={{ padding: "0px" }}>
                <ReactPlayer
                  url={tile?.videoLink}
                  controls={true}
                  width="100%"
                  height="100%"
                  playing={tile?.play}
                  onPlay={() => {
                    console.log("index:", index);
                    // handlePlayArtcleVideos(index)
                  }}
                  onReady={() => console.log("onReady")}
                  onStart={() => console.log("onStart")}
                  config={{
                    youtube: { playerVars: { showInfo: 0 } }
                  }}
                />
              </CardContent>
              <CardActions className={classes.cardAction}>
                <Typography className={classes.videoTitle}>
                  {tile?.header || ""}
                </Typography>
                <Typography className={classes.desc}>
                  {tile?.originFrom || ""}
                </Typography>
              </CardActions>
            </Card>
          </GridListTile>
        ))}
      </GridList>
      {renderBuds()}
    </div>
  );
}

SwiperComp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SwiperComp);
