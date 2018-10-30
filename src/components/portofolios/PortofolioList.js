import React from 'react'
import PortofolioSummary from './PortofolioSummary'
import { Link } from 'react-router-dom'

const PortofolioList = ({portofolios}) => {
    return (
        <div className="portofolio-list section row">
            { portofolios && portofolios.map(portofolio => {
                return (
                    <Link className="col s6" to={'/portofolio/' + portofolio.id} key={portofolio.id}>
                        <PortofolioSummary portofolio={portofolio} />
                    </Link>
                )
            })}
        </div>
    )
}

export default PortofolioList