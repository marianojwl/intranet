// SideBar.js
import React, { useState } from 'react';
import './SideBar.css';

const SideBar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`sidebar ${expanded ? 'expanded' : ''}`}>
      <div className="nav flex-column">
        <a className="sidebar-toggle" onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M339 314.9L175.4 32h161.2l163.6 282.9zm-137.5 23.6L120.9 480h310.5L512 338.5zM154.1 67.4L0 338.5L80.6 480L237 208.8z"/></svg>
          {expanded ? ' Documentos de Trabajo' : ''}
        </a>
        <a href="#" className={`${!expanded && 'd-none'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M14.727 6.727H14V0H4.91c-.905 0-1.637.732-1.637 1.636v20.728c0 .904.732 1.636 1.636 1.636h14.182c.904 0 1.636-.732 1.636-1.636V6.727zm-.545 10.455H7.09v-1.364h7.09v1.364zm2.727-3.273H7.091v-1.364h9.818zm0-3.273H7.091V9.273h9.818zM14.727 6h6l-6-6z"/></svg>
          Link 2
        </a>
        <a href="#" className={`${!expanded && 'd-none'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.75 9h2.39L19 14h-2.95L13.5 9.46M18.3 17h-5.55l1.4-2.5h5.12l.26.46M11.5 17l-1.1-2.14l2.84-4.96l1.5 2.66L12.25 17M20 6h-8l-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"/></svg>
          Carpeta
        </a>
      </div>
    </div>
  );
};

export default SideBar;
