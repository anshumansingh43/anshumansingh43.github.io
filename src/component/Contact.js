import { useState } from 'react'
import './contact.css'

const Contact = ({ setPage, darkmode }) => {
    setPage('contact')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [msg, setMsg] = useState('');

    var htmltagdesign = darkmode ? 'htmltagdesign-dark ' : 'htmltagdesign-light '
    var heading = darkmode ? 'skillsandexp-dark contact-heading-font' : 'skillsandexp-light contact-heading-font'
    var paragraph = darkmode ? 'intro-paragraph-dark' : 'intro-paragraph-light'
    var form = darkmode ? 'form-dark' : 'form-light';

    return (
        <div >
            <div className={'tagtop ' + htmltagdesign}>
                <div >{"<html>"}</div>
                <div className='htmltagpadding'>{"<body>"}</div>
            </div>
            <div className='animate'>

                <div className='leftmargin contactpage paddingleft'>
                    <div className={heading}>
                        Contact me
                    </div>
                    <div className={paragraph}>
                        I'm interested in Full-Time as well as freelance opportunities.
                        However, if you have other request or question, dont use to hesitate to use the form.
                    </div>
                    <div className={form}>
                        <form className='form-grid'>
                            <div >
                                <input className='form-input-margin form-input-firstline' placeholder='Name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
                                <input className='form-input-margin form-input-firstline' placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />

                            </div>
                            <div>
                                <input className='form-input-margin form-input-otherline' placeholder='Subject' type='text' value={subject} onChange={(e) => setSubject(e.target.value)} />

                            </div>
                            <div>
                                <textarea className='form-input-margin form-input-otherline' placeholder='Message'
                                    value={msg} onChange={(e) => setMsg(e.target.value)} style={{ height: "200px" }} />
                            
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <div className={htmltagdesign} style={{ marginLeft: "400px", marginTop: "30px" }} >
                <div className='htmltagpadding'>{"</body>"}</div>
                <div >{"</html>"}</div>
            </div>
        </div>
    )
}

export default Contact
