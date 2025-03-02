import React, { useEffect, useState } from 'react'

const Counters = () => {
    const [count, setCount] = useState(0);
    const [hasCounted, setHasCounted] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const offset = document.getElementById('infinity').offsetTop;
  
        if (window.scrollY > offset - 1000 && !hasCounted) {
          setHasCounted(true); // Mark as counted, prevent counting again
  
          // Start counting to infinity
          const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
          }, 1000); // Increment count every second
  
          return () => clearInterval(interval); // Clear interval on component unmount
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll); // Clean up
      };
    }, [hasCounted]);
  
  return (
    <section className="site-section section-counters text-center">
        <div className="container">
            <div className="row">
                {/* <!-- <div className="col-sm-6 col-xs-12">
                    <p className="counter start" data-to="10" data-speed="2000">0</p>
                    <h4>Years Experience</h4>
                </div> -->
                <!-- <div className="col-sm-4 col-xs-12">
                    <p className="counter start" data-to="120" data-speed="2000">0</p>       
                    <h4>Projects Delivered</h4>      
                </div> --> */}
                <div className="col-sm-12 col-xs-12">
                    {/* <p id="infinity" className="counter" data-from="0" data-to="1" data-speed="1000">0</p> */}
                    <p id="infinity" className="counter" data-from="0" data-to="1" data-speed="1000">                        
                        {count}
                    </p>
                    <h4>Seconds on this site!<br/>What are you waiting for?</h4>
                </div>
            </div>
        </div>
    {/* <!-- /.section-counters --> */}
    </section>
  )
}

export default Counters
