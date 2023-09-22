
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import Sidebar from "../../components/sidebar/saidebar";
//import card from '../../components/card';
//import barra from "../../components/barra";
import "./home.css"

function HomePage(){
    return(
       <>
    <Sidebar/>
    
    <div className="search-box"> 
         <input type="text"className="input-pesquisa"   placeholder="Pesquisar..">
          
         </input>  <img src="icons8-lupa-100.png" alt="lupa" width="30px" height="30px"/>
    </div>
    
       </>
    );
}
 export default HomePage;
 
