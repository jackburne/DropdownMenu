import React, { useState } from 'react';
// Importing all the svg's that we are going to need from inside the ./icons folder
// We import them as ReactComponent's and name then with CamelCase, we can then
// use them in a JSX element (for example, to use ArrowIcon, we would do: { <ArrowIcon> } )
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';


// Main function of the app that actually get's displayed on the webpage (As it is the default export)
function App() {
  // Wheen called, we can do any logic we need above in the function, but what get's rendered to the webpage is in the
  // return of the function. you can also only have ONE set of html tags on the top level, so a good idea is put 
  // everything inside a <div>
  return (
    // Using our custom Navbar component, from the function below 
    <Navbar>
      
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />

      <NavItem icon={<CaretIcon />}>

        <DropdownMenu/>

      </NavItem>

    </Navbar>
  );
}

// A react component declared as a function for the Nav bar at the top of the site
function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> { props.children }</ul>
    </nav>
  )
}


// React component for the individual items, or buttons, that will be on the navbar
function NavItem(props) {

  // useState returns an array of variables, so we use two const's to hold the two values as seperate variables
  const [open, setOpen] = useState();

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  )
}

function DropdownMenu() {

  function DropDownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        
        {props.children}

        <span className="icon-right">{props.rightIcon}</span>

      </a>
    )
  }

  return (
    <div className="dropdown">
      <DropDownItem>My Profile</DropDownItem>
      <DropDownItem
        leftIcon={<CogIcon />}
        rightIcon={<ChevronIcon />}>
      </DropDownItem>
    </div>
  )
}

export default App;
