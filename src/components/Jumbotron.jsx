import '../styles/Jumbotron.css'
import imgJumbo from '../imgs/jumboImg.png'

export function Jumbotron () {
    return (
        <div className="bkJtron">
            <div className="Jumbotron">
                <img src={imgJumbo} alt="" />
                <div className="JmboTxt">
                    <h3>Mabel Zoraida Ariza Perez</h3>
                    <span>Psicologa</span>
                </div>
            </div>
        </div>
    )
}