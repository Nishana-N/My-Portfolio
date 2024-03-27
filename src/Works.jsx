import React from 'react'
import './works.css'
import Card from 'react-bootstrap/Card';
import data from "../src/Data/Index.json"

const Works = () => {
  return (
    <section id="works">
      <h2 className='worksTitle'>My Projects</h2>
      <span className="workDesc">I take in paying attention to the smallest details and making sure that my work is pixel project. I am excited to bring my skills and experience to help buisinesses achieve their goals and create a strong online presence.</span>
      <div className="worksImgs" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(18rem, 1fr))", gap: "16px" }}>
        {data?.project?.map((item, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.src} style={{ width: "280px" }} />
            <Card.Body>
              <Card.Title style={{ color: "black", marginTop: "1rem", textAlign: "center" }}>{item.title}</Card.Title>
              <Card.Text style={{ color: "black", marginTop: "1rem",marginBottom:"1rem" }}>
                {item.description}
              </Card.Text>

            </Card.Body>
          </Card>
        ))}


      </div>

      {/* <button className="worksBtn">See More</button> */}
    </section>
  )
}

export default Works