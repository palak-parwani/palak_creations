import { Col, Row } from 'react-bootstrap'

const Flat999 = () => {
  return (
    <>
    <div className='standard-padding'>
        <h1 className='heading'> FLAT 999 FLAT 50%</h1>
        <Row>
            <Col md={3}>
                <div>
                    <img src="/assets/suit1.jpg" alt="" className='w-100 h-100'/>
                </div>
            </Col>
            <Col md={3}>
                <div>
                    <img src="/assets/suit1.jpg" alt="" className='w-100 h-100'/>
                </div>
            </Col>
            <Col md={3}>
                <div>
                    <img src="/assets/suit1.jpg" alt="" className='w-100 h-100'/>
                </div>
            </Col>
            <Col md={3}>
                <div>
                    <img src="/assets/suit1.jpg" alt="" className='w-100 h-100'/>
                </div>
            </Col>
        </Row>
    </div>
    </>
  )
}

export default Flat999