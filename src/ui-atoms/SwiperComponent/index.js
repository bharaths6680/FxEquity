import React from "react";
import { withStyles } from "@material-ui/core/styles";
import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import ReactPlayer from "react-player";

const styles = theme => ({
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
  reactcard: {
    position: "relative",
    borderRadius: "10px",
    border: "1px #979797",
    background: "none",
    boxShadow: "none",
    // margin: "0px 10px 0px 10px",
    height: "100%",
    "@media only screen and (min-width:200px) and (max-width:1000px)": {
      height: "100%",
      width: "95%"
    }
  }
});

const SwiperComponent = ({ classes }) => {
  SwiperCore.use([Navigation, Pagination]);

  return (
    <Card className={classes.reactcard}>
      <Swiper
        tag="section"
        wrapperTag="ul"
        spaceBetween={50}
        slidesPerView={4}
        pagination={{ clickable: true }}
        onSlideChange={swiper => {
          console.log("swiper", swiper, "index:", swiper.previousIndex);
          // handlePause(swiper.previousIndex);
        }}
        onSwiper={swiper => console.log(swiper)}
      >
        {traders &&
          traders.length > 0 &&
          traders.map((step, key) => {
            return (
              <SwiperSlide
                tag="li"
                key={key}
                style={{
                  width: "100%",
                  height: "100%",
                  textAlign: "left"
                }}
              >
                <div className={classes.player_wrapper}>
                  <ReactPlayer
                    url={step.videoLink}
                    controls={true}
                    className={classes.react_player}
                    width="100%"
                    height="100%"
                    // playing={videoplay[key]}
                    onPlay={() => {
                      // handlePlay(key);
                    }}
                    onReady={() => console.log("onReady")}
                    onStart={() => console.log("onStart")}
                    config={{
                      youtube: { playerVars: { showInfo: 0 } }
                    }}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        <div class="swiper-pagination" slot="pagination" />
      </Swiper>
    </Card>
  );
};
export default withStyles(styles)(SwiperComponent);
