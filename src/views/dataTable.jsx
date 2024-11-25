import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataTable } from '../store/actions';
import { addData, filterData, deleteData } from '../features/reducer/reducer';

const DataTable = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.filteredData);
  const [inputValue, setInputValue] = useState(''); 
  const [newData, setNewData] = useState({ nombre: '', descripcion: '' });

  // GET 
  useEffect(() => {
    dispatch(getDataTable());
  }, [dispatch]);

  //BUSCAR
  const handleSearch = () => {
    dispatch(filterData(inputValue)); 
  };

  // AGREGAR
  const handleAddData = () => {
    const { nombre, descripcion } = newData;
    if (nombre && descripcion) {
      dispatch(addData(newData)); 
      setNewData({ nombre: '', descripcion: '' }); 
    }
  };

  // ELIMINAR
  const handleDelete = (id,nombre) => {
    const data = {id:id, nombre:nombre}
    dispatch(deleteData(data));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="row w-100">
        <div className="col my-auto text-start mb-3">
          <input type="text" className="col-12" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Filtro de Nombre" />
        </div>
        <div className="col text-end mb-3">
          <button type="button" className="btn btn-primary px-3" onClick={handleSearch}>
            Buscar
          </button>
        </div>

        <table className="w-100 border">
          <thead>
            <tr>
              <th className="ps-2 border-end header-tabla">Nombre</th>
              <th className="ps-2 border-end header-tabla">Descripción</th>
              <th className="ps-2 header-tabla">Acción</th>
            </tr>
          </thead>
          <tbody>
            {
                data?
                    data.length !== 0?
                        data.map((item, index) => (
                            <tr key={`${item.id}-${index}`}>
                                <td className={index % 2 === 0 ? 'ps-2 border-end bg-even' : 'ps-2 border-end'}>{item.nombre}</td>
                                <td className={index % 2 === 0 ? 'ps-2 border-end bg-even' : 'ps-2 border-end'}>{item.descripcion}</td>
                                <td className={index % 2 === 0 ? 'ps-2 border-end bg-even' : 'ps-2 border-end'}>
                                    <button className="link ps-2" onClick={() => handleDelete(item.id,item.nombre)}>Eliminar</button>
                                </td>
                            </tr>
                        ))
                    :
                    <tr>
                        <td className='text-center' colSpan={3}>SIN REGISTROS DISPONIBLES</td>
                    </tr>
                    
                :
                <tr>
                    <td colSpan={3}>Cargando...</td>
                </tr>}
          </tbody>
        </table>

        <div className="w-100 bg-crear mt-5 py-4">
          <div className="row">
            <div className="col my-auto">
              <input
                type="text"
                className="col-12"
                value={newData.nombre}
                onChange={(e) => setNewData({ ...newData, nombre: e.target.value })}
                placeholder="Nombre"
              />
            </div>
            <div className="col my-auto">
              <input
                type="text"
                className="col-12"
                value={newData.descripcion}
                onChange={(e) => setNewData({ ...newData, descripcion: e.target.value })}
                placeholder="Descripción"
              />
            </div>
            <div className="col my-auto text-end">
              <button type="button" className="btn btn-success px-4" onClick={handleAddData}>
                Crear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;