import "../../../Hojas-de-estilo/FlujoEfectivo.css";

export const FlujoEfectivo = () => {
  return (
    <table
      class="table table-striped"
      data-toggle="table"
      data-url="data2.json"
    >
      <thead>
        <tr>
          <th scope="col"># de Referecia</th>
          <th scope="col">Fecha</th>
          <th scope="col">Concepto</th>
          <th scope="col">Valor</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Categoria</th>
        </tr>
      </thead>
    </table>
  );
};

export default FlujoEfectivo;
