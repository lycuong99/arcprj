import { Grid, IconButton, makeStyles, Typography, useTheme, useMediaQuery, Hidden } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import analytics from "../assets/analytics.svg";
import seo from "../assets/seo.svg";
import outreach from "../assets/outreach.svg";
import ecommerce from "../assets/ecommerce.svg";

import CallToAction from './ui/CallToAction';


const useStyles = makeStyles(theme => ({
    heading: {
        maxWidth: "40em"
    },
    arrowContainer: {
        marginTop: "0.5em",

    },
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",

        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em",

        }
    },
    paragraphContainer: {
        maxWidth: "30em"
    }
}));

export default function Website(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));



    return (<Grid container direction="column">
        <Grid item container direction="row" justify={matchesMD ? "center" : undefined} className={classes.rowContainer} style={{
            marginTop: matchesXS ? "1em" : "2em"
        }}>
            <Hidden mdDown>
                <Grid item className={classes.arrowContainer} style={{ marginLeft: "-3.5em", marginRight: "1em" }}>
                    <IconButton style={{ backgroundColor: "transparent" }} component={Link} to="/mobileapp" onClick={() => { props.setValue(1); props.setSelectedIndex(2) }}>
                        <img src={backArrow} alt="Back to Mobile App page" />
                    </IconButton>
                </Grid>
            </Hidden>
            <Grid item container direction="column" className={classes.heading} >
                <Grid item>
                    <Typography variant="h2" align={matchesMD ? "center" : "inherit"}>Website Development</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" paragraph align={matchesMD ? "center" : "inherit"}>Having a website is a necessity in today’s business world. They give you one central, public location to let people know who you are, what you do, and why you’re the best at it.</Typography>
                    <Typography variant="body1" paragraph align={matchesMD ? "center" : "inherit"}>From simply having your hours posted to having a full fledged online store, making yourself as accessible as possible to users online drives growth and enables you to reach new customers.</Typography>

                </Grid>
            </Grid>
            <Hidden mdDown>
                <Grid item className={classes.arrowContainer} component={Link} to="/services" onClick={() => { props.setValue(1); props.setSelectedIndex(0) }}>
                    <IconButton style={{ backgroundColor: "transparent" }}>
                        <img src={forwardArrow} alt="Forward to Services Page" />
                    </IconButton>
                </Grid>
            </Hidden>
        </Grid>

        <Grid item container
            direction={matchesSM ? "column" : "row"}
            className={classes.rowContainer} alignItems="center"
            style={{ marginTop: "15em", marginBottom: "15em" }}>
            <Grid item>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h4" gutterBottom align={matchesSM ? "center" : undefined}>Analysis</Typography>
                    </Grid>
                    <Grid item>
                        <img src={analytics} style={{ marginLeft: "-2.75em" }} alt="graph with magnifying glass revealing 1's and 0's" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.paragraphContainer}>
                <Typography variant="body1" align={matchesSM ? "center" : undefined}>
                    Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden patterns and trends in your business, empowering you to make smarter decisions with measurable effects.
                </Typography>
            </Grid>
        </Grid>

        <Grid item container direction={matchesSM ? "column" : "row"}
            className={classes.rowContainer} alignItems="center" justify="flex-end"
            style={{ marginBottom: "15em" }}>
            <Grid item>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h4" gutterBottom align="center">E-Commerce</Typography>
                    </Grid>
                    <Grid item>
                        <img src={ecommerce} alt="world outline made of dollar signs" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.paragraphContainer} style={{ marginLeft: matchesSM ? 0 : "1em" }}>
                <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                    It’s no secret that people like to shop online.
                </Typography>
                <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                    In 2017 over $2.3 trillion was spent in e-commerce, and it’s time for your slice of that pie.
                </Typography>
            </Grid>
        </Grid>

        <Grid item container direction={matchesSM ? "column" : "row"} className={classes.rowContainer} alignItems="center">
            <Grid item>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h4" gutterBottom align={matchesSM ? "center" : undefined}>Outreach</Typography>
                    </Grid>
                    <Grid item>
                        <img src={outreach} alt="megaphone" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.paragraphContainer} style={{ marginLeft: matchesSM ? 0 : "1em" }}>
                <Typography variant="body1" align={matchesSM ? "center" : undefined}>
                    Draw people in with a dazzling website. Showing off your products online is a great way to help customers decide what’s right for them before visiting in person.                </Typography>
            </Grid>
        </Grid>

        <Grid item container direction={matchesSM ? "column" : "row"} className={classes.rowContainer} alignItems="center" justify="flex-end"
            style={{ marginTop: "15em", marginBottom: "15em" }}>
            <Grid item>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h4" gutterBottom align="center">Search Engine<br />
                            Optimization</Typography>
                    </Grid>
                    <Grid item>
                        <img src={seo} style={{ marginLeft: "-2.75em" }} alt="website standing on winner's podium" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.paragraphContainer} style={{ marginLeft: matchesSM ? 0 : "1em" }}>
                <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                    How often have you ever been to the second page of Google results?</Typography>
                <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                    If you’re like us, probably never.</Typography>
                <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                    Customers don’t go there either, so we make sure your website is designed to end up on top.</Typography>
            </Grid>
        </Grid>

        <Grid item>{/* ------- Call To Action Block ---------*/}
            <CallToAction setValue={props.setValue} setSelectedIndex={props.setSelectedIndex} />
        </Grid>
    </Grid>);
}