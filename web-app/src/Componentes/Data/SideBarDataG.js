import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaArchive } from "react-icons/fa";

export const SideBarDataG = [

    {
        title: "Home",
        path: "/Gerente"
    },
    {
        title: "Generar Factura",
        path: "generar_factura",
        icon: <FaFileInvoiceDollar /> 
    },
    {
        title: "Flujo de Efectivo",
        path: "flujo_efectivo",
        icon:<FaCashRegister />
    },
    {
        title: "Gestión de Perfiles",
        path: "gestion_perfiles",
        icon:  <FaUserEdit/>
    },
    {
        title: "Registro de Activos Fijos",
        path: "registro_activos_fijos",
        icon: <FaArchive/>
    }
]