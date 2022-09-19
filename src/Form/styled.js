import styled from "styled-components";

export const Fieldset = styled.fieldset`
    background-color: #fff;
    border: solid 2px #999;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
`

export const Legend = styled.legend`
    background-color: chocolate;
    border-radius: 5px;
    padding: 10px;
    color: #fff;
`

export const FormRow = styled.p`
    margin-left: 5%;
`

export const List = styled.ul`
    list-style-type: none;
`

export const ListItem = styled.li`
    margin: 20px;
`

export const FormField = styled.input`
    border: solid 2px chocolate;
    border-radius: 5px;
    padding: 5px;
    margin: 0 15px;
`

export const Button = styled.button`
    display: block;
    background-color: chocolate;
    color: #fff;
    border-radius: 5px;
    border: none;
    padding: 10px;
    margin: 20px auto 0;
    width: 40%;

    &:hover {
        background-color: #e07529;
    }

    &:active {
        background-color: #e48744;
    }
`