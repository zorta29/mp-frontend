import React from 'react'
import { Row , Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <>
   <Row className="mt-5 align-items-center justify-content-between w-100">
    <Col></Col>
    <Col lg={5}>
       <h1 style={{fontSize:'40px', color:"violet"}}>Welcome to <span className='text-warning'>Media-Player</span></h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dignissimos. Consectetur soluta eius vel, enim saepe quos sunt in sequi ea deleniti veniam sit voluptates tenetur dolores sapiente voluptas explicabo!
       Labore odio itaque eius sit assumenda similique eum natus molestiae dolorum ipsum error corrupti ex exercitationem, ratione expedita, culpa, facere dignissimos veritatis. Magni aperiam nulla recusandae nihil molestias laboriosam qui!</p>
        <button onClick={()=>navigateByUrl('/home')} className='btn btn-info mt-4'>Get Started</button>
    </Col>
    <Col lg={5}>
      <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="" />
    </Col>
    <Col></Col>
   </Row>

   <div className='container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column'>
    <h3 className='text-warning'>Features</h3>
    <div className='container mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
   <Card style={{ width: '22rem' }} className='p-4 bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/0c/e9/d2/0ce9d222a4ac14ac1ea08ba70defb376.gif" />
      <Card.Body>
        <Card.Title className='text-primary'>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>

   <Card style={{ width: '22rem' }} className='p-4 bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/16/75/fe/1675fea4453dcfb6984bafa143a609cc.gif" />
      <Card.Body>
        <Card.Title className='text-primary'>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>

   <Card style={{ width: '22rem' }} className='p-4 bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/ed/18/71/ed1871f29fb88bfb04704f48f8e36308.gif" />
      <Card.Body>
        <Card.Title className='text-primary'>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>

   </div>
   </div>

   <div className='container border rounded p-5 border-light mb-5 d-flex align-item-center justify-content-between w-100'>
   <div className='col-lg-5'>
    <h4 className='text-warning'>Simple,Powerful & Fast</h4>
    <h6 className='mb-5 mt-3'><span className='text-warning fw-border'>Play Everything</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum harum eveniet eaque non asperiores molestias accusantium ab iure incidunt, deserunt nostrum deleniti rem tenetur aliquam earum. Sequi dignissimos non aspernatur.</h6>
    
    <h6 className='mb-5 mt-3'><span className='text-warning fw-border'>Categorize Video</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum harum eveniet eaque non asperiores molestias accusantium ab iure incidunt, deserunt nostrum deleniti rem tenetur aliquam earum. Sequi dignissimos non aspernatur.</h6>
    
    <h6 className='mb-5 mt-3'><span className='text-warning fw-border'>Managing Videos</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum harum eveniet eaque non asperiores molestias accusantium ab iure incidunt, deserunt nostrum deleniti rem tenetur aliquam earum. Sequi dignissimos non aspernatur.</h6>
   </div>
   <div className='video col-lg-5'>
   <iframe width="560" height="400" src="https://www.youtube.com/embed/T0uZRoSbEh0?si=T6ZMFMkGJtzcquWv" title="YouTube video player" 
   frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
   referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>   
   </div>
   </div>
   </>
  )
}

export default LandingPage
