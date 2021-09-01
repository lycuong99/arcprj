import React from 'react';
import { Grid, Hidden, makeStyles, Typography, useMediaQuery, useTheme, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import ButtonArrow from './ui/ButtonArrow';
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";
const useStyles = makeStyles(theme => ({
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange
    },
    subtitle: {
        marginBottom: "1em"
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: "10em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        }
    },
    learnBtn:
    {
        ...theme.typography.learnButton,
        height: 35,
        fontSize: "0.7rem",
        padding: 5,
        [theme.breakpoints.down("sm")]:
        {
            marginBottom: "2em"
        }
    },
}));

export default function Services(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <Grid container direction="column">
            <Grid item
                style={{
                    marginTop: matchesSM ? "1em" : "2em",
                    marginLeft: matchesSM ? 0 : "5em"
                }}>
                <Typography variant="h2" gutterBottom
                    align={matchesSM ? "center" : undefined}>
                    Services
                </Typography>
            </Grid>
            <Grid item>{/* ------- IOS/Android Block ---------*/}
                <Grid container direction="row" className={classes.serviceContainer}
                    style={{ marginTop: "5em" }} justify={matchesSM ? "center" : "flex-end"}>
                    <Grid item style={{
                        textAlign: matchesSM ? "center" : undefined,
                        width: matchesSM ? undefined : "35em"
                    }}>
                        <Typography variant="h4">IOS/Android App Development</Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>Extend Functionality. Extend Access. Increase Engagement.</Typography>
                        <Typography variant="subtitle1">Integrate you web experience or create a standalone app{matchesSM ? null : <br />}with either mobile platform.</Typography>
                        <Button variant="outlined" className={classes.learnBtn} component={Link} to="/mobileapp" onClick={() => { props.setValue(1); props.setSelectedIndex(2); }}>
                            <span style={{ marginRight: 10 }} >Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item style={{ marginRight: matchesSM ? 0 : "5em", }}>
                        <img className={classes.icon} alt="mobile phone icon" src={mobileIcon} width="250em" />
                    </Grid>
                </Grid>
            </Grid>


            <Grid item>{/* ------- Services Block ---------*/}
                <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : undefined}>
                    <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}>
                        <Typography variant="h4">Custom Software Development</Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>Save Energy. Save Time. Save Money</Typography>
                        <Typography variant="subtitle1">Complete digital solutions, from investigation to {" "}<span className={classes.specialText}>celebration.</span></Typography>
                        <Button variant="outlined" className={classes.learnBtn} component={Link} to="/customsoftware" onClick={() => { props.setValue(1); props.setSelectedIndex(1); }}>
                            <span style={{ marginRight: 10 }}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt="custom software icon" src={customSoftwareIcon} />
                    </Grid>
                </Grid>
            </Grid>



            <Grid item>{/* ------- Website Block ---------*/}
                <Grid container direction="row" className={classes.serviceContainer}
                    style={{ marginBottom: "5em" }}
                    justify={matchesSM ? "center" : "flex-end"}>
                    <Grid item style={{
                        textAlign: matchesSM ? "center" : undefined,
                        width: matchesSM ? undefined : "35em"
                    }}>
                        <Typography variant="h4">Website Development</Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>Reach More. Discover More. Sell More.</Typography>
                        <Typography variant="subtitle1">Optimized for Search Engines, built for speed.</Typography>
                        <Button variant="outlined" className={classes.learnBtn}
                            component={Link} to="/website"
                            onClick={() => { props.setValue(1); props.setSelectedIndex(2); }}>
                            <span style={{ marginRight: 10 }}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item style={{ marginRight: matchesSM ? 0 : "5em", }}>
                        <img className={classes.icon} alt="website icon" src={websiteIcon} width="250em" />
                    </Grid>
                </Grid>
            </Grid>

        </Grid >
    );
}