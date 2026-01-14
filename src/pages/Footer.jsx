export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0a0f1c] to-[#050814] text-gray-300 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Sobre */}
        <div className="mb-6 md:mb-0 text-center md:text-left max-w-md">
            <h2 className="text-2xl font-bold mb-2">Contactos</h2>
            <h3 className="mt-2">jony.port25@gmail.com</h3>
        </div>

        {/* redes */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/joaoRosa25"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.205 11.385c.6.113.82-.258.82-.577 0-.285-.01-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.774.42-1.305.763-1.606-2.665-.303-5.467-1.333-5.467-5.933 0-1.31.467-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 016 0c2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.244 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.626-5.48 5.922.43.37.81 1.096.81 2.21 0 1.595-.014 2.882-.014 3.273 0 .32.216.694.825.576A12.004 12.004 0 0024 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-rosa-7b8348325/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.1 8h5v13h-5V8zm7.5 0h4.8v1.9h.1c.67-1.3 2.3-2.7 4.8-2.7 5.1 0 6 3.3 6 7.6V21h-5v-6.5c0-1.6 0-3.7-2.3-3.7-2.3 0-2.7 1.8-2.7 3.6V21h-5V8z" />
            </svg>
          </a>

        </div>
      </div>
      <div className="mt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} João Rosa. All rights reserved.
      </div>
    </footer>
  );
}
