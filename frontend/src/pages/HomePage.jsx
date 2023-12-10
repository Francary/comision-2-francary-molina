import { Link} from "react-router-dom";
const HomePage = () => {

    return(
      
        <div className="container d-flex flex-column p-3 gap-4 justify-content-center mt-3">
            <h1 className="text-center">Explorando el Mundo: </h1>
            <p> ¡Bienvenidos al emocionante mundo de los viajes! Hoy nos reunimos en este foro para explorar juntos las maravillas que el mundo tiene para ofrecer. Preparémonos para un viaje lleno de descubrimientos, aventuras y experiencias inolvidables</p>
            
            <h1 className="text-center">Top 10 Recomendaciones para Viajes</h1>

            <ol className="container d-flex flex-column p-3 gap-2 justify-content-center mt-1">
                <li><strong>Investigación Previa:</strong> Antes de viajar, investiga sobre el destino. Aprende sobre la cultura local, las costumbres y las atracciones turísticas.</li>

                <li><strong>Empaque Eficiente:</strong> Sé selectivo al empacar. Lleva ropa versátil y empaca solo lo esencial. Considera el clima y la duración de tu viaje al seleccionar tu guardarropa.</li>

                <li><strong>Seguro de Viaje:</strong> No subestimes la importancia del seguro de viaje. Asegúrate de tener cobertura médica adecuada y considera opciones que cubran cancelaciones de vuelos y pérdida de pertenencias.</li>

                <li><strong>Planificación del Itinerario:</strong> Planifica, pero sé flexible. Ten un itinerario general, pero deja espacio para la espontaneidad y las sorpresas.</li>

                <li><strong>Conexión con Locales:</strong> Conecta con la gente local. Aprende algunas frases básicas en el idioma local y muestra interés por la cultura.</li>

                <li><strong>Preservación del Medio Ambiente:</strong> Sé respetuoso con el medio ambiente. Opta por prácticas sostenibles y respeta la flora y fauna local.</li>

                <li><strong>Seguridad Personal:</strong> Mantén la seguridad en mente. Mantén tus pertenencias seguras y evita áreas peligrosas. Mantén una copia de tus documentos importantes.</li>

                <li><strong>Uso Inteligente de la Tecnología:</strong> Utiliza la tecnología sabiamente. Descarga mapas offline y ten acceso a información de emergencia.</li>

                <li><strong>Exploración Local de la Comida:</strong> Prueba la comida local. La gastronomía es una parte fundamental de la cultura. No tengas miedo de probar nuevos sabores y platos típicos.</li>

                <li><strong>Cámara y Diario de Viaje:</strong> Documenta tu viaje. Lleva una cámara para capturar momentos especiales y lleva un diario de viaje para escribir tus pensamientos y recuerdos.</li>
            </ol>
                <div>
                    <Link className="btn btn-success" to={'/post'}>Ver Post</Link>
                </div>
        </div>
        
      
    )
}

export {HomePage}