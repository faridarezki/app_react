import React from 'react';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


const Navigation =()=>{

  return (
    <Nav>
      <Nav.Item>
      <Nav.Link as={Link} to="/" >
          Accueil
      </Nav.Link>
      </Nav.Item>

   <Nav.Item>
      <Nav.Link as={Link} to="/Affichage" >
          tableau
      </Nav.Link>
      </Nav.Item>

      <Nav.Item >
      <Nav.Link as={Link} to="/Comments/create" activestyle={{
    fontWeight: "bold",
    color: "red",
  }} >
          Créer un commentaire ☺
      </Nav.Link>
      </Nav.Item>

      <Nav.Item>
      <Nav.Link as={Link} to="/comments/delete">
          Supprimer un un commentaire
      </Nav.Link>
      </Nav.Item>

    </Nav>
    );
  }


  export default Navigation;
