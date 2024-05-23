// import React, { useState } from "react";
// import Header from "../Header/Header"; // Importa el componente Header desde su ubicación
// import Footer from "../Footer/Footer"; // Importa el componente Footer desde su ubicación
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom"; // Importa el componente Link desde React Router
// import DateTimePicker from "react-datetime-picker";
// import "./EditarCaso.css";
// import CboAreaRiesgo from "../Cbos/CboAreaRiesgo";
// import CboAduanas from "../Cbos/CboAduanas";
// // import CboRecintoControl from "../Cbos/CboRecintoControl";
// // import CboPuntoControl from "../Cbos/CboPuntoControl";
// import CboTipoEstadoCaso from "../Cbos/CboTipoEstadoCaso";

// export const ProyectoApp = () => {
//   const [fechaHora, setFechaHora] = useState(new Date());
//   const [showDateTimePicker, setShowDateTimePicker] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [showModal2, setShowModal2] = useState(false); // Estado y función para el segundo modal

//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     console.log("Archivo seleccionado:", file);
//     setSelectedFile(file);
//   };

//   const handleFechaHoraChange = (date) => {
//     setFechaHora(date);
//   };

//   const toggleDateTimePicker = () => {
//     setShowDateTimePicker(!showDateTimePicker);
//   };

