import React from 'react'
import "./Portfolio.css"

const PortfolioList = ({projects}) => {
  return (
    <div className="content" id="portfolio">
    <h2 className="title">Projects</h2>

    <div className="portfolio">
      {projects.map((project) => (
        <a href={project.url} key={project.id} target="_blank">
          <div className="project">
            <img src={project.imageSrc} alt={project.title} />
            <h3 className="item-title">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </a>
      ))}
    </div>
    <div className="btn-container">
    <button className="button"><span>View all</span></button>
    </div>
  </div>
  )
}

export default PortfolioList
