import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, } from 'react-router-dom';

import styles from './SubHeader.module.css'

export default function SubHeader() {
  return (

    <Navbar className={styles.stynav} bg="light" variant="light">
      <Container>
        <Nav className={styles.stylednav}>
          <Nav.Link className={styles.ft} href="#home">Today's menu</Nav.Link>
          <Nav.Link className={styles.ft} href="#home">Best menu</Nav.Link>
          <Nav.Link className={styles.ft} href="features">Various</Nav.Link>
          <Nav.Link  className={styles.ft} href='http://localhost:3001/'>Specialties</Nav.Link >
        </Nav>
      </Container>
    </Navbar>
  );
}

