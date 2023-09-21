import React, { useState } from 'react'
import Eu from '../eu/Eu'
import './Main.css'
type EuType = {
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}

export default function Main() {
    const [texto,setTexto]=useState("")

    const me:EuType[] = [
        {
            id:1,
            titulo:'Ballet',
            sinopse:"Comecei a fazer aos 6 anos, smepre gostei muito então insisti muita para a minha mãe. Atualmente eu sou formada no ballet e dou aula de balllet e jazz, para adultos, crianças e babys",
            imagem:'/quadro.jpg'
        },
        {
            id:2,
            titulo:'Vida de Sereia',
            sinopse:'Barbie é uma campeã de surfe que vive com sua família em Malibu. Um dia, ela descobre um segredo de família: ela é uma sereia. Sua mãe, a rainha de Oceana, está em perigo e ela parte numa grande aventura no fundo do mar para salvá-la.',
            imagem:'filme2.jpg'
        },
        {
            id:3,
            titulo:'Butterfly e a Princesa Fairy',
            sinopse:'Butterfly se torna a embaixadora real de Flutterfield e é enviada para estabelecer a paz entre sua terra encantada e seus rivais. Apesar de não causar uma boa impressão no rei, ela faz amizade com a tímida filha do monarca, a princesa Catania.',
            imagem:'/filme.jpg'
        },
        {
            id:4,
            titulo:'Escola de Princesas',
            sinopse:'Butterfly se torna a embaixadora real de Flutterfield e é enviada para estabelecer a paz entre sua terra encantada e seus rivais. Apesar de não causar uma boa impressão no rei, ela faz amizade com a tímida filha do monarca, a princesa Catania.',
            imagem:'/3.jpg'
        },      
     
    ]


    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        setTexto(e.target.value)
    }
    return (
        <>
            <div className="campo_pesquisa">
                <input type="text" 
                       className='botao_pesquisa'
                       placeholder='Pesquise um Filme'
                       onChange={TrataTexto} />
                {texto && <p>Resultados: {texto} </p>}
            </div>
            <main className="content-main">
             
                {
                    me.filter((eu)=>eu.titulo.toLowerCase().includes(texto)).map(
                        (eu)=>
                            <Eu 
                                key={eu.id}
                                sinopse={eu.sinopse}
                                titulo={eu.titulo}
                                imagem={eu.imagem}
                            />
                    )
                }

        </main>
        </>
    )
}
