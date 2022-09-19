import styled, { css } from "styled-components";

export const MessageBox = styled.div`
    background-color: #ccff99;
    padding: 30px;
    border: solid 2px #999;
    border-radius: 5px;
    text-align: center;

    ${({ error }) => error && css`
        background-color: #f8b6b6;
    `}
`