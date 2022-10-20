import styled, { css } from "styled-components";

export const MessageBox = styled.div`
    background-color: #83c5be;
    padding: 30px;
    border-radius: 2px;
    text-align: center;
    box-shadow: 7px 7px 9px -11px rgba(43, 45, 66, 1);

    ${({ error }) => error && css`
        background-color: #f8b6b6;
    `}
`