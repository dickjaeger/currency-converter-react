import { MessageBox as StyledMessageBox } from "./styled";

const MessageBox = ({ message, error }) => {
    if (message !== "") {
        return (
            <StyledMessageBox error={error}>
                {message}
            </StyledMessageBox>
        )
    }
}

export default MessageBox;