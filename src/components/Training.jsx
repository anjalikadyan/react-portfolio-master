import React from 'react';

const Training = () => {
  const training = [
    {
      title: "Data Analytics Essentials Summer Training",
      institution: "Lovely Professional University",
      date: "Jun’ 25 – July’ 25",
      link: "https://drive.google.com/file/d/1Q_6UYlphJ1OC0OmboLIZ0FE3-f_PBKgE/view?usp=sharing",
      description: [
        "Performed data cleaning, preprocessing, and transformation to prepare datasets for accurate analysis and visualization.",
        "Conducted exploratory data analysis (EDA) on retail sales data to uncover trends, customer behavior patterns, and business insights.",
        "Designed and developed interactive dashboards to support data-driven decision making and improve insight communication.",
      ],
    },
  ];

  return (
    <div id="training" className="page-container">
      <h2>My Training</h2>
      <section>
        {training.map((train, index) => (
          <div key={index} className="training-card">
            <div className="train-header">
              <h3>{train.title}</h3>
              <p className="institution">{train.institution}</p>
              <p className="date">{train.date}</p>
            </div>
            <ul className="train-desc">
              {train.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            <a 
              href={train.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="view-btn"
              style={{marginTop: "2rem", display: "inline-block"}}
            >
              View Training Certificate
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Training;
