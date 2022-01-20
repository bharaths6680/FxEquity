import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import "react-table/react-table.css";
import { mapDispatchToProps } from "../../../../../ui-utils/commons";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Link,
  Hidden
} from "@material-ui/core";
import SwiperComp from "../../../../../ui-atoms/SwiperComp";

const styles = theme => ({
  root: {
    width: "100%"
  },
  topbgImage: {
    backgroundImage: "url('ui-assets/images/dashboard-bg.svg')",
    backgroundSize: "200px 200px",
    backgroundPosition: "bottom right",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    width: "80%"
  },
  dashboardImg: {
    width: "80%",
    height: "80%",
    "@media(max-width:500px)": {
      width: "100%",
      height: "100%"
    }
  },
  dashboardImg1: {
    width: "100%",
    height: "100%",
    "@media(max-width:500px)": {
      width: "100%",
      height: "100%"
    }
  },
  topHead: {
    display: "flex",
    justifyContent: "space-between"
  },
  tradeBtn: {
    fontFamily: "RobotoBold",
    fontSize: "14px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.43",
    letterSpacing: "normal",
    color: "#fff",
    textTransform: "uppercase",
    backgroundColor: "#e74242",
    "&:hover": {
      backgroundColor: "#e74242",
      opacity: 1
    },
    margin: "20px 0px"
  },
  header: {
    fontFamily: "RobotoBold",
    fontSize: "42px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.43",
    letterSpacing: "normal",
    color: "#fff"
  },
  header2: {
    fontFamily: "RobotoBold",
    fontSize: "42px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.43",
    letterSpacing: "normal",
    color: "#ff9600"
  },
  header3: {
    fontFamily: "RobotoBold",
    fontSize: "42px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.43",
    letterSpacing: "normal",
    color: "#ff9600",
    width: "100%",
    textAlign: "center"
  },
  paragraph: {
    fontFamily: "RobotoRegular",
    fontSize: "24px",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.43",
    letterSpacing: "normal",
    color: "#969696"
  },
  gridStyle: {
    padding: "30px 50px"
  },
  mobGridStyle: {
    padding: "0px 14px",
    "&$topbgImage": {
      backgroundImage: "url('ui-assets/images/dashboard-bg.svg')",
      backgroundSize: "200px 200px",
      backgroundPosition: "bottom right",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
      width: "80%"
    }
  },
  gridStyle1: {
    padding: "30px 50px",
    background: "#282828",
    "@media(max-width:800px)": {
      padding: "30px 14px"
    }
  },
  offeringContainer: {
    padding: "50px 0px 0px 50px",
    backgroundColor: "#e74242"
  },
  tradeContainer: {
    padding: "50px",
    backgroundColor: "#e74242"
  },
  gridStyle2: {
    "@media(max-width:800px)": {
      padding: "0px 14px"
    }
  },
  offeringBg: {
    backgroundImage: "url('ui-assets/images/offering.svg')",
    backgroundSize: "cover",
    backgroundPosition: "bottom right",
    backgroundRepeat: "no-repeat"
  },
  traderContainer: {
    padding: "50px",
    backgroundColor: "#282828",
    "& .header": {
      fontFamily: "RobotoBold",
      fontSize: "42px",
      fontWeight: "bold",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.43",
      letterSpacing: "normal",
      color: "#ff9600",
      width: "100%",
      textAlign: "center"
    }
  },
  paragraph1: {
    fontFamily: "RobotoRegular",
    fontSize: "24px",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.43",
    letterSpacing: "normal",
    color: "#fff"
  },
  division2: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    width: "80%"
  },
  division3: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    width: "80%"
  },
  footer: {
    background: "#282828",
    margin: "1px 0",
    padding: "32px"
  },
  hyperlink: {
    color: "#969696 !important"
  },
  footerHeader: {
    fontFamily: "RobotoBold",
    fontSize: "18px",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.43",
    letterSpacing: "normal",
    color: "#969696",
    marginBottom: 20
  },
  footer_socialicon: {
    width: 50,
    height: 50,
    padding: 15,
    backgroundColor: "#080808",
    borderRadius: "50%",
    marginRight: "20px"
  },
  image: {
    width: 18,
    height: 18,
    objectFit: "contain"
  },
  card: {
    background: "#080808",
    width: "95%",
    height: 376,
    borderRadius: 8,
    padding: "32px",
    backgroundImage: "url('ui-assets/images/dashboard-bg.svg')",
    backgroundSize: "100px 100px",
    backgroundPosition: " 25% 75%",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-between",
    "& .MuiCardHeader-root": {
      padding: 0
    },
    "& .MuiCardActions-root": {
      height: "100%",
      alignItems: "end",
      padding: 0,
      justifyContent: "end"
    }
  },
  joiningheader: {
    fontFamily: "RobotoBold",
    fontSize: "42px",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.43",
    letterSpacing: "normal",
    color: "#fff"
  },
  cardHeader: {
    fontFamily: "RobotoBold",
    fontSize: "32px",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.43",
    letterSpacing: "normal",
    color: "#969696"
  },
  cardSub: {
    fontFamily: "RobotoBold",
    fontSize: "16px",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.43",
    letterSpacing: "normal",
    color: "#666666",
    cursor: "pointer",
    "& span": {
      color: "#fff"
    }
  },
  access_btn: {
    width: "230px",
    height: "69px",
    margin: "32px 0px 0 0",
    padding: "0px 30px",
    borderRadius: "6px",
    border: "solid 1px #969696",
    backgroundColor: "#080808",
    color: "#fff",
    "& .labeL": {
      display: "grid",
      padding: "0px 10px",
      textAlign: "left"
    },
    "& .labeL .firstText": {
      fontFamily: "RobotoRegular",
      fontSize: "12px",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.43",
      letterSpacing: "normal"
    },
    "& .labeL .secondText": {
      fontFamily: "RobotoRegular",
      fontSize: "16px",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.43",
      letterSpacing: "normal"
    }
  }
});

