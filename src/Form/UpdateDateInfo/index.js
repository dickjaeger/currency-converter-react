import { Container } from './styled.js';

const UpdateDateInfo = ({ updateRatesDate }) => (
    <Container>
        <p>Kursy walut zostały zaktualizowane w dniu <strong>{updateRatesDate}</strong></p>
    </Container>
)

export default UpdateDateInfo;