import React from "react"
import './CalculadoraIMC.css'

import { GiWeight , GiBodyHeight} from "react-icons/gi";
import { Navigate, useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";



const CalculadoraIMC = () => {

     



        const navigate = useNavigate();

        const[peso, setPeso] = React.useState(0);
        const[altura, setAltura] = React.useState(0);


        const CalcularIMC = () => {

               

                                if(peso == 0 || altura == 0)  {alert("Pelo menos um campo em branco, digite algo!");}

                                else if(altura > 2.51 || peso > 700)  {alert("Peso e/ou altura inválidos!");}



                       
                                 
                                else {
                                        var resultado = parseFloat(peso) /(parseFloat(altura * altura));
                                        if(resultado < 18.5) {
                                                var diagnostico = "Magreza";
                                                navigate('/resultado', { state: { resultado, diagnostico} });



                                                                }
                                        if(resultado > 18.5 && resultado <= 24.99) {
                                                var diagnostico = "Normal";
                                                navigate('/resultado', { state: { resultado, diagnostico} });



                                                        }
                                        if(resultado > 25 && resultado <= 29.99) {
                                                var diagnostico = "Sobrepeso";
                                                navigate('/resultado', { state: { resultado, diagnostico} });



                                                        }
                                        if(resultado >= 30) {
                                                var diagnostico = "Obesidade";
                                                navigate('/resultado', { state: { resultado, diagnostico} });



                                                        }
                

                                }

                
            
                

               
               
        }

      



    return(

                <div class = "main">
                            <div class = "card">

                                    <div class = "card-header">
                                            <img src = "gym-logo-white.png" class = "img-card"></img>
                                            <label class = "header-description">Calcule o seu IMC aqui!</label>

                                    </div>
                                    <div class = "card-body">
                                            
                                                <label class = "label-peso">Peso</label>
                                                <input class = "input-peso" placeholder="Peso" type = "number" value = {peso} onChange={(e) => setPeso(e.target.value)}  ></input>
                                                <label class = "label-altura">Altura</label>
                                                <input class = "input-altura" placeholder="Altura" type = "number"value = {altura} onChange={(e) => setAltura(e.target.value)} ></input>
                                                <button onClick={CalcularIMC} type = "button" class = "btn btn-primary">Calcular</button>
                                                <p><GiWeight class = "io-body"/></p>
                                                <p><GiBodyHeight class = "body-height"/></p>


                                    </div>
                            </div>






                </div>
                
    )
}

export default CalculadoraIMC;