const traders = [
  {
    id: 1,
    videoLink: "https://www.youtube.com/watch?v=M02xyHF2sqA",
    header: "Long name will fit here in max one line",
    originFrom: "USA"
  },
  {
    id: 2,
    videoLink: "https://www.youtube.com/watch?v=M02xyHF2sqA",
    header: "Long name will fit here in max one line",
    originFrom: "USA"
  },
  {
    id: 3,
    videoLink: "https://www.youtube.com/watch?v=M02xyHF2sqA",
    header: "Long name will fit here in max one line",
    originFrom: "USA"
  },
  {
    id: 4,
    videoLink: "https://www.youtube.com/watch?v=M02xyHF2sqA",
    header: "Long name will fit here in max one line",
    originFrom: "USA"
  },
  {
    id: 5,
    videoLink: "https://www.youtube.com/watch?v=M02xyHF2sqA",
    header: "Long name will fit here in max one line",
    originFrom: "USA"
  },
  {
    id: 6,
    videoLink: "https://www.youtube.com/watch?v=M02xyHF2sqA",
    header: "Long name will fit here in max one line",
    originFrom: "USA"
  }
];

const footerLinks = [
  {
    name: "CFD Trading",
    route: "/user-home/cfd-trading"
  },
  {
    name: "Trading Platform",
    route: "/user-home/trading-platform"
  },
  {
    name: "Trading Robots",
    route: "/user-home/trading-robots"
  },
  {
    name: "IB Program",
    route: "/user-home/ib-program"
  },
  {
    name: "Events and Impacts",
    route: "/user-home/events"
  },
  {
    name: "White Labeling",
    route: "/user-home/white-labeling"
  },
  {
    name: "Risk Labeling",
    route: "/user-home/white-labeling"
  },
  {
    name: "Terms and Conditions",
    route: "/user-home/white-labeling"
  },
  {
    name: "Privacy Policy",
    route: "/user-home/white-labeling"
  }
];

