import React from 'react'
import './PageResultado.css'
import { useLocation, useNavigate} from "react-router-dom";
import { PiKeyReturnFill } from "react-icons/pi";


const PageResultado = () => {


    const location = useLocation();
    const resultadoLocation = location.state?.resultado || "Nenhum valor recebido!";
    const diagnosticoLocation = location.state?.diagnostico || "Nenhum diagnóstico recebido";
    const navigate = useNavigate();


const CalcularNovamente = () => {
    navigate("/");

        
}


    return(

            <div class = "div-resultado-main">

                <img class = "img-resultado" src = "resultado.png"></img>
                <p class = "label-resultado">IMC: {resultadoLocation.toFixed(1)}</p>
                <p class = "label-diagnostico">Diagnóstico: {diagnosticoLocation}</p>
                
                <PiKeyReturnFill onClick = {CalcularNovamente}class = "return-icon"/>

            </div>

    )



}

export default PageResultado;