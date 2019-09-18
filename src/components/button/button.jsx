import React from 'react';
import styled, { keyframes } from 'styled-components';

const borderRadiusAnimation1 = keyframes`
    0% {
        border-radius: 5px;
        background-color: #7874f4;
    }
    30% {
        border-radius: 10px;
        background-color: rgb(95, 30, 165);
    }
    60% {
        border-radius: 12px;
        background-color: rgb(102, 45, 160);
    }
    100% {
        border-radius: 15px;
        background-color: rgb(140, 70, 155);
    }
`;

const borderRadiusAnimation2 = keyframes`
    0% {
        border-radius: 15px;
    }
    30% {
        border-radius: 12px;
    }
    60% {
        border-radius: 10px;
    }
    100% {
        border-radius: 5px;
    }
`;

const ButtonComponent = styled.button`
    width:      ${props => props.widthButton ? props.widthButton : "250px"}
    height:     ${props => props.heightButton ? props.heightButton : "60px"};
    background: ${props => props.bgColorButton ? props.bgColorButton : "#7874f4"};
    color:      ${props => props.colorTextButton ? props.colorTextButton : "white"};
    font-size:  ${props => props.fontSize ? props.fontSize : "22px"};
    border-radius: 5px;
    :hover {
        animation: ${borderRadiusAnimation1} 0.1s linear forwards;
    }
    :not( :hover) {
        animation: ${borderRadiusAnimation2} 0.08s linear forwards;
    }
`;

const Button = (props) => {

    const { typeButton, textButton, widthButton, heightButton } = props;

    return (
        <React.Fragment>

            <ButtonComponent 
                widthButton={widthButton}
                heightButton={heightButton}
                type={typeButton}
                // disabled={disabled}
            >
                {textButton}
            </ButtonComponent>

        </React.Fragment>
    )
}

export default Button;