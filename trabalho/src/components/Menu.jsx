
import style from './Menu.module.css'
import Media from './Media'


export default function Menu() {
    return(
        <>
         <div className={style.cards}>
            <p> 
                <a href={'/'}>Cards</a>
            </p>
            <p>
                <a href={'/'}>Média</a>
            </p>

        </div>
        <div className={style.reactCard}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMHCoXgVkk23Y9vQ0-rTUilKQ2ICNZaYcaMml-H-w0tQ&s" alt="imagem de uma tecnologia foda" />
            <p>utilizamos as tecs vite npm e node.js para realizar esta atividade</p>
        </div>
        <div className={style.viteCard}>
            <img src="https://uploads.sitepoint.com/wp-content/uploads/2021/04/1618197067vitejs.png" alt="imagem Vite" />
            <p>utilizamos as tecs vite npm e node.js para realizar esta atividade</p>
        </div>
        <div className={style.axiosCard}>
            <img src="https://static.poder360.com.br/2022/01/logo-axios-local-newsletter-848x477.jpg" alt="imagem de uma tecnologia foda" />
            <p>utilizamos as tecs vite npm e node.js para realizar esta atividade</p>
        </div>
        <div className={style.reactRouterCard}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy3S8WeWOVNDNtfCUulpJMG5z9knUHGKagszVVC-roRw&s" alt="imagem de uma tecnologia foda" />
            <p>utilizamos as tecs vite npm e node.js para realizar esta atividade</p>
        </div>
        <div className={style.NPMCard}>
            <img src="https://cdn.buttercms.com/NFhF3dWBTf5wPnfTsdjR" alt="imagem de uma tecnologia foda" />
            <p>utilizamos as tecs vite npm e node.js para realizar esta atividade</p>
        </div>
        <div className={style.nodeCard}>
            <img src="https://miro.medium.com/v2/resize:fit:5120/1*mp91A9RzagntGGjBnwu4Yw.png" alt="imagem de uma tecnologia foda" />
            <p>utilizamos as tecs vite npm e node.js para realizar esta atividade</p>
        </div>
        

        </>
    )
}