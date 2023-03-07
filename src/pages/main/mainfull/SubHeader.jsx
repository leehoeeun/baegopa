import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ButtonKeeper from '../../recipe/components/ButtonKeeper';
import ViewCount from '../../recipe/components/ViewCount';
import RecipeDetail from '../../recipe/RecipeDetail';

import styles from './SubHeader.module.css';

export default function SubHeader() {
  return (

      <Navbar className={styles.stynav} bg="light" variant="light">
        <Container>
          <Nav className={styles.stylednav}>
            <Nav.Link className={styles.ft} as={Link} to="/recipe">Today's menu</Nav.Link>
            <Nav.Link className={styles.ft} as={Link} to="/best">Best menu</Nav.Link>
            <Nav.Link className={styles.ft} as={Link} to="/search">Recipes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

  );
}
