import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
      <Link className="navbar-brand" to="/">
        Phone Directory
      </Link>
    </nav>
  );
}
