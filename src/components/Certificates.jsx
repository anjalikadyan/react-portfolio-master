import React from 'react';
import cert1 from "../assets/certification/1.png";
import cert2 from "../assets/certification/2.png";
import cert3 from "../assets/certification/3.png";
import cert4 from "../assets/certification/4.png";
import cert5 from "../assets/certification/5.png";

const Certificates = () => {
  const certificates = [
    { 
      name: "ChatGPT Made Easy: AI Essentials for Beginners | Udemy", 
      date: "Aug’ 25", 
      link: "https://drive.google.com/file/d/1wmeT0ksdrWDxW8ocmIgI72IVgEfxgH8a/view?usp=sharing",
      img: cert1
    },
    { 
      name: "Indexing Design in MongoDB", 
      date: "Jun’ 25", 
      link: "https://drive.google.com/file/d/1rC1X5HopXvSN5FJTMAaOvSt-oUi52HzL/view?usp=sharing",
      img: cert2
    },
    { 
      name: "Java (Basics) | Iamneo", 
      date: "May’ 25", 
      link: "https://drive.google.com/file/d/1vBKP5-MOMRY-uNepainozvegzQpKYkaT/view?usp=sharing",
      img: cert3
    },
    { 
      name: "DSA with C | CSE Pathshala", 
      date: "Mar’ 24", 
      link: "https://drive.google.com/file/d/1q9pNNUBzCz21WAJYbM-c6AmrFtSgGdzF/view?usp=sharing",
      img: cert4
    },
    { 
      name: "Data Analytics Essentials Summer Training", 
      date: "Jul’ 25", 
      link: "https://drive.google.com/file/d/1ujTNt2e-IGNmo9EvxRkR-cERuvMvu6my/view?usp=sharing",
      img: cert5
    },
  ];

  return (
    <div id="certificates" className="page-container">
      <h2>My Certificates</h2>
      <section>
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <img src={cert.img} alt={cert.name} className="cert-image" />
            <div className="cert-info">
              <h3>{cert.name}</h3>
              <p>{cert.date}</p>
            </div>
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="view-btn"
            >
              View Certificate
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Certificates;
