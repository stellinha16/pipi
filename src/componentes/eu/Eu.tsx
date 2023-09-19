import './eu.css'    
type EuProps ={
    titulo:string,
    sinopse:string,
    imagem:string

}
function Eu(props:EuProps){
    return(
        <div className="filme-content">
            <div className='foto-eu'>
        <img className="img-eu" src={props.imagem} alt="" />
            </div>
           
            <div className="text-sobre">
                <h1>{props.titulo}</h1>
                <p className="sinopse">{props.sinopse}</p>
            </div>
        </div>
    )
}

export default Eu