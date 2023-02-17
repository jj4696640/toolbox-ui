import React from 'react'

function Footer() {
  return (
    <footer className="bg-secondary">
    <div className="d-flex justify-content-between p-2">
      <div className="p-2 text-white fw-bold">&copy; {new Date().getFullYear()} - Manuree Templates</div>
      <div className="d-flex justify-content-between align-items-center">
        <i className="bi bi-github" style={{width: "24px", height: "24px"}}></i>
        <i className="bi bi-twitter" style={{width: "24px", height: "24px"}}></i>
        <i className="bi bi-linkedin" style={{width: "24px", height: "24px"}}></i>
      </div>
    </div>
  </footer>
  )
}

export default Footer