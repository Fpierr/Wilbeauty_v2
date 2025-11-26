import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-primary)] h-[50px]">
      <nav className="flex items-center justify-between px-5 py-[5px] h-full max-w-full">
        <div className="nav-logo">
          <a href="#">
            <img src={logo} alt="Logo" className="h-10" />
          </a>
        </div>
        <div className="absolute left-1/2 md-translate-x-1/2 md:static md:translate-x-0 md:ml-auto">
          <a 
            href="mailto:wilbeauty7@gmail.com"
            className="text-[var(--color-accent)] no-underline text-base md:text-xl font-bold hover:underline"
          >
            Contactez-nous
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;