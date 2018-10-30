import React from 'react'
// import { Link } from 'react-router-dom'

// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

// const styles = theme => ({
//     layout: {
//         width: 'auto',
//         marginLeft: theme.spacing.unit * 3,
//         marginRight: theme.spacing.unit * 3,
//         [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
//             width: 1100,
//             marginLeft: 'auto',
//             marginRight: 'auto',
//         },
//     },
//     flex: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginLeft: -12,
//         marginRight: 20,
//     },
// });
const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

    return (
        // <AppBar position="static">
        //     <div className={classes.layout}>
        //         <Toolbar>
        //             <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
        //                 <MenuIcon />
        //             </IconButton>
        //             <Typography variant="title" color="inherit" className={classes.flex}>
        //                 News
        //             </Typography>
        //             <Button color="inherit">Login</Button>
        //         </Toolbar>
        //     </div>
        // </AppBar>
        <nav className="nav-wrapper purple darken-3">
            <div className="container">
            {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

// export default withStyles(styles)(connect(mapStateToProps)(Navbar));
export default connect(mapStateToProps)(Navbar)