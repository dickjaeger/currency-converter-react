import './style.css';

const MessageBox = ({ message, error }) => {
    if (message !== "") {
        return (
            <div className={`messageBox${error ? " messageBox--error" : ""}`}>
                {message}
            </div>
        )
    }
}

export default MessageBox;