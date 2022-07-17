import { useState } from 'react'
import './contact.css'
import { useForm, ValidationError } from '@formspree/react';

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
    var button = darkmode ? 'button-dark' : 'button-light'
    var inputboxtext = darkmode ? 'input-text-dark' : 'input-text-light'

    const [state, hSubmit] = useForm("mrgjwwej");

    const handleSubmit = (event) => {
        // event.preventDefault();
        var formempty = true;
        if(email == '' || name == '' || msg == '' || subject == '')
        { alert('Please complete the form first') 
            event.preventDefault();
        }
        else
        {
            formempty = false;
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
                        <form className='form-grid' action ="https://formspree.io/f/mrgjwwej" method = "POST" onSubmit={handleSubmit}>
                            <div >
                                <input name="name" className={inputboxtext+' form-input-margin form-input-firstline'} placeholder='Name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
                                <input name="email"className={inputboxtext+' form-input-margin form-input-firstline'} placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                
                                </div>
                                <div>
                                <input name="subject"className={inputboxtext+' form-input-margin form-input-otherline'} placeholder='Subject' type='text' value={subject} onChange={(e) => setSubject(e.target.value)} />
                                
                                </div>
                                <div>
                                <textarea name="message" className={inputboxtext+' form-input-margin form-input-otherline'} placeholder='Message'
                                value={msg} onChange={(e) => setMsg(e.target.value)} style={{ height: "200px",padding:'20px' }} />
                                
                            </div>
                            {/* <label htmlFor="name">
                                Name
                            </label>
                            <input id="name" name="name" className={inputboxtext + ' form-input-margin form-input-firstline'} placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                            <input id="subject" name="subject" className={inputboxtext + ' form-input-margin form-input-otherline'} placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                            <label htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className={inputboxtext+' form-input-margin form-input-firstline'} placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <textarea
                                id="message"
                                name="message"
                                className={inputboxtext + ' form-input-margin form-input-otherline'} placeholder='Message'
                                value={msg} onChange={(e) => setMsg(e.target.value)} style={{ height: "200px", padding: '20px' }}
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            /> */}
                            <button type='submit' className={button} >Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={htmltagdesign + " tagbottom-contact"} >
                <div className='htmltagpadding'>{"</body>"}</div>
                <div >{"</html>"}</div>
            </div>
        </div>
    )
}

export default Contact