//   const closeDateTimePicker = () => {
//     setShowDateTimePicker(false);
//   };

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   const toggleModal2 = () => {
//     // Función para mostrar u ocultar el segundo modal
//     setShowModal2(!showModal2);
//   };

//   const closeModal2 = () => {
//     // Función para cerrar el segundo modal
//     setShowModal2(false);
//   };

//   const handleSave = () => {
//     // console.log('Fecha y hora:', fechaHora);
//   };

//   return (
//     <>
//       <Header />
//       <br></br>
//       <div className="container">
//         <div className="card">
//           <div className="card-body">
//             <div className="mb-3">
//               <label htmlFor="idCaso" className="form-label">
//                 Id del caso:
//               </label>
//               <input
//                 type="text"
//                 id="idCaso"
//                 className="form-control"
//                 disabled
//                 placeholder="1"
//               />
//             </div>

//             {/* Módulo de detección/hallazgo - Nuevo caso */}
//             <h5 className="card-title">
//               Módulo de detección/hallazgo - Nuevo caso
//             </h5>
//             <br></br>
//             {/* Origen del caso */}
//             <div className="mb-3">
//               <label>Origen del caso:</label>
//               <select className="form-select">
//                 <option value="value1">Valor 1</option>
//                 <option value="value2">Valor 2</option>
//               </select>
//             </div>
//             {/* Tipo de caso */}
//             <div className="mb-3">
//               <label>Estado</label>
//               <CboTipoEstadoCaso />
//             </div>

//             {/* Área de riesgo */}
//             <div className="mb-3">
//               <label>Área de Riesgo:</label>

//               <CboAreaRiesgo />
//             </div>

//             {/* Descripción corta */}
//             <div className="mb-3">
//               <label htmlFor="descripcionCorta" className="form-label">
//                 Descripción corta:
//               </label>
//               <textarea
//                 id="descripcionCorta"
//                 className="form-control"
//               ></textarea>
//             </div>

//             {/* Descripción del caso */}
//             <div className="mb-3">
//               <label htmlFor="descripcionCaso" className="form-label">
//                 Descripción del caso:
//               </label>
//               <textarea
//                 id="descripcionCaso"
//                 className="form-control"
//               ></textarea>
//             </div>

//             {/* Fecha y hora de ocurrencia */}
//             <div className="mb-3">
//               <label>Fecha y hora de ocurrencia:</label>
//               <div className="datetime-container">
//                 <input
//                   type="datetime-local" // Cambiado a datetime-local
//                   value={fechaHora ? fechaHora.toISOString().slice(0, 16) : ""} // Formateado como marca de tiempo
//                   onChange={(e) =>
//                     handleFechaHoraChange(new Date(e.target.value))
//                   } // Manejador de cambio actualizado
//                 />
//               </div>
//             </div>
//             <br></br>
//             {/* Punto de control */}
//             <div className="card mb-3">
//               <div className="card-body">
//                 <h5 className="card-title">Punto de control</h5>
//                 {/* Aduana */}
//                 <div className="mb-3">
//                   <label>Aduana:</label>
//                   <CboAduanas />
//                 </div>

//                 {/* Recinto */}
//                 <div className="mb-3">
//                   <label>Recinto:</label>
//                   {/* <CboRecintoControl /> */}
//                 </div>
//                 {/* Avanzada o punto de control */}
//                 <div className="mb-3">
//                   <label>Avanzada o punto de control:</label>
//                   {/* <CboPuntoControl /> */}
//                 </div>
//                 {/* Otra avanzada */}
//                 <div className="mb-3">
//                   <label>Otra avanzada o punto de control:</label>
//                   <input
//                     type="text"
//                     id="otraAvanzada"
//                     className="form-control"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Funcionarios */}
//             <div className="mb-3">
//               <label>Funcionario selector:</label>
//               <select className="form-select">
//                 <option value="value1">Valor 1</option>
//                 <option value="value2">Valor 2</option>
//               </select>
//             </div>
//             <div className="mb-3">
//               <label>Funcionario detector:</label>
//               <select className="form-select">
//                 <option value="value1">Valor 1</option>
//                 <option value="value2">Valor 2</option>
//               </select>
//             </div>
//             <div className="mb-3">
//               <label className="me-2">Funcionario asignado:</label>
//               <select className="form-select me-2">
//                 <option value="value1">Valor 1</option>
//                 <option value="value2">Valor 2</option>
//               </select>
//               <a href="#" className="text-decoration-none">
//                 Asignarme a mí (solo jefe de turno)
//               </a>
//             </div>

//             {/* Imágenes/Videos */}
//             <div className="card mb-3">
//               <div className="card-body">
//                 <h5 className="card-title">Imágenes/Videos</h5>
//                 {/* Botón de subir archivo */}
//                 <button className="btn btn-primary mb-3" onClick={toggleModal}>
//                   Seleccionar Imagen/Videos
//                 </button>
//                 {/* Tabla de archivos */}
//                 <table className="table">
//                   <thead>
//                     <tr>
//                       <th>Nombre archivo</th>
//                       <th>Fecha</th>
//                       <th>Acción</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>Archivo1.jpg</td>
//                       <td>2024-04-25</td>
//                       <td>
//                         <button className="btn btn-primary me-2">Ver</button>
//                         <button className="btn btn-danger">Quitar</button>
//                       </td>
//                     </tr>
//                     {/* Agregar más filas según sea necesario */}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Documentos anexos */}
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">Documentos anexos</h5>
//                 {/* Botón seleccionar documento anexo */}
//                 <button className="btn btn-primary mb-3" onClick={toggleModal2}>
//                   Seleccionar Documentos Anexos
//                 </button>

//                 {/* Tabla de documentos */}
//                 <table className="table">
//                   <thead>
//                     <tr>
//                       <th>Tipo documento</th>
//                       <th>Fecha</th>
//                       <th>Número</th>
//                       <th>Descripción</th>
//                       <th>Archivo</th>
//                       <th>Acciones</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>Documento1</td>
//                       <td>2024-04-25</td>
//                       <td>12345</td>
//                       <td>Descripción1</td>
//                       <td>Archivo1.pdf</td>
//                       <td>
//                         <button className="btn btn-primary me-2">Ver</button>
//                         <button className="btn btn-warning me-2">Editar</button>
//                         <button className="btn btn-danger">Quitar</button>
//                       </td>
//                     </tr>
//                     {/* Agregar más filas según sea necesario */}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             <br />
//             <div className="text-center">
//               <button className="btn btn-sm btn-primary me-2 admin-faces-btn">
//                 Guardar
//               </button>
//               <Link to="/BuscarCaso">
//                 <button className="btn btn-primary admin-faces-btn">
//                   Volver
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Modal2 show={showModal2} onClose={closeModal2}>
//         <div className="mb-3">
//           <label htmlFor="tipoDocumento" className="form-label">
//             Tipo documento:
//           </label>
//           <select id="tipoDocumento" className="form-select">
//             <option value="value1">Valor 1</option>
//             <option value="value2">Valor 2</option>
//           </select>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="numeroDocumento" className="form-label">
//             Número documento:
//           </label>
//           <input type="text" id="numeroDocumento" className="form-control" />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="otroNumeroDocumento" className="form-label">
//             Otro número documento:
//           </label>
//           <input
//             type="text"
//             id="otroNumeroDocumento"
//             className="form-control"
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="descripcionDocumento" className="form-label">
//             Descripción otro tipo documento:
//           </label>
//           <textarea
//             id="descripcionDocumento"
//             className="form-control"
//           ></textarea>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="archivoDocumento" className="form-label">
//             Seleccionar archivo:
//           </label>
//           <input type="file" id="archivoDocumento" className="form-control" />
//         </div>
//         <button className="btn btn-primary mt-3" onClick={handleSave}>
//           Guardar
//         </button>
//       </Modal2>
//       <br></br>
//       <Modal show={showModal} onClose={closeModal}>
//         <h2>Cargar Archivo</h2>
//         <input type="file" onChange={handleFileChange} />
//         {/* <button className="btn btn-primary mt-3" onClick={handleSave}>Guardar</button> */}
//       </Modal>
//       <br></br>
//       <Footer />
//     </>
//   );
// };

// const Modal = ({ show, onClose, children }) => {
//   const modalStyle = {
//     position: "fixed",
//     zIndex: 999,
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     display: show ? "block" : "none",
//   };

//   const backdropStyle = {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     zIndex: 998,
//     display: show ? "block" : "none",
//   };

//   return (
//     <>
//       <div
//         className="modal-backdrop"
//         style={backdropStyle}
//         onClick={onClose}
//       ></div>
//       <div className="modal" tabIndex="-1" role="dialog" style={modalStyle}>
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Seleccionar Imagen/Videos</h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 onClick={onClose}
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">{children}</div>
//             <button className="btn btn-primary mt-3">Guardar</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// const Modal2 = ({ show, onClose, children }) => {
//   const modalStyle = {
//     position: "fixed",
//     zIndex: 999,
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     display: show ? "block" : "none",
//   };

//   const backdropStyle = {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     zIndex: 998,
//     display: show ? "block" : "none",
//   };

//   return (
//     <>
//       <div
//         className="modal-backdrop"
//         style={backdropStyle}
//         onClick={onClose}
//       ></div>
//       <div className="modal" tabIndex="-1" role="dialog" style={modalStyle}>
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Referencia de documentos</h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 onClick={onClose}
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">{children}</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProyectoApp;

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import DateTimePicker from "react-datetime-picker";
import "./EditarCaso.css";
import CboAreaRiesgo from "../Cbos/CboAreaRiesgo";
import CboAduanas from "../Cbos/CboAduanas";
import CboTipoEstadoCaso from "../Cbos/CboTipoEstadoCaso";
import CboPuntoControl from "../Cbos/CboPuntoControl";
import CboRecintoControl from "../Cbos/CboRecintoControl";

const EditarCaso = () => {
  const { id } = useParams();
  const [fechaHora, setFechaHora] = useState(new Date());
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const [caso, setCaso] = useState(null);

  useEffect(() => {
    // Cargar datos del caso por ID aquí
    const casos = [
      {
        id: 1,
        numero: "20240123000001",
        origen: "56463",
        entregaexterna: true,
        fechaocurrencia: "2024-05-15T01:27:38.821Z",
        descripcion: "Se encuentra en contenedor",
        aduana: 23,
        recintocontrol: 443,
        otropuntocontrol: "14",
        tipoestado: null,
        fecharegistro: "2024-05-15T01:27:38.821Z",
        funcionariocreador: "Funcionario 1",
        tipoorigen: "1",
        estadocaso: "Liberado",
        puntocontrol: "Punto de control 1",
        areaRiesgo: ["Salud Pública", "Cites"],
      },
      {
        id: 2,
        numero: "20240123000002",
        origen: "56464",
        entregaexterna: false,
        fechaocurrencia: "2024-05-16T02:28:39.822Z",
        descripcion: "Se encuentra en vehiculo",
        aduana: 24,
        recintocontrol: 444,
        otropuntocontrol: "15",
        tipoestado: null,
        fecharegistro: "2024-05-16T02:28:39.822Z",
        funcionariocreador: "Funcionario 2",
        tipoorigen: "2",
        estadocaso: "Borrador",
        puntocontrol: "Punto de control 2",
        areaRiesgo: ["Popiedad Intelectual", "Salud Pública"],
      },
    ];

    const selectedCaso = casos.find((c) => c.id === parseInt(id));
    setCaso(selectedCaso);
    setFechaHora(new Date(selectedCaso.fechaocurrencia));
  }, [id]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("Archivo seleccionado:", file);
    setSelectedFile(file);
  };

  const handleFechaHoraChange = (date) => {
    setFechaHora(date);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleModal2 = () => {
    setShowModal2(!showModal2);
  };

  const closeModal2 = () => {
    setShowModal2(false);
  };

  const handleSave = () => {
    // console.log('Fecha y hora:', fechaHora);
  };

  if (!caso) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <Header />
      <br></br>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="idCaso" className="form-label">
                Id del caso:
              </label>
              <input
                type="text"
                id="idCaso"
                className="form-control"
                value={caso.id}
                disabled
              />
            </div>

            <h5 className="card-title">
              Módulo de detección/hallazgo - Editar caso
            </h5>
            <br></br>
            <div className="mb-3">
              <label>Origen del caso:</label>
              <select className="form-select" value={caso.origen}>
                <option value="value1">Hallazgo</option>
                <option value="value2">Detección</option>
              </select>
            </div>
            <div className="mb-3">
              <label>Estado</label>
              <CboTipoEstadoCaso value={caso.estadocaso} />
            </div>
            <div className="mb-3">
              <label>Área de Riesgo:</label>
              <CboAreaRiesgo value={caso.areaRiesgo} />
            </div>
            <div className="mb-3">
              <label htmlFor="descripcionCorta" className="form-label">
                Descripción corta:
              </label>
              <textarea
                id="descripcionCorta"
                className="form-control"
                value={caso.descripcion}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="descripcionCaso" className="form-label">
                Descripción del caso:
              </label>
              <textarea
                id="descripcionCaso"
                className="form-control"
                value={caso.descripcion}
              ></textarea>
            </div>
            <div className="mb-3">
              <label>Fecha y hora de ocurrencia:</label>
              <div className="datetime-container">
                <input
                  type="datetime-local"
                  value={fechaHora ? fechaHora.toISOString().slice(0, 16) : ""}
                  onChange={(e) =>
                    handleFechaHoraChange(new Date(e.target.value))
                  }
                />
              </div>
            </div>
            <br></br>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Punto de control</h5>
                <div className="mb-3">
                  <label>Aduana:</label>
                  <CboAduanas value={caso.aduana} />
                </div>
                <div className="mb-3">
                  <label>Recinto:</label>
                  <CboRecintoControl value={caso.recintocontrol} />
                </div>
                <div className="mb-3">
                  <label>Avanzada o punto de control:</label>
                  <CboPuntoControl value={caso.puntocontrol} />
                </div>
                <div className="mb-3">
                  <label>Otra avanzada o punto de control:</label>
                  <input
                    type="text"
                    id="otraAvanzada"
                    className="form-control"
                    value={caso.otropuntocontrol}
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label>Funcionario selector:</label>
              <select className="form-select" value={caso.funcionariocreador}>
                <option value="value1">Valor 1</option>
                <option value="value2">Valor 2</option>
              </select>
            </div>
            <div className="mb-3">
              <label>Funcionario detector:</label>
              <select className="form-select" value={caso.funcionariocreador}>
                <option value="value1">Valor 1</option>
                <option value="value2">Valor 2</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="me-2">Funcionario asignado:</label>
              <select
                className="form-select me-2"
                value={caso.funcionariocreador}
              >
                <option value="value1">Valor 1</option>
                <option value="value2">Valor 2</option>
              </select>
              <a href="#" className="text-decoration-none">
                Asignarme a mí (solo jefe de turno)
              </a>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Imágenes/Videos</h5>
                <button className="btn btn-primary mb-3" onClick={toggleModal}>
                  Seleccionar Imagen/Videos
                </button>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Nombre archivo</th>
                      <th>Fecha</th>
                      <th>Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Archivo1.jpg</td>
                      <td>2024-04-25</td>
                      <td>
                        <button className="btn btn-primary me-2">Ver</button>
                        <button className="btn btn-danger">Quitar</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Documentos anexos</h5>
                <button className="btn btn-primary mb-3" onClick={toggleModal2}>
                  Seleccionar Documentos Anexos
                </button>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Tipo documento</th>
                      <th>Fecha</th>
                      <th>Número</th>
                      <th>Descripción</th>
                      <th>Archivo</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Documento1</td>
                      <td>2024-04-25</td>
                      <td>12345</td>
                      <td>Descripción1</td>
                      <td>Archivo1.pdf</td>
                      <td>
                        <button className="btn btn-primary me-2">Ver</button>
                        <button className="btn btn-warning me-2">Editar</button>
                        <button className="btn btn-danger">Quitar</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <br />
            <div className="text-center">
              <button className="btn btn-sm btn-primary me-2 admin-faces-btn">
                Guardar
              </button>
              <Link to="/BuscarCaso">
                <button className="btn btn-primary admin-faces-btn">
                  Volver
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Modal2 show={showModal2} onClose={closeModal2}>
        <div className="mb-3">
          <label htmlFor="tipoDocumento" className="form-label">
            Tipo documento:
          </label>
          <select id="tipoDocumento" className="form-select">
            <option value="value1">Valor 1</option>
            <option value="value2">Valor 2</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="numeroDocumento" className="form-label">
            Número documento:
          </label>
          <input type="text" id="numeroDocumento" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="otroNumeroDocumento" className="form-label">
            Otro número documento:
          </label>
          <input
            type="text"
            id="otroNumeroDocumento"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcionDocumento" className="form-label">
            Descripción otro tipo documento:
          </label>
          <textarea
            id="descripcionDocumento"
            className="form-control"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="archivoDocumento" className="form-label">
            Seleccionar archivo:
          </label>
          <input type="file" id="archivoDocumento" className="form-control" />
        </div>
        <button className="btn btn-primary mt-3" onClick={handleSave}>
          Guardar
        </button>
      </Modal2>
      <br></br>
      <Modal show={showModal} onClose={closeModal}>
        <h2>Cargar Archivo</h2>
        <input type="file" onChange={handleFileChange} />
        {/* <button className="btn btn-primary mt-3" onClick={handleSave}>Guardar</button> */}
      </Modal>
      <br></br>
      <Footer />
    </>
  );
};

const Modal = ({ show, onClose, children }) => {
  const modalStyle = {
    position: "fixed",
    zIndex: 999,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: show ? "block" : "none",
  };

  const backdropStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 998,
    display: show ? "block" : "none",
  };

  return (
    <>
      <div
        className="modal-backdrop"
        style={backdropStyle}
        onClick={onClose}
      ></div>
      <div className="modal" tabIndex="-1" role="dialog" style={modalStyle}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Seleccionar Imagen/Videos</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{children}</div>
            <button className="btn btn-primary mt-3">Guardar</button>
          </div>
        </div>
      </div>
    </>
  );
};

const Modal2 = ({ show, onClose, children }) => {
  const modalStyle = {
    position: "fixed",
    zIndex: 999,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: show ? "block" : "none",
  };

  const backdropStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 998,
    display: show ? "block" : "none",
  };

  return (
    <>
      <div
        className="modal-backdrop"
        style={backdropStyle}
        onClick={onClose}
      ></div>
      <div className="modal" tabIndex="-1" role="dialog" style={modalStyle}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Referencia de documentos</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditarCaso;
