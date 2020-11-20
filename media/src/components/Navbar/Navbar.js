import React from 'react'
import styled from 'styled-components';

const Navbar = () => {
    return (
        <StyledComponents>
            <div>
                <i className="fas fa-home one"></i>
                <i className="far fa-flag"></i>
                <i className="far fa-clock"></i>
                <i className="fas fa-search"></i>
            </div>
        </StyledComponents>
    )
}

export default Navbar 


const StyledComponents = styled.header`
    width: 100%;
    height: 50px;
    background-color: #fff;
    position: fixed;
    top: 0;
    box-shadow: 0 -3px 11px 0 #1e1f23;
    z-index: 999;

    div {
        max-width: 600px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-items: center;
        align-items: center;
        height: 50px;

        i {
            font-size: 18px;
            color: black;
        }

    }

    .one {
        color: blue;
        border-bottom: 3px solid blue;
    }
    

`