import React, { useEffect, useState } from 'react'
import { handleScrollToTop } from '../easeInOutExpo';

const Footer = () => {

  const [year, setYear] = useState(0);

  useEffect(() => {
      // Get the current year
      const currentYear = new Date().getFullYear();
      setYear(currentYear);
  }, []);
  
  return (
    <footer id="colophon" className="site-footer">
        <div className="container">
            <div className="row">
                <div className="col-sm-4 col-xs-12">
                    <a className="icon linkedin-bg" href="https://www.linkedin.com/in/eftimov-alen"><i className="icon-linkedin"></i></a>
                    <a className="icon github-circled-bg" href="https://github.com/Alen-Eftimov"><i className="icon-github-circled"></i></a>
                    {/* <!-- <a className="icon github-bg" href="https://github.com/Alen-Eftimov"><i className="icon-github"></i></a> --> */}
                    <a className="icon xing-bg" href="https://www.xing.com/profile/Alen_Eftimov3/cv"><i className="icon-xing"></i></a>                    
                    {/* <!-- <a className="icon facebook-bg" href="#"><i className="icon-facebook"></i></a> -->                    
                    <!-- <a className="icon twitter-bg" href="#"><i className="icon-twitter"></i></a> -->
                    <!-- <a className="icon gplus-bg" href="#"><i className="icon-gplus"></i></a> --> */}
                </div>
                <div className="col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-3"><p className="copyright">&copy; Copyright {year} Alen Eftimov</p></div>
                <div className="col-sm-4 col-xs-3">
                    <div className="text-right page-scroll">
                        {/* <a className="icon icon-up-bg" href="#hero" onClick={handleClick}> */}
                        {/* <btn className="icon icon-up-bg" href="#hero" onClick={() => {
                            window.scroll({
                                top: 0,
                                behavior: 'smooth'
                            })
                          }}
                        > */}
                        <btn className="icon icon-up-bg" href="#hero" onClick={handleScrollToTop}>
                          <i className="icon-up" />
                        </btn>
                        {/* </a> */}
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