const footerSocialLinks = [
  {
    name: "facebook",
    img: "ui-assets/images/fb.svg"
  },
  {
    name: "twitter",
    img: "ui-assets/images/twitter.svg"
  },
  {
    name: "insta",
    img: "ui-assets/images/insta.svg"
  },
  {
    name: "linkedin",
    img: "ui-assets/images/linkedin.svg"
  },
  {
    name: "youtube",
    img: "ui-assets/images/youtube.svg"
  }
];
class Dashboard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Hidden only={["xs"]}>
          <Grid container className={classes.gridStyle}>
            <Grid
              item
              md={5}
              xs={12}
              sm={12}
              xl={5}
              className={classes.topbgImage}
            >
              <div style={{ width: "80%" }}>
                <Typography className={classes.header}>
                  World-class trading experience at your fingertips
                </Typography>
                <Button className={classes.tradeBtn}>Trade With Us</Button>
              </div>
            </Grid>
            <Grid
              item
              md={7}
              xs={12}
              sm={12}
              xl={7}
              style={{ textAlign: "end" }}
            >
              <img
                src={"ui-assets/images/dashboard-main.svg"}
                alt={"bg"}
                width={"100%"}
                height={"100%"}
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" className={classes.gridStyle1}>
            <Grid
              item
              md={5}
              xs={12}
              sm={12}
              xl={5}
              style={{ textAlign: "start" }}
            >
              <img
                src={"ui-assets/images/building-an-enlightenment.svg"}
                alt={"bg"}
                width={"100%"}
                height={"100%"}
              />
            </Grid>
            <Grid
              item
              md={7}
              xs={12}
              sm={12}
              xl={7}
              className={classes.division2}
            >
              <div>
                <Typography className={classes.header2}>
                  Building an enlightenment trading community
                </Typography>
                <p className={classes.paragraph}>
                  We are committed to building an Enlighted Community of
                  investors and traders. With the objective of enhancing the
                  trading skills of investors and also to make investors and
                  traders to understand various aspects of risk management in
                  leveraged trading we are offering a complementary session of
                  education and learning on CFD trading. If you are a beginner,
                  we strong advise you to register yourself for the
                  complementary session
                </p>
                <Button className={classes.tradeBtn}>Register Here</Button>
              </div>
            </Grid>
          </Grid>
          <div className={classes.offeringContainer}>
            <Grid container className={classes.gridStyle2}>
              <Grid
                item
                md={7}
                xs={12}
                sm={12}
                xl={7}
                className={classes.division3}
              >
                <div>
                  <Typography className={classes.header}>
                    Offering the experience of Metatrader 5
                  </Typography>
                  <p className={classes.paragraph1}>
                    The powerful MetaTrader 5 trading platform provides advanced
                    technical facilities for successful trading on various
                    financial markets, including Forex, exchanges and futures
                    markets. With the all the exceptional technical analysis
                    tools available in MetaTrader 5 you can be prepared for any
                    market change! The MetaTrader 5 Web platform allows you to
                    start trading on the Forex, exchange and futures markets
                    from any browser and operating system. In addition to high
                    versatility, the web trading platform provides maximum data
                    protection, while all transmitted information being securely
                    encrypted. MetaTrader 5 Mobile also supports the One Click
                    Trading option, which allows sending trade orders straight
                    from the price chart or from the Market Depth window. The
                    mobile version provides everything needed to perform trading
                    operations, send pending orders, as well as to set
                    protective Stop Loss and Take Profit levels.
                  </p>
                </div>
              </Grid>
              <Grid
                item
                md={5}
                xs={12}
                sm={12}
                xl={5}
                className={classes.offeringBg}
              />
            </Grid>
          </div>
          <Grid container className={classes.traderContainer}>
            <Typography className={"header"}>
              Meet with us and your fellow traders
            </Typography>
            <SwiperComp traders={traders} />
          </Grid>
          <Grid container className={classes.tradeContainer}>
            <Grid item md={4} xs={12}>
              <Card className={classes.card}>
                <CardHeader
                  title={
                    <Typography className={classes.cardHeader}>
                      Get trading ideas
                    </Typography>
                  }
                />
                <CardActions>
                  <Typography className={classes.cardSub}>
                    Explore <span>&#x2192;</span>
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
            <Grid item md={8} xs={12}>
              <Typography className={classes.joiningheader}>
                Join us and start making a profit
              </Typography>
              <Grid container style={{ margin: "100px 0 0 16px" }}>
                <Grid item md={6} xs={12}>
                  <Card className={classes.card}>
                    <CardHeader
                      title={
                        <Typography className={classes.cardHeader}>
                          Tune in to our educational webinars
                        </Typography>
                      }
                    />
                    <CardActions>
                      <Typography className={classes.cardSub}>
                        Explore <span>&#x2192;</span>
                      </Typography>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Card className={classes.card}>
                    <CardHeader
                      title={
                        <Typography className={classes.cardHeader}>
                          Trade with a multi award winning broker
                        </Typography>
                      }
                    />
                    <CardActions>
                      <Typography className={classes.cardSub}>
                        Explore <span>&#x2192;</span>
                      </Typography>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container style={{ padding: "50px" }}>
            <Grid item md={6} xs={12}>
              <img
                src={"ui-assets/images/access-trading-asset.svg"}
                alt="assets"
                width={"100%"}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div>
                <Typography className={classes.header2}>
                  Access trading in one tap
                </Typography>
                <Grid container justifyContent="space-between">
                  <Button
                    variant="outlined"
                    className={classes.access_btn}
                    startIcon={
                      <img
                        src={"ui-assets/images/playstore-icon.png"}
                        alt="playstore"
                      />
                    }
                  >
                    <div className="labeL">
                      <span className={"firstText"}>Get It On </span>
                      <span className={"secondText"}>Google Play</span>
                    </div>
                  </Button>
                  <Button
                    variant="outlined"
                    className={classes.access_btn}
                    startIcon={
                      <img
                        src={"ui-assets/images/appstore.png"}
                        alt="playstore"
                      />
                    }
                  >
                    <div className="labeL">
                      <span className={"firstText"}>Get It On </span>
                      <span className={"secondText"}>App Store</span>
                    </div>
                  </Button>
                </Grid>
              </div>
            </Grid>
          </Grid>
          <footer>
            <Grid container alignItems="center" className={classes.footer}>
              <Grid item md={8} xs={12}>
                <Grid container spacing={2}>
                  {footerLinks.map((item, index) => {
                    return (
                      <Grid item md={2} xs={5} key={index}>
                        <Link
                          href={item.route}
                          underline="hover"
                          className={classes.hyperlink}
                        >
                          {item.name}
                        </Link>
                        <br />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
              <Grid item md={4} xs={12}>
                <Typography className={classes.footerHeader}>
                  Follow Us
                </Typography>
                <Grid container>
                  {footerSocialLinks.map((item, index) => {
                    return (
                      <div className={classes.footer_socialicon}>
                        <img
                          src={item.img}
                          alt={item.name}
                          key={index}
                          className={classes.image}
                        />
                      </div>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </footer>
        </Hidden>
        <Hidden only={["lg", "md", "xl"]}>
          <Grid container className={classes.mobGridStyle}>
            <Grid
              item
              md={5}
              xs={12}
              sm={12}
              xl={5}
              className={classes.topbgImage}
            >
              <div style={{ width: "80%" }}>
                <Typography className={classes.header}>
                  World-class trading experience at your fingertips
                </Typography>
                <Button className={classes.tradeBtn}>Trade With Us</Button>
              </div>
            </Grid>
            <Grid
              item
              md={7}
              xs={12}
              sm={12}
              xl={7}
              style={{ textAlign: "end" }}
            >
              <img
                src={"ui-assets/images/dashboard-main.svg"}
                alt={"bg"}
                width={"100%"}
                height={"100%"}
              />
            </Grid>
          </Grid>
        </Hidden>
      </div>
    );
  }
}
const mapStateToProps = ({ screenConfiguration = {} }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { dashboard } = preparedFinalObject;
  return { dashboard };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Dashboard));
