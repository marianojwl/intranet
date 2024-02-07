import react from 'react';

const WorkDocuments = ({sectionName}) => {
  return (
    <div className='WorkDocuments'>
      <h1>Documentos de Trabajo</h1>
      <h2>{sectionName}</h2>
      <ul>
        <li>Documento 1</li>
        <li>Documento 2</li>
        <li>Documento 3</li>
      </ul>
    </div>
  );
};

export default WorkDocuments;