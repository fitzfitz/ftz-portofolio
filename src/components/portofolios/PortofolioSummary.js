// import React from 'react'
// import moment from 'moment'

// const onPicLoad = (e) => {
//     console.log(e)
//     console.log('loaded')
// }
// const PortofolioSummary = ({portofolio}) => {
//     return portofolio ? (
//         <div className="card z-depth-1 portofolio-summary">
//             {/* <div className="card-content grey-text text-darken-3">
//                 <span className="card-title ">{portofolio.title}</span>
//                 <p>Type {portofolio.type}</p>
//                 <p>URL {portofolio.url}</p>
//                 <p><img onLoad={onPicLoad} width={100} height={100} alt="" src={`https://drive.google.com/uc?export=view&id=${portofolio.image}`} /></p>
//                 <p className="grey-text">{moment(portofolio.createdAt.toDate()).calendar()}</p>
//             </div> */}
//             <div className="card-image">
//                 <img onLoad={onPicLoad} alt="" src={`https://drive.google.com/uc?export=view&id=${portofolio.image}`} />
//                 <span className="card-title">{portofolio.title}</span>
//             </div>
//         </div>
//     ) : (
//         <div className="container center">
//             <p>Loading list...</p>
//         </div>
//     )
// }

// export default PortofolioSummary

import React, { Component } from 'react'
// import ReactPlaceholder from 'react-placeholder'
// import 'react-placeholder/lib/reactPlaceholder.css'
// import moment from 'moment'

export default class PortofolioSummary extends Component {
    state = {
        currentImage: this.props.portofolio.image,
        loading: true,
    }
    componentDidMount() {
        this.fetchImage(this.props.portofolio.image)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.image !== this.props.portofolio.image) {
            this.setState({ currentImage: nextProps.preview, loading: true }, () => {
                this.fetchImage(nextProps.image)
            })
        }
    }

    componentWillUnmount() {
        if (this.loadingImage) {
            this.loadingImage.onload = null
        }
    }

    fetchImage = src => {
        const image = new Image();
        image.onload = () => this.setState({ currentImage: this.loadingImage.src, loading: false });
        image.src = src;
        this.loadingImage = image;
    }

    style = loading => {
        return {
            transition: '1s filter linear',
            filter: `${loading ? 'blur(600px)' : ''}`,
        }
    }
    render() {
        // console.log(this.props)
        const { portofolio } = this.props;
        const { currentImage, loading } = this.state;
        return portofolio ? (
            <div className="card z-depth-1 portofolio-summary">
                {/* <div className="card-content grey-text text-darken-3">
                    <span className="card-title ">{portofolio.title}</span>
                    <p>Type {portofolio.type}</p>
                    <p>URL {portofolio.url}</p>
                    <p><img onLoad={onPicLoad} width={100} height={100} alt="" src={`https://drive.google.com/uc?export=view&id=${portofolio.image}`} /></p>
                    <p className="grey-text">{moment(portofolio.createdAt.toDate()).calendar()}</p>
                </div> */}
                <div className="card-image">
                    <img style={this.style(loading)} src={currentImage} alt="" />
                    <span style={this.style(loading)} className="card-title">{portofolio.title}</span>
                </div>
            </div>
        ) : (
            <div className="container center">
                <p>Loading list...</p>
            </div>
        )
    }
}
