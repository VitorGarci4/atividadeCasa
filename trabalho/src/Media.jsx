import App from "./App"
import style from"./Media.module.css"

import { useState } from "react"
import { useEffect } from "react"

export const media = () =>{

    const [num1 , numero1] = useState();
    const [num2 , numero2] = useState();
    const [num3 , numero3] = useState();
    const [num4 , numero4] = useState();
    const [num5 , numero5] = useState();
    const [media1, media2] = useState();

    const resultmedia = () => media2((parseFloat (num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4) + parseFloat(num5)) /5)

    return(
        <div className={style.Media}>
            <h1>media dos numeros</h1>
            <Menu/>

        </div>
    )
}