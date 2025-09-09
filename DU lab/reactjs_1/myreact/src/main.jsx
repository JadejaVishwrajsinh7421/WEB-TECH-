import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'

// Layout Component
function Layout() {
  return (
    <>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Nested Routes */}
      <Outlet />

      <div className="card">
        <div className="card-header">Footer</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional content.
          </p>
        </div>
      </div>
    </>
  )
}

// Pages
function Home() {
  return <h1>Home Page</h1>
}

function About() {
  return <h1>About Page</h1>
}

function Contact() {
  return <h1>Contact Page</h1>
}

// Main Render
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
