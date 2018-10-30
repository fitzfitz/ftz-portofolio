import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPortofolio } from '../../store/actions/portofolioActions'
import { Redirect } from 'react-router-dom'
import UnAuth from '../auth/UnAuth';

class CreatePortofolio extends Component {
    state = {
        title: '',
        content: '',
        image: '',
        url: '',
        type: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createPortofolio(this.state);
        this.props.history.push('/');
    }
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return this.props.profile.level === 1 ? (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Add Portofolio</h5>
                    <div className="row">
                        <div className="input-field col s12">
                            {/* <i className="material-icons prefix">account_circle</i> */}
                            <input type="text" id='title' onChange={this.handleChange} />
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="input-field col s4">
                            <input type="text" id='image' onChange={this.handleChange} />
                            <label htmlFor="image">Image</label>
                        </div>
                        <div className="input-field col s4">
                            <input type="text" id='url' onChange={this.handleChange} />
                            <label htmlFor="url">URL</label>
                        </div>
                        <div className="input-field col s4">
                            <select id='type' defaultValue="1" onChange={this.handleChange}>
                                <option value="1">Web</option>
                                <option value="2">Mobile</option>
                            </select>
                            <label htmlFor="type">Type</label>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="content" className="materialize-textarea" onChange={this.handleChange} data-length="250"></textarea>
                            <label htmlFor="content">Content</label>
                        </div>
                        <div className="input-field  col s12">
                            <button className="btn purple lighten-1 btn waves-effect waves-light">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        ) : this.props.profile.level === 0 ? (
            <UnAuth />
        ) : (
            <div className="container section center">
                Please wait...
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPortofolio: (portofolio) => dispatch(createPortofolio(portofolio))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePortofolio)