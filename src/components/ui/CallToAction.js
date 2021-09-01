import { Button, Grid, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import ButtonArrow from './ButtonArrow';
import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
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
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "60em",
        width: "100%",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment: "inherit",
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize: "1.5rem",
        marginRight: "5em",
        marginLeft: "2em",
        [theme.breakpoints.down("sm")]: {
            marginRight: 0,
            marginLeft: 0,
        },
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    }
}));

export default function CallToAction(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container
            alignItems="center"
            className={classes.background}
            justify={matchesSM ? "center" : "space-between"}
            direction={matchesSM ? "column" : "row"}>
            <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : "inherit" }}>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h2">Simple Software.<br /> Revolutionary Result.</Typography>
                        <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>Take advantage of the 21st Century.</Typography>

                        <Grid container item justify={matchesSM ? "center" : undefined}>
                            <Button variant="outlined" className={classes.learnBtn}
                                component={Link} to="/revolution" onClick={() => { props.setValue(2) }}><span style={{ marginRight: 5 }} >Learn More</span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} /></Button>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
            <Grid item  >
                <Button variant="contained" className={classes.estimateButton} component={Link} to="/estimate" onClick={() => { props.setValue(5) }}>
                    Free Estimate
                </Button>
            </Grid>

        </Grid>
    );
}