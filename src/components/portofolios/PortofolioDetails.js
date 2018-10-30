import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const PortofolioDetails = (props) => {
    const { portofolio, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    if (portofolio) {
        return (
            <div className="container section portofolio-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{portofolio.title}</span>
                        <p>{portofolio.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Type: {portofolio.type}</div>
                        <div>URL: {portofolio.url}</div>
                        <div><img width={100} height={100} alt="" src={portofolio.image} /></div>
                        <div>{moment(portofolio.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading portofolio...</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id;
    const portofolios = state.firestore.data.portofolios;
    const portofolio = portofolios ? portofolios[id] : null
    return {
        portofolio: portofolio,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'portofolios'
    }])
)(PortofolioDetails)