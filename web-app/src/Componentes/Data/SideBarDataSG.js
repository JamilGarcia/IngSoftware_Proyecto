import { FaFileInvoiceDollar } from "react-icons/fa"; 
import { FaCashRegister } from "react-icons/fa"; 
import { FaUserEdit } from "react-icons/fa"; 

export const SideBarDataSubG = [

    {
        title: "Home",
        path: ""

    },
    {
        title: "Registrar Facturas",
        path: "/Subgerente/registrar_facturas",
        icon: <FaFileInvoiceDollar /> 
    },
    {
        title: "Registro de Activos Fijos",
        path: "/Subgerente/registro_activos_fijos",
        icon:<FaCashRegister />
    },
    {
        title: "Gestión de Perfiles",
        path: "/Subgerente/gestion_perfiles",
        icon:  <FaUserEdit/>
    },
]