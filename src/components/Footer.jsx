const Footer = () => {
  return (
    <footer data-theme="dark"  className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a href="#" className="link link-hover">About us</a>
        <a href="#" className="link link-hover">Contact</a>
        {/* <a href="#" className="link link-hover">Jobs</a>
        <a href="#" className="link link-hover">Press kit</a> */}
      </nav>

      <nav>
        <div className="grid grid-flow-col gap-4">
          {/* Facebook */}
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-current text-blue-600 hover:text-blue-800 transition-colors"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-current text-pink-500 hover:text-pink-700 transition-colors"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.012-4.947.071-1.545.071-2.923.336-3.995 1.408-1.072 1.072-1.337 2.45-1.408 3.995-.059 1.28-.071 1.688-.071 4.947s.012 3.667.071 4.947c.071 1.545.336 2.923 1.408 3.995 1.072 1.072 2.45 1.337 3.995 1.408 1.28.059 1.688.071 4.947.071s3.667-.012 4.947-.071c1.545-.071 2.923-.336 3.995-1.408 1.072-1.072 1.337-2.45 1.408-3.995.059-1.28.071-1.688.071-4.947s-.012-3.667-.071-4.947c-.071-1.545-.336-2.923-1.408-3.995-1.072-1.072-2.45-1.337-3.995-1.408-1.28-.059-1.688-.071-4.947-.071z"/>
              <circle cx="12" cy="12" r="3.5"/>
            </svg>
          </a>

          {/* TikTok */}
          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              fill="#fff"
              className="w-6 h-6 text-black hover:text-gray-700 transition-colors"
            >
              <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"/>
            </svg>
          </a>
        </div>
      </nav>

      <aside>
        <p>&copy; WilBeauty {new Date().getFullYear()} - All rights reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
