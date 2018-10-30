import React, { Component } from 'react'
import PortofolioList from '../portofolios/PortofolioList'
// import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        const { portofolios, auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m12">
                        <PortofolioList portofolios={portofolios} />
                    </div>
                    {/* <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div> */}
                </div>
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
        { collection: 'portofolios', orderBy: [['createdAt', 'desc']] }
    ])
)(Dashboard)