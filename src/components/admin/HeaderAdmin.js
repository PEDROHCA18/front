// components/AdminNavbar.js

import Link from 'next/link';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const AdminNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Link href="/admin" passHref>
        <Navbar.Brand as="a">Admin Panel</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/admin/dashboard" passHref>
            <Nav.Link as="a">Dashboard</Nav.Link>
          </Link>
          <Link href="/admin/users" passHref>
            <Nav.Link as="a">Usuários</Nav.Link>
          </Link>
          <Link href="/admin/products" passHref>
            <Nav.Link as="a">Produtos</Nav.Link>
          </Link>
        </Nav>
        <Nav>
          <NavDropdown title="Configurações" id="basic-nav-dropdown">
            <Link href="/perfil" passHref>
              <NavDropdown.Item as="a">Perfil</NavDropdown.Item>
            </Link>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#logout">Sair</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AdminNavbar;
