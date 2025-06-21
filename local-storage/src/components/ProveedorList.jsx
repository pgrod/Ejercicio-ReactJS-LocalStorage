const ProveedorList = ({ proveedores, onEdit, onDelete }) => {
  return (
    <table className="table table-bordered">
      <thead className="table-light">
        <tr>
          <th>Nombre</th>
          <th>Empresa</th>
          <th>Teléfono</th>
          <th>Email</th>
          <th>Dirección</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {proveedores.length > 0 ? (
          proveedores.map((prov, index) => (
            <tr key={index}>
              <td>{prov.nombre}</td>
              <td>{prov.empresa}</td>
              <td>{prov.telefono}</td>
              <td>{prov.email}</td>
              <td>{prov.direccion}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(index)}>Editar</button>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete(index)}>Eliminar</button>
              </td>
            </tr>
          ))
        ) : (
          <tr><td colSpan="6" className="text-center">No hay proveedores registrados</td></tr>
        )}
      </tbody>
    </table>
  );
};

export default ProveedorList;