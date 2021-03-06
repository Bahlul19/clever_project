import React from 'react'
import styled from 'styled-components';

function Section() {
    return (
        <Wrap>
            <ItemText>
                <h1>Model S</h1>
                <p>Order online touchless delivery</p>
            </ItemText>

            <Buttons>
            <ButtonGroup>

                <LeftButton>
                    Custom Order
                </LeftButton>

                <RightButton>
                    Existing Inventory
                </RightButton>

            </ButtonGroup>
            </Buttons>
            <DownArrow src="/images/down-arrow.svg" />
        </Wrap>
    )
}

export default Section;

const Wrap =  styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image : url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content : space-between;
    align-items: center;

`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
`

const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    widht: 256px;
    color:white;
    display: flex:
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-tranform: uppercase;
    font-size: 12px;
    margin-left: 23px;
    cursor: pointer;
    margin:8px;
`

const RightButton =  styled(LeftButton)`
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x: hiddem;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`
`