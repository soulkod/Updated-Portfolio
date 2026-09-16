const Projects = () => {
    return (
        <div className="project-section h-100" id="projects">
            <div className="d-flex justify-content-center  pt-5 text-white">
                Explore my,
            </div>
            <div className="container d-flex justify-content-center text-white">
                <h2>Project Experience</h2>
            </div>
            <div className="rekakgona-section h-100">
                <div className="row d-flex align-items-center rekakgona-section mt-md-5">
                    <div className="col-md-6">
                        <div className="container d-flex justify-content-center align-items-center">
                            <img src={require('./../assets/logo-rmv.png')} alt="Profile" className="img-fluid rekakgona-logo w-75 h-75" style={{ maxWidth: '250px' }} />

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="p-2 text-white rekakagona-text">
                            <h3 className="pb-3 rekakgona-heading" >Rekakgona Group</h3>
                            <p>The company is 100% black owned with a level 1 BBBEE, led by young strategic minds who were born and raised in the rural areas of Limpopo province however we are currently based in the capital city of South Africa. It is a static website used to advertise the company’s products from a friendly user interface. It is developed using HTML, JavaScript, CSS and Bootstrap.
                                <br />
                                <p className="pt-3">  <a className="rekakgona-link" href="www.rekakgonagroup.co.za">Link to the project</a> | www.rekakgonagroup.co.za
                                </p>

                            </p>
                            <ul className="list-inline">

                                <li className="list-inline-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" fill="currentColor" class="bi bi-filetype-html" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z" />
                                    </svg>
                                </li>
                                <li className="list-inline-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" fill="currentColor" class="bi bi-javascript" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM9.053 7.596v3.127l-.007 1.752q0 .498-.186.752t-.556.263q-.342 0-.528-.234-.185-.234-.185-.684v-.175H6.37v.185q0 .665.253 1.113.255.45.703.674.44.225 1.016.225.88 0 1.406-.498.527-.498.527-1.485l.007-1.752V7.596zm3.808-.108q-.585 0-1.006.244a1.67 1.67 0 0 0-.634.674 2.1 2.1 0 0 0-.225.996q0 .753.293 1.182.303.42.967.732l.469.215q.438.186.625.43.185.244.185.635 0 .478-.166.703-.156.224-.527.224-.361.001-.547-.244-.186-.243-.205-.752h-1.162q.02.996.498 1.524.479.527 1.386.527.909 0 1.417-.518.507-.517.507-1.484 0-.81-.332-1.289t-1.045-.79l-.449-.196q-.39-.166-.556-.381-.166-.214-.166-.576 0-.4.165-.596.177-.195.508-.195.361 0 .508.234.156.234.176.703h1.123q-.03-.976-.498-1.484-.47-.518-1.309-.518" />
                                    </svg>
                                </li>
                                <li className="list-inline-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" fill="currentColor" class="bi bi-css" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V0zM4.59 7.498q-.908 0-1.455.508-.547.507-.547 1.484v3.106q0 .986.527 1.484t1.406.498q.576 0 1.016-.224.45-.225.703-.674.255-.45.254-1.114v-.185h-1.22v.176q0 .449-.186.683t-.527.235q-.372-.01-.557-.264-.186-.255-.186-.752V9.686q0-.547.166-.811.177-.264.577-.264.321 0 .517.225.195.224.195.693v.205h1.23V9.52q0-.674-.243-1.124a1.55 1.55 0 0 0-.664-.673q-.42-.225-1.006-.225m4.214-.01q-.586 0-1.006.244a1.67 1.67 0 0 0-.635.674 2.1 2.1 0 0 0-.225.996q0 .753.293 1.182.304.42.967.732l.469.215q.44.186.625.43.186.244.186.635 0 .478-.166.703-.157.224-.528.224-.36 0-.547-.244-.185-.243-.205-.752H6.87q.02.996.498 1.524.479.527 1.387.527t1.416-.518.508-1.484q0-.81-.332-1.289-.333-.479-1.045-.79l-.45-.196q-.39-.166-.556-.381-.165-.214-.166-.576 0-.4.166-.596.175-.195.508-.195.36 0 .508.234.156.234.175.703h1.123q-.03-.976-.498-1.484-.468-.518-1.308-.518m4.057 0q-.585 0-1.006.244a1.67 1.67 0 0 0-.634.674 2.1 2.1 0 0 0-.225.996q0 .753.293 1.182.303.42.967.732l.469.215q.438.186.625.43.185.244.185.635 0 .478-.166.703-.156.224-.527.224-.361.001-.547-.244-.186-.243-.205-.752h-1.162q.02.996.498 1.524.479.527 1.386.527.909 0 1.417-.518.507-.517.507-1.484 0-.81-.332-1.289t-1.045-.79l-.449-.196q-.39-.166-.556-.381-.166-.214-.166-.576 0-.4.165-.596.177-.195.508-.195.361 0 .508.234.156.234.176.703h1.123q-.03-.976-.498-1.484-.47-.518-1.309-.518" />
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>





                <div className="row d-flex align-items-center rekakgona-section mt-md-5">
                    <div className="col-md-6">
                        <div className="container d-flex justify-content-center align-items-center">
                            <img src={require('./../assets/logo.png')} alt="Profile" className="img-fluid w-75 h-75" style={{ maxWidth: '250px' }} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className=" p-2 text-white rekakagona-text">
                            <h3 className="pb-1" >Stocka</h3>
                            <p>Stocka is an AI-powered inventory management system designed for small businesses. It helps owners track stock, automate inventory management, and receive intelligent insights and recommendations to improve business decisions. By reducing manual stock management and eliminating the need for an expensive POS system, Stocka provides an affordable, mobile-first solution that simplifies operations and helps businesses manage inventory more efficiently.

                                <br />
                                <p className="pt-3">  <a className="rekakgona-link" href="www.rekakgonagroup.co.za">Link to the project</a>
                                </p>

                            </p>
                            <ul className="list-inline">

                                <li className="list-inline-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45px" height="45px" viewBox="0 0 48 48">
                                        <polygon fill="#40c4ff" points="26,4 6,24 12,30 38,4"></polygon><polygon fill="#40c4ff" points="38,22 27,33 21,27 26,22"></polygon><rect width="8.485" height="8.485" x="16.757" y="28.757" fill="#03a9f4" transform="rotate(-45.001 21 33)"></rect><polygon fill="#01579b" points="38,44 26,44 21,39 27,33"></polygon><polygon fill="#084994" points="21,39 30,36 27,33"></polygon>
                                    </svg>
                                </li>
                                <li className="list-inline-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45px" height="45px" viewBox="0 0 48 48">
                                        <path fill="#1565c0" d="M10,12l3,25l-8.019-8.019c-1.189-1.189-1.508-2.996-0.796-4.52L10,12z"></path><path fill="#42a5f5" d="M27.319,6.319C26.474,5.474,25.329,5,24.135,5c-0.745,0-1.479,0.185-2.135,0.538L10,12v20.343 c0,1.061,0.421,2.078,1.172,2.828L13,37h22v-5l7-11L27.319,6.319z"></path><path fill="#1565c0" d="M10,12h21.343c1.061,0,2.078,0.421,2.828,1.172L42,21v16h-7L10,12z"></path><polygon fill="#85cbf8" points="35,37 13,37 19,43 35,43"></polygon>
                                    </svg>
                                </li>
                                <li className="list-inline-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45px" height="45px" viewBox="0 0 48 48">
                                        <path fill="#ffa000" d="M25.01,8.565c-0.386-0.753-1.466-0.755-1.848,0l-2.347,4.426L15.404,2.547 c-0.471-0.874-1.798-0.653-1.952,0.325L8.003,37.997L30.25,18.75L25.01,8.565z"></path><path fill="#f57f17" d="M25.795 22.604L20.815 12.992 8.003 37.997z"></path><path fill="#ffca28" d="M35.859,11.838c-0.13-0.802-1.115-1.12-1.69-0.544L8.003,38.002l14.479,7.614 c0.917,0.512,2.034,0.512,2.951,0.001L40,38.005L35.859,11.838z"></path>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center pb-4 ">
                    <button className=" view-projects-button " ><a href="https://github.com/soulkod" className='text-decoration-none text-reset'>View my projects.</a></button>
                </div>
            </div>


        </div>
    );
}

export default Projects;