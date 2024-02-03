import '../styles/Footer.css'

import icoPhone from '../imgs/iconPhone.png'
import icoMail from '../imgs/iconMail.png'

export function Footer () {
    return (
        <div className="footer">
            <div className="contact">
                <img src={icoPhone} alt="" />
                <span>+57 3124011701</span>
            </div>
            <div className="contact">
                <img src={icoMail} alt="" />
                <span>maariza1701@gmail.com</span>
            </div>
        </div>
    )
}