import React from "react";

function SkillSet() {
    return (
        <div id="skillset" className="skillset bg__metallic py-5">
            <div className="skillset-container container-fluid">
                <div className="row">

                    <div className="col-12 col-xl-3 font-weight-bold">Skillsets</div>
                    
                    <div className="skillset-skills-container col-12 col-xl-9">
                        
                        <div className="skillset-skill col-12 d-flex p-0">
                            <div className="col-4 col-xl-3 skillset-type font-weight-bold text-left">Languages / Frameworks</div>
                            <div className="col-8 col-xl-9 skillset-value font-italic text-left">
                                JavaScript, Angular(2, 7, 8), ReactJS, React-Redux, AngularJS,
                                HTML, CSS.
                            </div>
                        </div>

                        <div className="skillset-skill col-12 d-flex p-0">
                            <div className="col-4 col-xl-3 skillset-type font-weight-bold text-left">Project Tracking</div>
                            <div className="col-8 col-xl-9 skillset-value font-italic text-left">Jira</div>
                        </div>

                        <div className="skillset-skill col-12 d-flex p-0">
                            <div className="col-4 col-xl-3 skillset-type font-weight-bold text-left">Code Versioning</div>
                            <div className="col-8 col-xl-9 skillset-value font-italic text-left">Git</div>
                        </div>

                        <div className="skillset-skill col-12 d-flex p-0">
                            <div className="col-4 col-xl-3 skillset-type font-weight-bold text-left">Mobile App Frameworks</div>
                            <div className="col-8 col-xl-9 skillset-value font-italic text-left">Ionic, React Native (Beginner, Self-taught)</div>
                        </div>

                        <div className="skillset-skill col-12 d-flex p-0">
                            <div className="col-4 col-xl-3 skillset-type font-weight-bold text-left">Editor</div>
                            <div className="col-8 col-xl-9 skillset-value font-italic text-left">VS Code, Atom</div>
                        </div>

                        <div className="skillset-skill col-12 d-flex p-0">
                            <div className="col-4 col-xl-3 skillset-type font-weight-bold text-left">Data Visualization</div>
                            <div className="col-8 col-xl-9 skillset-value font-italic text-left">Highcharts</div>
                        </div>

                        <div className="skillset-skill col-12 d-flex p-0">
                            <div className="col-4 col-xl-3 skillset-type font-weight-bold text-left">Templating Engine</div>
                            <div className="col-8 col-xl-9 skillset-value font-italic text-left">Handlebar</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillSet;
