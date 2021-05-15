import React from 'react';

function Experience() {
    return (
        <div id="experience" className="experience bg__metallic">
            <div className="experience-container container-fluid py-5">
                <div className="row">
                    <div className="experience-label col-12 col-xl-3 font-weight-bold">
                        Experience
                    </div>

                    <div className="experience-section-container col-12 col-xl-9 text-left">
                        
                        <div className="experience-company-container pb-3">
                            <h2 className="experience-company-name">Deloitte USI</h2>
                            <p className="experience-company-duration font-italic">April 2019 - Present</p>
                            <div className="experience-company-role"><span className="font-weight-bold">Position - </span> Consultant</div>
                        </div>

                        <div className="experience-company-container py-3">
                            <h2 className="experience-company-name">R Systems</h2>
                            <p className="experience-company-duration font-italic">December 2018 - March 2019</p>
                            <div className="experience-company-role"><span className="font-weight-bold">Position - </span> Senior Software Engineer</div>
                        </div>

                        <div className="experience-company-container py-3">
                            <h2 className="experience-company-name">Cognizant Technology Solutions</h2>
                            <p className="experience-company-duration font-italic">May 2016 - December 2018</p>
                            <div className="experience-company-role"><span className="font-weight-bold">Position - </span> Associate</div>
                        </div>

                        <div className="experience-company-container py-3">
                            <h2 className="experience-company-name">DMI Innovations India Pvt Ltd </h2>
                            <p className="experience-company-duration font-italic">July 2015 - May 2016</p>
                            <div className="experience-company-role"><span className="font-weight-bold">Position - </span> Software Engineer</div>
                        </div>

                        <div className="experience-company-container py-3">
                            <h2 className="experience-company-name">Sapient India(3rd party payroll of Magna Infotech)</h2>
                            <p className="experience-company-duration font-italic">October 2014 - July 2015</p>
                            <div className="experience-company-role"><span className="font-weight-bold">Position - </span> Software Engineer</div>
                        </div>

                        <div className="experience-company-container py-3">
                            <h2 className="experience-company-name">Basware Corporation</h2>
                            <p className="experience-company-duration font-italic">September 2013 - August 2014</p>
                            <div className="experience-company-role"><span className="font-weight-bold">Position - </span> Associate Support Consultant</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;