import styled from "styled-components";

export const Form = styled.form`
    text-align: center;
    background-color: #83c5be;
    border-radius: 2px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 7px 7px 9px -11px rgba(43, 45, 66, 1);
`

export const FormRow = styled.p`
    margin: 15px;
`

export const FormField = styled.input`
    border: solid 2px #e29578;
    border-radius: 2px;
    padding: 5px;
    margin: 0 15px;
    box-shadow: 7px 7px 9px -11px rgba(43, 45, 66, 1);
`

export const Button = styled.button`
    display: block;
    background-color: #e29578;
    border-radius: 2px;
    border: none;
    padding: 10px;
    margin: 20px auto 0;
    width: 40%;
    box-shadow: 7px 7px 9px -11px rgba(43, 45, 66, 1);

    &:hover {
        filter: brightness(1.05);
    }

    &:active {
        filter: brightness(1.1);
    }
`