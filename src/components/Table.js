import React from "react";
const Table = ({ gastos }) => {
  return (
    <table class="u-full-width">
      <thead>
        <tr>
          <th>id</th>
          <th>Nombre</th>
          <th>Concepto</th>
          <th>Fecha</th>
          <th>Hora</th>
        </tr>
      </thead>
      <tbody>
        {gastos.map((gasto) => (
          <tr key={gasto.id}>
            <td>{gasto.id}</td>
            <td>{gasto.nombre}</td>
            <td>$ {gasto.cantidad}</td>
            <td>{gasto.date}</td>
            <td>{gasto.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
