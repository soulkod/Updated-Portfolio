const Experience = () => {
    return (
        <div className="experience-section h-100">
            <div className="experience-inside">


                <div className="container d-flex justify-content-center text-white  pt-5">
                    <h2>Experience</h2>
                </div>
                <div className="container d-flex justify-content-center text-white  pt-5">
                    <div className="current">
                        <div className="row">

                            {/* Timeline */}
                            <div className="col-2 position-relative d-flex justify-content-center">

                                {/* Vertical Line */}
                                <div
                                    className="position-absolute bg-white"
                                    style={{
                                        width: "4px",
                                        height: "100%",
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                    }}
                                ></div>

                                {/* Timeline Dots */}
                                
                                <div className="d-flex flex-column ">
                                    
                                        <div
                                            
                                            className="bg-white"
                                            style={{
                                                width: "35px",
                                                height: "35px",
                                                zIndex: 1,
                                            }}
                                        ></div>
                                    
                                </div>
                                

                            </div>
                            <div className=" col pt-0 experience-text">
                                <h3>Department of Justice  & CD  (IT Coordinator)</h3>
                                <i>July 2025 - Ongoing</i>
                                <p className="pt-3">
                                    Contributed to the Department of Justice & Constitutional Development as an IT Coordinator Intern, supporting both Systems Management and Business Analysis functions through a rotational internship program. Assisted in managing IT service operations by processing and documenting change requests, testing system updates before production deployment, monitoring service requests using Remedy, and providing technical support for the DOJ Online Portal. Also managed user access and credential administration within SAP, ensuring compliance with IT governance and operational standards.
                                    <br />
                                    <br />
                                    Currently working within the Business Analysis team, where I collaborate with stakeholders to elicit, analyse, and document business requirements through Business Requirement Specifications (BRS) and Functional Requirement Specifications (FRS), Participate in stakeholder workshops, support Agile sprint activities, and work closely with development teams to ensure business needs are accurately translated into technical solutions while contributing to project planning and continuous system improvements.
                                    <br />
                                    <br />
                                    <b>Key Technologies & Tools:</b>MS DevOps, Remedy, SAP, Agile (Scrum), Business Requirements Specification (BRS), Functional Requirements Specification (FRS), Microsoft Office Suite.

                                </p>
                                <ul className="list-inline">

                                    <li className="list-inline-item">

                                    </li>
                                    <li className="list-inline-item">

                                    </li>
                                    <li className="list-inline-item">

                                    </li>
                                </ul>
                            </div>
                            
                                </div>


                                <div className="row">
                            {/* Timeline */}
                            <div className="col-2 position-relative d-flex justify-content-center">

                                {/* Vertical Line */}
                                <div
                                    className="position-absolute bg-white"
                                    style={{
                                        width: "4px",
                                        height: "100%",
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                    }}
                                ></div>

                                {/* Timeline Dots */}
                                <div className="d-flex flex-column ">
                                    
                                        <div
                                            
                                            className="bg-white"
                                            style={{
                                                width: "35px",
                                                height: "35px",
                                                zIndex: 1,
                                            }}
                                        ></div>
                                    
                                </div>
                                </div>
                                <div className="col experience-text">
                                
                                <h3>Department of Home Affairs (Full Stack Web Developer) </h3>
                                <i>Sep 2024 - June 2025</i>
                                <p className="pt-3">
                                    Participated in the design, development, and testing of the E-Exit System, a digital solution aimed at improving border management and exit processing. Developed and maintained application features using C# and the Blazor Framework, ensuring efficient, secure, and user-friendly functionality.
                                    <br />
                                    <br />
                                    Collaborated with cross-functional teams to gather requirements, implement system enhancements, and resolve technical issues. Contributed to the development and integration of the BRS (Business Rules System) to automate business processes, validate data, and enforce regulatory requirements. Assisted with database operations, system testing, debugging, documentation, and deployment activities while following software development best practices.
                                    <br />
                                    <br />
                                    <b>Key Technologies:</b> C#, Blazor, .NET, SQL, Business Rules System (BRS), Git, Agile Development Methodologies.
                                </p>
                                <ul className="list-inline">

                                    <li className="list-inline-item">

                                    </li>
                                    <li className="list-inline-item">

                                    </li>
                                    <li className="list-inline-item">

                                    </li>
                                </ul>
                                
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
}

            export default Experience;