import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <header className="header">
        <h3 className="title">NEWSTECH</h3>
        <nav className="navbar">
          <a href="/#">Sobre</a>
          <a href="/#">Projetos</a>
          <a href="/#">Junte-se a nós</a>
          <a href="/#">
            <button>Contato</button>
          </a>
        </nav>
      </header>
    </>
  );
}
