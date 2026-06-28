const NAV_LINKS: { href: string; label: string }[] = [
  { href: '#hero', label: 'Home' },
  { href: '#dashboard', label: 'Dashboard' },
  { href: '#resume', label: 'Resume' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar container" aria-label="Primary">
        <a href="#hero" className="logo">
          Anahita Bagheri Kalhor
        </a>
        <ul className="nav-list">
          {NAV_LINKS.map((link) => (
            <li className="nav-item" key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
