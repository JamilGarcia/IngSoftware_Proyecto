import './Hojas-de-estilo/bootstrap.min.css'
import './Hojas-de-estilo/Navbar-With-Button-icons.css'
import './Hojas-de-estilo/styles.css'
import './App.css';
import { BsFillCartCheckFill } from "react-icons/bs";
import { BsFillChatLeftQuoteFill } from "react-icons/bs";





function Ventana_jefeejecutivo() {
    return (
      <body>
      <div class="estiloHeading">
          <h3 class="display-5">Programa</h3>
      </div>
      <nav class="navbar navbar-light navbar-expand-md py-3" id="BarraHerramientas">
          <div class="container">
              <div class="collapse navbar-collapse" id="navcol-1">
                  <ul class="navbar-nav me-auto">
                      <li class="nav-item"><a class="nav-link active" href="#">First Item</a></li>
                      <li class="nav-item"><a class="nav-link" href="#">Second Item</a></li>
                      <li class="nav-item"><a class="nav-link" href="#">Third Item</a></li>
                  </ul>
              </div>
          </div>
      </nav>
      <div class="MenuVentanas">
          <div id="MenuDiv">
              <div id="MenuTitulo">
                  <p class="TxtMenuTitulo"><strong>MENU</strong></p>
              </div>
              <div id="MenuElementos" class="claseMenuElementos">
                  <div id="Elemento1eje">
                      <p class="Icono_Menu"><BsFillCartCheckFill/></p> 
                      <p class="TxtElements">Facturar</p>
  
                  </div>
                  
                  <div id="Elemento2eje">
                      <p class="Icono_Menu"><BsFillChatLeftQuoteFill/></p> 
                      <p class="TxtElements">Cotizar</p>
                  </div>
                  
              </div>
          </div>
          <div class="Ventanas">
              <div id="TituloVentana1">
                  <p class="TxtMenuTitulo"><strong>Descripcion De Ventana</strong></p>
              </div>
              <div id="Ventana1">
                   <div id="ventanaText"></div>
              </div>
              <div id="TituloVentana2">
                  <p class="TxtMenuTitulo"><strong>Descripcion De Ventana</strong></p>
              </div>
              <div id="Ventana2">
                  <div id="ventana2Text"></div>
              </div>
          </div>
      </div>
  </body>
    );
  }

export default Ventana_jefeejecutivo