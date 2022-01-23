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
    var button = darkmode? 'button-dark':'button-light'
    var inputboxtext = darkmode?'input-text-dark':'input-text-light'

    const handlesubmit =(event)=>
    {
        event.preventDefault();
        var formempty = true;
        email=='' || name==''||msg==''||subject==''?alert('Please complete the form first'):(formempty = false)
        if(!formempty)
        {
            setEmail('')
            alert('Message Sent')
            setName('')
            setMsg('')
            setSubject('')

        }
    }
    return (
        <div  >
            <div className={'tagtop-contact ' + htmltagdesign}>
                <div >{"<html>"}</div>
                <div className='htmltagpadding'>{"<body>"}</div>
            </div>
            <div className='animate' >

                <div className='leftmargin contactpage paddingleft'>
                    <div className={heading}>
                        Contact me
                    </div>
                    <div className={paragraph}>
                        I'm interested in Full-Time as well as freelance opportunities.
                        However, if you have other request or question, dont hesitate to use the form.
                    </div>
                    <div className={form}>
                        <form className='form-grid' onSubmit={handlesubmit}>
                            <div >
                                <input className={inputboxtext+' form-input-margin form-input-firstline'} placeholder='Name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
                                <input className={inputboxtext+' form-input-margin form-input-firstline'} placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />

                            </div>
                            <div>
                                <input className={inputboxtext+' form-input-margin form-input-otherline'} placeholder='Subject' type='text' value={subject} onChange={(e) => setSubject(e.target.value)} />

                            </div>
                            <div>
                                <textarea className={inputboxtext+' form-input-margin form-input-otherline'} placeholder='Message'
                                    value={msg} onChange={(e) => setMsg(e.target.value)} style={{ height: "200px",padding:'20px' }} />

                            </div>
                            <button type='submit' className={button} >Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={htmltagdesign+" tagbottom-contact"} >
                <div className='htmltagpadding'>{"</body>"}</div>
                <div >{"</html>"}</div>
            </div>
        </div>
    )
}

export default Contact
