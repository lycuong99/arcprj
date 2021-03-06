import React from 'react';
import { Grid, Hidden, makeStyles } from "@material-ui/core";
import footerAdornment from "../../assets/Footer Adornment.svg";

import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    footer: {
        width: "100%",
        backgroundColor: theme.palette.common.blue,
        zIndex: 1302,
        position: "relative"
    },
    adornment: {
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "21em",
        },
        [theme.breakpoints.down("xs")]: {
            width: "15em",
        },
    },
    mainContainer: {
        position: "absolute"
    },
    link: {
        fontSize: "0.75rem",
        color: "white",
        fontFamily: "Arial",
        fontWeight: "bold",
        textDecoration: "none"
    },
    gridItem: {
        margin: "3em"
    },
    socialGrid: {
        position: "absolute",
        marginTop: "-6em",
        right: "1.5em",
        [theme.breakpoints.down("xs")]:
        {
            right: "0.5em",
        }

    },
    icon: {
        height: '4em',
        width: "4em",
        [theme.breakpoints.down("xs")]:
        {
            height: '2em',
            width: "2em",
        }
    }

}));

export default function Footer(props) {
    const classes = useStyles();
    const { value, setValue, selectedIndex, setSelectedIndex } = props;

    return (<footer className={classes.footer}>
        <Hidden mdDown>
            <Grid container className={classes.mainContainer} justify="center">
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} component={Link} to="/" onClick={() => { setValue(0); }}>Home</Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} component={Link} to="/services" onClick={() => { setValue(1); setSelectedIndex(0); }}>Services</Grid>
                        <Grid item className={classes.link} component={Link} to="/customsoftware" onClick={() => { setValue(1); setSelectedIndex(1); }}>Custom Software Development</Grid>
                        <Grid item className={classes.link} component={Link} to="/mobileapp" onClick={() => { setValue(1); setSelectedIndex(2); }}>IOS/Android App Development</Grid>
                        <Grid item className={classes.link} component={Link} to="/website" onClick={() => { setValue(1); setSelectedIndex(3); }}>Website Development</Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} component={Link} to="/revolution" onClick={() => { setValue(2); }}>The Revolution</Grid>
                        <Grid item className={classes.link} component={Link} to="/revolution" onClick={() => { setValue(2); }}>Vision</Grid>
                        <Grid item className={classes.link} component={Link} to="/revolution" onClick={() => { setValue(2); }}>Technology</Grid>
                        <Grid item className={classes.link} component={Link} to="/revolution" onClick={() => { setValue(2); }}>Process</Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} component={Link} to="/about" onClick={() => { setValue(3); }}>About Us</Grid>
                        <Grid item className={classes.link} component={Link} to="/about" onClick={() => { setValue(3); }}>History</Grid>
                        <Grid item className={classes.link} component={Link} to="/about" onClick={() => { setValue(3); }}>Team</Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem} >
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} component={Link} to="/contact" onClick={() => { setValue(4); }}>Contact Us</Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Hidden>

        <img alt="footer adornment"
            className={classes.adornment}
            src={footerAdornment} />

        <Grid container className={classes.socialGrid} justify="flex-end" spacing={2}>
            <Grid item component={"a"} href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img alt="facebook logo" className={classes.icon} src={facebook} />
            </Grid>
            <Grid item component={"a"} href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img alt="instagram logo" className={classes.icon} src={instagram} /></Grid>
            <Grid item component={"a"} href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img alt="twitter logo" className={classes.icon} src={twitter} /></Grid>
        </Grid>


    </footer>)
}