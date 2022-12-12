import "../../../Hojas-de-estilo/FlujoEfectivo.css";

export const FlujoEfectivo = () => {
  return (
    <div className="flujoefectivotable">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col"># De Referencia</th>
            <th scope="col">Fecha</th>
            <th scope="col">Concepto</th>
            <th scope="col">Valor</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Categoria</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FlujoEfectivo;
