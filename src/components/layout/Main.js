import React, { Component } from 'react'
import PortofolioList from '../portofolios/PortofolioList'
// import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect, Switch, Route } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import Dashboard from '../dashboard/Dashboard'
import PortofolioDetails from '../portofolios/PortofolioDetails'
import CreatePortofolio from '../portofolios/CreatePortofolio'
import UnAuth from '../auth/UnAuth'

class Main extends Component {
    render() {
        const { portofolios, auth } = this.props;
        if (!auth.uid) {return <Redirect to='/signin' />};
        return (
            <div className="App">
                <Navbar />
                <Switch>
                    {/* <Route path='/' component={Dashboard} /> */}
                    <Route exact path='/portofolio/:id' component={PortofolioDetails} />
                    <Route path='/create' component={CreatePortofolio} />
                    <Route path='/not-auth' component={UnAuth} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        portofolios: state.firestore.ordered.portofolios,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'portofolios' }
    ])
)(Main)