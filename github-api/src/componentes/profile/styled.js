
import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 200px;
    margin: 10px;
    border: 5px solid #227ed8;
`;

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 10px;
    height: 135px;
  
    
    h1{
        font-size: 24px;
        font-weight: bold;
        padding: 3px;
    }

    h3{
        font-size: 18px;
        font-weight: bold;
        padding: 3px;
    }

    h4{
        font-size: 14px;
        font-weight: bold;
        padding: 3px;
    }
`;

export const WrapperUserGeneric = styled.div`
    display: flex;
    align-items: center;
    h3{
        margin-right: 10px;
    }

    a{
        text-decoration: none;
        color: black;
        font-weight: 600;
    }
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: flex-start;
    div{
        margin: 10px;
        text-align: center;
    }

`;


