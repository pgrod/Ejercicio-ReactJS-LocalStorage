import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useEffect, useState } from 'react';
import ProveedorForm from './components/ProveedorForm';
import ProveedorList from './components/ProveedorList';
import Swal from 'sweetalert2';

function App() {
  const [proveedores, setProveedores] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('proveedores')) || [];
    setProveedores(data);
  }, []);

  useEffect(() => {
    localStorage.setItem('proveedores', JSON.stringify(proveedores));
  }, [proveedores]);

  const addOrEdit = (data) => {
    if (editIndex !== null) {
      const newList = [...proveedores];
      newList[editIndex] = data;
      setProveedores(newList);
      setEditIndex(null);
      Swal.fire('Actualizado', 'Proveedor actualizado correctamente', 'success');
    } else {
      setProveedores([...proveedores, data]);
      Swal.fire('Guardado', 'Proveedor registrado con éxito', 'success');
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const newList = proveedores.filter((_, i) => i !== index);
        setProveedores(newList);
        Swal.fire('Eliminado', 'Proveedor eliminado con éxito', 'success');
      }
    });
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">CRUD de Proveedores (LocalStorage)</h2>
      <ProveedorForm
        addOrEdit={addOrEdit}
        proveedorActual={editIndex !== null ? proveedores[editIndex] : null}
      />
      <ProveedorList
        proveedores={proveedores}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
