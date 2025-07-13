import React from "react";
import "./Portfolio.css";

const projects = [
  {
    title: "Online Food ordering App",
    description: "A simple and responsive web application that allows users to browse a menu, add food items to their cart, and place an order. Built using HTML, CSS, and JavaScript, this project focuses on user-friendly design and interactive UI without any backend integration.Through this system ,we can register restaurents and Delivery persons ",
    link: "https://github.com/Dhanuka2002/Food-4U.git",
  },
  {
    title: "Research Confrence Management System",
    description: "This is a simple and user-friendly Research Conference Management System built using HTML, CSS, and JavaScript. It helps streamline the basic workflow of a research conference by allowing users to register, submit research papers, and view conference details.",
    link: "https://github.com/Dhanuka2002/Reasearch-Conference-Management-System.git",
  },
  {
    title: "StopWatch",
    description: "The Stopwatch React App is a simple and responsive timer application built using React. It allows users to start, pause, resume, and reset a stopwatch with real-time updates.and reset a stopwatch with real-time updates.this project showcases the use of React's state management and component lifecycle methods to create interface.",
    link: "https://github.com/Dhanuka2002/StopWatch.git",
  },
];

function Portfolio() {
  return (
    <section id="MyPortfolio" className="portfolio-section">
      <h2>My Projects</h2>
      <div className="portfolio-cards">
        {projects.map((project) => (
          <div className="portfolio-card styled-card" key={project.title}>
            <div className="portfolio-card-header">
              <h3>{project.title}</h3>
            </div>
            <div className="portfolio-card-body">
              <p>{project.description}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-btn styled-btn"
            >
              <svg
                height="20"
                width="20"
                viewBox="0 0 16 16"
                fill="currentColor"
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
