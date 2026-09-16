import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });
 
    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        const SERVICE_ID = 'service_nr04c4p';
        const TEMPLATE_ID = 'template_bit0tq5';
        const PUBLIC_KEY = 'rknoE7OrRlfNbafKG';

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(
                (result) => {
                    setLoading(false);
                    setStatus({
                        type: 'success',
                        message: "Message sent successfully! I'll get back to you soon.",
                    });
                    formRef.current.reset(); // Clear input fields
                },
                (error) => {
                    setLoading(false);
                    console.error('EmailJS Error:', error);
                    setStatus({
                        type: 'error',
                        message: 'Failed to send message. Please try again later.',
                    });
                }
            );
    };
    return (


        <div className="contacts-section h-100">
            <div className="d-flex justify-content-center pt-5  text-white">
                Explore my,
            </div>
            <div className="container d-flex justify-content-center text-white">
                <h2>Contacts</h2>
            </div>
            <div className="container contacts-section-inside">
                <div className="row d-flex align-items-center row-home" >
                    <div className="col-md-6">
                        <div className="container">
                            <h2 className="text-white">ABOUT ME</h2>
                            <hr className="about-me-line bg-white" />
                            <p className="text-white">
                                I am a Computer Science graduate from Tshwane University of Technology, with a strong foundation across various areas of Information Technology,
                                including Software Development, Systems Analysis, Databases, Data Science and Business analysis
                                . I am currently pursuing an Advanced Diploma in Computer Science to further strengthen my technical knowledge and professional skills.
                                <br />
                                <br />
                                I am passionate about technology, problem-solving, and continuous learning.
                                As an aspiring IT professional, I am eager to learn from industry experts, contribute to innovative projects,
                                and grow my expertise while delivering meaningful solutions that create real business value.
                            </p>
                            <div className="list text-start">
                                <li className=" d-flex align-items-center text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
                                    </svg>
                                    <p className="pt-3 ms-3">2 years experience in the IT Industry</p>
                                </li>
                                <li className="d-flex align-items-center text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
                                    </svg>
                                    <p className="pt-3 ms-3">Computer Science Graduate</p>
                                </li>
                                <li className="d-flex align-items-center text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" fill="currentColor" class="bi bi-laptop-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                                    </svg>
                                    <p className="pt-3 ms-3">Passionate for Technology</p>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="container contact-form-section p-5 rounded-5 d-flex justify-content-center">
                            <div className="">
                                <h2 className="text-white">GET IN TOUCH</h2>
                            <hr className="about-me-line bg-white" />

                                <form ref={formRef} onSubmit={sendEmail} className="contact-form">
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            id="user_name"
                                            name="user_name"
                                            placeholder="Acme Corp / Jane Doe"
                                            required
                                        />
                                        <label htmlFor="user_name">Name / Company</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        
                                        <input
                                            type="email"
                                            id="user_email"
                                            name="user_email"
                                            style={{ width: '500px' }}
                                            className="form-control form-control-lg"
                                            required
                                            placeholder="recruiter@company.com"
                                        />
                                        <label htmlFor="user_email">Email Address</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className="form-control"
                                            required
                                            placeholder="Job Opportunity"
                                        />
                                        <label htmlFor="subject">Subject</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="form-control"
                                            rows="5"
                                            style={{ height: '100px' }}
                                            required
                                            placeholder="Hi, we loved your portfolio..."
                                        />
                                        <label htmlFor="message">Message</label>
                                    </div>

                                    <button type="submit" disabled={loading} className="get-in-touch-btn">
                                        {loading ? 'Sending...' : 'Send Message'}
                                    </button>

                                    {status.message && (
                                        <p className={`status-message ${status.type}`}>{status.message}</p>
                                    )}
                                </form>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
}

export default Contact;