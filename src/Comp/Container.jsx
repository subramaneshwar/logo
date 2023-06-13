import React from 'react'
import { Container } from 'react-bootstrap'

function Containers() {
    return (
        <Container className='d-flex   mt-3' >
            <Container className='ml-2'>
                <h1 className='display-2 fw-bold'>Header <br /> Footer</h1>
                <p className='fs-3'>3Duis ultricies lacus sed turpis <br /> tincidunt id aliquet risus. <br /> Bibendum est ultricies integer <br />
                    quis auctor.</p>
                <div>
                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSr3pUn88wK79iN-4zjeAGjagXy5nN8q15m_37niNyp_fjFqJdO" alt="" style={{height:"150px"}}/>
                </div>
            </Container>
            <Container className='mr-5'>
                <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s13123-c6-sunglasses_25may1983.jpg" alt='' style={{ width: "650px",height:"500px" }} />
            </Container>
        </Container>

    )
}

export default Containers