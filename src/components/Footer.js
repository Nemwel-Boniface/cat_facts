import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Cat Fact Finder</h5>
            <p>
              Discover amazing facts about cats and enhance your knowledge about our feline friends.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="https://github.com/Nemwel-Boniface/cat_facts" className="text-dark" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              </li>
              <li>
                <a href="https://your-live-demo-url.com" className="text-dark" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled mb-0">
              <li>
              <span className="text-dark">Created with <i className="fa fa-heart text-danger"></i> by <a href="https://www.linkedin.com/in/nemwel-nyandoro/" className="text-dark" target="_blank" rel="noopener noreferrer">Nemwel</a></span>
              </li>
              <li>
                <a href="mailto:nemwelnyandoro20@gmail.com" className="text-dark">nemwel@gmail.com.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} Cat Fact Finder. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer