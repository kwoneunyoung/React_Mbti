import {  useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Result from './Result'

function Question(props) {
    let [cnt, setCnt] = useState(0)  // 넘기는 숫자
    let [fixNum] = useState(0)       // 고정 답변1
    let [fixNum1] = useState(1)      // 고정 답변2
    let [score, setScore] = useState(0)        // 점수(1은 1점 2는 2)   
  

    return (

        <Container className='contanier'>
            {
                cnt == 21? <Result /> : 
                <Row>
                    <Col className='main-title' md={{ span: 10, offset: 1 }}>{ props.mbti[cnt].ask }</Col>
                    <Row className='main-content'>
                        <Col md={{ span: 10, offset: 1 }} onClick={ ()=>{
                            setCnt(cnt += 1)
                            setScore(score += 1)
                        } }>{ props.mbti[cnt].ans[fixNum] }</Col>
                        <Col md={{ span: 10, offset: 1 }} onClick={ ()=>{
                            setCnt(cnt += 1)
                            setScore(score += 2)
                        }}>{ props.mbti[cnt].ans[fixNum1] }</Col>
                    </Row>
                </Row> 
            }
        </Container>
            
    )
}

export default Question