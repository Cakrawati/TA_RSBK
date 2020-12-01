import React,  { Component }  from 'react'
import styled from 'styled-components'

const Container = styled.div`
background-color: #E7D6A6;
border-radius: 20px;
box-shadow: 0px 10px 20px -10px #524B35;
color: #897D59;
position: relative;
width: 50%;
margin: auto;
margin-top: 150px;
@media screen and (max-width: 500px) {
       margin: auto;
}
`
const Image = styled.img`

  border: 1px solid #361f15;
  border-radius: 50%;
  padding: 7px;
  width: 60%;
  height: auto;
  margin: 20px;
  
`
const Title = styled.h5`
  margin: auto;
  color: #524B35;
  font-size:3vw
`

const Rowcard = styled.div
`
    display: table;
    width: 100%;
    table-layout: fixed;
    border-spacing: 0px;
    text-align: center;
    color: #524B35;
`

const ColumnCard = styled.div
`
    display: table-cell;
    text-align: center;

`
const Button = styled.button
`
    color: white;
     width: 120px;
     height: 40px;
     border:none;
     border:solid 2px white;
     border-radius: 6px;
     background: #B29843;
     font-size: 20px;
     margin: 20px 40px;
     &:hover {
        border:solid 2px black;
        cursor: pointer;
        
      }
`

export default class Fodera extends Component {
    constructor(props) {
        super(props)

        this.state = {
            beli: 0,
            nama: this.props.nama,
            harga: 294000000,
        }
    }

    TombolBeli = () => {
        this.setState({
            beli: this.state.beli+1
        })
    }
    componentDidUpdate() {
        alert(`Pembelian Fodera di Update! Pembelian Fodera : ${this.state.beli} `)
    }

    shouldComponentUpdate() {
        return window.confirm(`Anda yakin membeli Fodera?`);
    }

    render() {
        return (
    <Rowcard>
        <ColumnCard>
            <Container>
            <div> 
                <center>
                <br/><br/>
                <Title>{this.props.nama}</Title>
                </center>
                <Image src ="https://ecs7.tokopedia.net/img/cache/700/product-1/2020/9/4/1936228/1936228_70c96232-ef5b-4495-988a-df3bad6e3f5c.jpg" alt=""/>
                <p>Rp {this.state.harga}</p>
                <Button onClick= {this.TombolBeli}>Beli</Button>
                <p>Pembelian Cort : {this.state.beli}</p>
                <br/><br/>
            </div>
            </Container>
        </ColumnCard>
    </Rowcard>
        )
    }
}
