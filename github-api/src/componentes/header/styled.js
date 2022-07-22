import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input{
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 44px;
        padding: 8px;
        font-weight: 500px;

        &:focus{
            outline: none;
        }
    }

    button{
        background-color:  #227ed8;
        padding: 8px 16px;
        border-radius: 8px;
        margin: 0 8px;

        &:hover{
            background-color:  #225ed9;
        }

        span{
            font-weight: bold;
            color: #fff;
        }
    }

`;

