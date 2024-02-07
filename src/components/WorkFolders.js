import react from 'react';

const WorkFolders = ({sectionName}) => {
  return (
    <div className='WorkFolders'>
      <h1>Carpetas de Trabajo</h1>
      <h2>{sectionName}</h2>
      <ul>
        <li>Carpeta 1</li>
        <li>Carpeta 2</li>
      </ul>
    </div>
  );
};

export default WorkFolders;