export function Footer() {
    return (
      <footer className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        <p>
          Built with ❤️ using GitHub API |{" "}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-white"
          >
            GitHub
          </a>
        </p>
        <p className="mt-1">© {new Date().getFullYear()} GitHub Metrics App</p>
      </footer>
    );
  }
  