import react from 'react';
import WorkDocuments from './WorkDocuments';
import WorkFolders from './WorkFolders';
import SideBar from './SideBar';

const Section = ({name}) => {
  return (
    <div className='Section'>
      <h1>{name}</h1>
      <SideBar sectionName={name} />
      
    </div>
  );
};

export default Section;