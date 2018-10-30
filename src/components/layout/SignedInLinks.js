import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <div className="nav-wrapper" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <NavLink to='/' style={{marginRight: 10}} className="btn btn-floating green lighten-1">{props.profile.initials}</NavLink>
            <h5 style={{flex: 1, margin: 0}}><NavLink to='/'>{props.profile.firstName} {props.profile.lastName}</NavLink></h5>
            <ul className="hide-on-med-and-down">
                <li><NavLink to='/create'><i className="material-icons">control_point</i></NavLink></li>
                <li><a href="#" onClick={props.signOut}>Log Out</a></li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)