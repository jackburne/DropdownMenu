import React from 'react';

function App() {
  return (
    <Navbar>
      <NavItem icon="A" />
      <NavItem icon="B" />
      <NavItem icon="C" />
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> { props.children }</ul>
    </nav>
  )
}


function NavItem(props) {
  return (
    <li className="nav-item">
      <a href="#" className="icon-button">
        {props.icon}
      </a>
    </li>
  )
}
export default App;
