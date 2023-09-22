

import "./sidebar.css"



export default function Sidebar(){

    return(
    
       <div className= "container-sidebar1">
                <div className="left-saidebar" id="sidebar1">
                   
                    <a href="#" className="menu-logo"> <img src=" icons8-coruja-96.png "
                    width={40}
                    height={40}
                    ></img>
                    Reforçando
                    </a>
                    <div className="imagem-perfil">
                    <img src="retrato-de-homem-branco-isolado.jpg "
                    width={200}
                    height={200}
                
                    ></img>
                    </div>
                    <div className="comteudo-sidebar">
                        <a href="#"className="
                        menu-item"> <img className="img-ico" src="botao-de-inicio.png"></img>Dashboard</a>
                        <a href="#"className="
                        menu-item"> <img className="img-ico" src="icons8-marcador-100.png"></img>Materias</a>
                        <a href="#"className="
                        menu-item"> <img className="img-ico" src="9023055_chalkboard_teacher_fill_icon.png"></img>Aulas</a>
                        <a href="#"className="
                        menu-item"> <img className="img-ico" src="mortarboard_1940690.png"></img>Professores</a>
                        <a href="#"className="
                        menu-item"> <img className="img-ico" src="folha-de-papel.png"></img>Avaliação</a>
                        <a href="#"className="
                        menu-item bottom"> <img className="img-ico" src="configuracao.png"
                        
                        ></img>Configuração</a>
                    </div>
                </div>
            <div className="container-sidebar2">
                <div className="right-saidebar" id="sidebar2">
                    <a href="#" className="menu-logo1"><img src="icons8-sino-48.png "
                    width={50}
                    height={50}
                    ></img></a>
                     <a href="#" className="menu-logo1"><img src="icons8-mensagem-100.png "
                    width={50}
                    height={50}
                    ></img></a>
                     <a href="#" className="menu-logo1"><img src="retrato-de-homem-branco-isolado.jpg "
                    width={50}
                    height={50}
                    ></img></a>     
                </div>
                <div>
                    <div className="card">
                        <h3>Titulo do card</h3>
                        <p>conteudo do card</p>
                        <div className="card">
                        <h3>Titulo do card</h3>
                        <p>conteudo do card</p>
                        <div className="card">
                        <h3>Titulo do card</h3>
                        <p>conteudo do card</p>
                        <div className="card">
                        <h3>Titulo do card</h3>
                        <p>conteudo do card</p>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
                
            </div>
        
        </div>
        
            
           

            
    )
}


      
 