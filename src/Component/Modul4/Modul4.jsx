import React, {useState, useEffect, useReducer, Component} from "react";
import styled from 'styled-components';

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

const initialCort = 0

const reducer = (stockCort, beliCort) => {
    switch (beliCort) {
        case 'beli' : return stockCort + 1
        default : return stockCort
    }
}

const Modul4 = () => {
    const [stockFender, setStockFender] = useState (3);
    const [stockYamaha, setStockYamaha] = useState (6);
    const [stockIbanez, setStockIbanez] = useState (9);
    const [disabledFender, setDisabledFender] = useState(false);
    const [statusFender, setStatusFender] = useState("Beli");
    const [disabledYamaha, setDisabledYamaha] = useState(false);
    const [statusYamaha, setStatusYamaha] = useState("Beli");
    const [disabledIbanez, setDisabledIbanez] = useState(false);
    const [statusIbanez, setStatusIbanez] = useState("Beli");
    const [count, dispatch] = useReducer(reducer, initialCort);

    const tombolBeliFender = () => {
        setStockFender(stockFender - 1);
        if (stockFender === 1) {
            setDisabledFender(true);
            setStatusFender("Habis");
        }
    }

    const tombolBeliYamaha = () => {
        setStockYamaha(stockYamaha - 1);
        if (stockYamaha=== 1) {
            setDisabledYamaha(true);
            setStatusYamaha("Habis");
        }
        
    }

    const tombolBeliIbanez = () => {
        setStockIbanez(stockIbanez - 1);
        if (stockIbanez === 1) {
            setDisabledIbanez(true);
            setStatusIbanez("Habis");
        }
        
    }

    useEffect(() => {
        if (stockFender > -1 && stockFender < 3) {
            alert(`Peringatan dengan useEffect! Pembelian Fender berhasil`);
        }
    }, [stockFender]);
    useEffect(() => {
        if (stockYamaha > -1 && stockYamaha < 6) {
            alert(`Peringatan dengan useEffect! Pembelian Yamaha berhasil`);
        }
    }, [stockYamaha]);
    useEffect(() => {
        if (stockIbanez > -1 && stockIbanez < 9) {
            alert(`Peringatan dengan useEffect! Pembelian Ibanez berhasil`);
        }
    }, [stockIbanez]);

    return (
    <Rowcard>
        <ColumnCard>
            <Container>
                <div>
                <center>
                <br/><br/>
                <Title>FENDER STRATOCASTER</Title>
                <Image src="https://cf.shopee.co.id/file/d036aa2dea20bfcedc396a993b3715d3" alt=""/>
                <p></p>
                <Button onClick={tombolBeliFender} disabled={disabledFender}>{statusFender}</Button>
                <p></p>
                <p>Jumlah Stock : {stockFender}</p>
                <br/><br/>
                </center>
                </div>
            </Container>
            <Container>
                <div>
                <center>
                <br/><br/>
                <Title>Yamaha Pasifica</Title>
                <Image src="https://cf.shopee.co.id/file/8b5d3eb37bb20e64025dfe4946695ffe" alt=""/>
                <p></p>
                <Button onClick={tombolBeliYamaha} disabled={disabledYamaha}>{statusYamaha}</Button>
                <p></p>
                <p>Jumlah Stock : {stockYamaha}</p>
                <br/><br/>
                </center>
                </div>
            </Container>
            <Container>
                <div>
                <center>
                <br/><br/>
                <Title>IBANEZ ELECTRIC</Title>
                <Image src="https://ecs7.tokopedia.net/img/cache/700/product-1/2019/12/31/24288580/24288580_04faff4d-3aa1-4128-a316-9e4355d201f6_1237_1237" alt=""/>
                <p></p>
                <Button className="Button2" onClick={tombolBeliIbanez} disabled={disabledIbanez}>{statusIbanez}</Button>
                <p></p>
                <p>Jumlah Stock : {stockIbanez}</p>
                <br/><br/>
                </center>
                </div>
            </Container>
            <Container>
                <div>
                <center>
                <br/><br/>
                <Title>CORT GUITAR</Title>
                <Image src="https://mg.co.id/wp-content/uploads/2020/03/cort-x300-blb-600x600.jpg" alt=""/>
                <p></p>
                <Button onClick={()=>dispatch('beli')}>Beli</Button>
                <p></p>
                <p>Pembelian Cort : {count}</p>
                <br/><br/>
                </center>
                </div>
            </Container>
        </ColumnCard>
    </Rowcard>
    )
}

export default Modul4