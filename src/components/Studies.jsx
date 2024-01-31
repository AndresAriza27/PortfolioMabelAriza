import iconDwl from '../imgs/iconDownload.png'

import '../styles/Studies.css'

export function Studies () {
    return (
        <div className="studies">
            <h3>Estudios</h3>
            <div className="estudios">
                <div className="estudio">
                    <div className="FechaLugar">
                        <div className="fecha">20/03/2019</div>
                        <div className="lugar">Bogotá</div>
                    </div>
                    <div className="TituloInstitucion">
                        <div className="Titulo">Psicología</div>
                        <div className="Institucion">Institución Universitaria Politécnico Grancolombiano</div>
                    </div>
                    <div className="btnDescarga">
                        <a href="#">
                            <img src={ iconDwl } alt="Download" />
                        </a>
                    </div>
                </div>
                <div className="estudio">
                    <div className="FechaLugar">
                        <div className="fecha">20/03/2019</div>
                        <div className="lugar">Bogotá</div>
                    </div>
                    <div className="TituloInstitucion">
                        <div className="Titulo">Psicología</div>
                        <div className="Institucion">Institución Universitaria Politécnico Grancolombiano</div>
                    </div>
                    <div className="btnDescarga">
                        <a href="#">
                            <img src={ iconDwl } alt="Download" />
                        </a>
                    </div>
                </div>
                <div className="estudio">
                    <div className="FechaLugar">
                        <div className="fecha">20/03/2019</div>
                        <div className="lugar">Bogotá</div>
                    </div>
                    <div className="TituloInstitucion">
                        <div className="Titulo">Psicología</div>
                        <div className="Institucion">Institución Universitaria Politécnico Grancolombiano</div>
                    </div>
                    <div className="btnDescarga">
                        <a href="#">
                            <img src={ iconDwl } alt="Download" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}