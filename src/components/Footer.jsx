function Footer() {
  return <footer className="page-footer">
  <div className="footer-copyright">
    <div className="container">
    © {new Date().getFullYear()} Copyright Text
    <a className="grey-text material-icons text-lighten-4 right My-git" href="https://github.com/BogdanMarynenko/React-Shop" target="_blank" rel="noreferrer">reply<i>MY GIT</i></a>
    </div>
  </div>
</footer>
}

export {Footer}