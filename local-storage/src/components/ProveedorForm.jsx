import React, { useState, useEffect } from 'react';

const initialState = {
  nombre: '',
  empresa: '',
  telefono: '',
  email: '',
  direccion: ''
};

const ProveedorForm = ({ addOrEdit, proveedorActual }) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (proveedorActual) {
      setFormData(proveedorActual);
    }
  }, [proveedorActual]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, empresa, telefono, email, direccion } = formData;

    if (!nombre || !empresa || !telefono || !email || !direccion) {
      window.Swal.fire('Campos incompletos', 'Todos los campos son obligatorios.', 'warning');
      return;
    }

    addOrEdit(formData);
    setFormData(initialState);
  };

  return (
    <form className="card p-3 mb-3" onSubmit={handleSubmit}>
      <h5>{proveedorActual ? 'Editar Proveedor' : 'Nuevo Proveedor'}</h5>
      <input className="form-control mb-2" placeholder="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
      <input className="form-control mb-2" placeholder="Empresa" name="empresa" value={formData.empresa} onChange={handleChange} />
      <input className="form-control mb-2" placeholder="Teléfono" name="telefono" value={formData.telefono} onChange={handleChange} />
      <input className="form-control mb-2" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
      <input className="form-control mb-2" placeholder="Dirección" name="direccion" value={formData.direccion} onChange={handleChange} />
      <button type="submit" className="btn btn-primary">
        {proveedorActual ? 'Actualizar' : 'Guardar'}
      </button>
    </form>
  );
};

export default ProveedorForm;