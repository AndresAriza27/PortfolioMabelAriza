import '../styles/About.css'

export function About () {
    return (
        <div className="About">
            <h3>Sobre Mí</h3>
            <p> 
                Soy diligente e innovadora, con el compromiso continuo de adquirir nuevos conocimientos y desarrollar nuevas competencias. 
                Mi interés ha sido comprender la misión, visión y líneas estratégicas de las organizaciones en las que laboro, con el fin de alinear mi trabajo y desempeño. Mi trayectoria laboral ha sido en Instituciones de Educación Superior.
                Soy Psicóloga del Politécnico Grancolombiano, actúo con sentido crítico y sensible frente a los problemas humanos y sociales, inspirándome en el reconocimiento de la dignidad humana y su respeto, siempre buscando la excelencia en las actividades que desarrollo.
            </p>
            <div className="skills">
                <div className="skill">
                    <div className="title"><span>Soft Skills</span></div>
                    <div className="list">
                        <ul>
                            <li>Creatividad</li>
                            <li>Colaboración </li>
                            <li>Adaptabilidad</li>
                            <li>Trabajo en Equipo</li>
                            <li>Compromiso</li>
                            <li>Empatía</li>
                            <li>Capacidad de aprendizaje</li>
                            <li>Organización y Planificación</li>
                            <li>Proactiva</li>
                        </ul>
                    </div>
                </div>
                <div className="skill">
                    <div className="title"><span>Hard Skills</span></div>
                    <div className="list">
                        <ul>
                            <li>Habilidades informáticas</li>
                            <li>Redacción</li>
                            <li>Ortografía</li>
                            <li>Pensamiento analítico</li>
                            <li>Expresión oral</li>
                            <li>Habilidades Lingüísticas</li>
                            <li>Manejo de recursos tecnológicos</li>
                            <li>Manejo y análisis de datos</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}