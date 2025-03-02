import React from 'react'
import { portfolio } from '../data'

const Portfolio = () => {
    // const handleModalClick = (e) => {
    //   e.preventDefault();
    //   // The modal will be opened by Bootstrap's data-toggle and data-target
    //   // no need to handle the opening here, since this is handled by Bootstrap
    // };

  return (
    <section id="portfolio" className="site-section section-portfolio">
        <div className="container">
            <div className="text-center">
                <h3>My recent Works</h3>
                <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
            </div>
            <div className="row">
                {
                    portfolio.map((item) => (
                        <div className="col-md-4 col-xs-6" key={item.id}>
                            <div className="portfolio-item">
                                <img src={item.img} className="img-res" alt={item.alt} />
                                <div className="portfolio-item-info">
                                    <h4>{item.title}</h4>
                                    <button data-toggle="modal" data-target={item.data_target}>
                                        <span className="glyphicon glyphicon-eye-open" />
                                    </button>
                                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                                        <span className="glyphicon glyphicon-link" />
                                    </a>
                                </div>
                                {/* <!-- /.portfolio-item-info --> */}
                            </div>
                            {/* <!-- /.portfolio-item --> */}
                        </div>
                    ))
                }                
            </div>
        </div>
    {/* <!-- /.secton-portfolio --> */}
    </section>
  )
}

export default Portfolio


