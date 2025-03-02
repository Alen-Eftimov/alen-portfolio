import React from 'react'
const Service = () => {
  return (
    <section id="service" className="site-section section-services overlay text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>What i do</h3>
                        <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
                    </div>
                    <div className="col-sm-6">
                        <div className="service">
                            <img src="assets/img/front-end.svg" alt="Front End Developer" />
                            <h4>Front-end</h4>
                            <p>As a Front-end developer, I use technologies HTML5, CSS3, JavaScript and more advanced JavaScript frameworks such as React, React Native, Redux-toolkit, Vue and Angular. Also I use techniques working with Bootstrap and jQuery.</p>
                        </div>
                        {/* <!-- /.service --> */}
                    </div>
                    <div className="col-sm-6">
                        <div className="service">
                            <img src="assets/img/back-end.svg" alt="Back End Developer" />
                            <h4>Back-end</h4>
                            <p>As a Back-end developer, I use technologies Node.js as well databases MySQL, MongoDB and Mongoose. </p>
                        </div>
                        {/* <!-- /.service --> */}
                    </div>
                    {/* <!-- <div className="col-sm-4">
                        <div className="service">
                            <img src="assets/img/consultancy.svg" alt="Coding">
                            <h4>Consultancy</h4>
                            <p>As well as providing development services, I can also help you decide strategic roadmaps via consultancy services.</p>
                        </div>--><!-- /.service -->
                    <!--</div> --> */}
                </div>
            </div>
        {/* <!-- /.secton-services --> */}
        </section>
  )
}

export default Service
