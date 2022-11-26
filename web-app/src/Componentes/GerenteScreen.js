import "../Hojas-de-estilo/bootstrap.min.css";
import "../Hojas-de-estilo/Navbar-With-Button-icons.css";
import "../Hojas-de-estilo/styles.css";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaArchive } from "react-icons/fa";

const Home_Gerente = () => {
  return (
    <body>
      <div class="estiloHeading">
        <h3 class="display-5">Programa</h3>
      </div>
      <nav
        class="navbar navbar-light navbar-expand-md py-3"
        id="BarraHerramientas"
      >
        <div class="container">
          <div class="collapse navbar-collapse" id="navcol-1">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  First Item
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Second Item
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Third Item
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="MenuVentanas">
        <div id="MenuDiv">
          <div id="MenuTitulo">
            <p class="TxtMenuTitulo">
              <strong>MENU</strong>
            </p>
          </div>
          <div id="MenuElementos" class="claseMenuElementos">
            <div id="Elemento1">
              <p class="Icono_Menu">
                <FaFileInvoiceDollar />
              </p>
              <p class="TxtElements">
                Generar <br></br>factura
              </p>
            </div>
            <div id="Elemento3">
              <p class="Icono_Menu">
                <FaCashRegister />
              </p>
              <p class="TxtElements">
                Flujo de <br></br>Efectivo
              </p>
            </div>
            <div id="Elemento2">
              <p class="Icono_Menu">
                <FaUserEdit />
              </p>
              <p class="TxtElements">
                Gestión de<br></br>Perfiles
              </p>
            </div>
            <div id="Elemento4">
              <p class="Icono_Menu">
                <FaArchive />
              </p>
              <p class="TxtElements">
                Registro de <br></br>Activos Fijos{" "}
              </p>
            </div>
          </div>
        </div>
        <div class="Ventanas">
          <div id="TituloVentana1">
            <p class="TxtMenuTitulo">
              <strong>Descripcion De Ventana</strong>
            </p>
          </div>
          <div id="Ventana1">
            <div id="ventanaText"></div>
          </div>
          <div id="TituloVentana2">
            <p class="TxtMenuTitulo">
              <strong>Descripcion De Ventana</strong>
            </p>
          </div>
          <div id="Ventana2">
            <div id="ventana2Text"></div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Home_Gerente;
