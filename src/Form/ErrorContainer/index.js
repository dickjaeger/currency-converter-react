import { Container, Image } from './styled.js'
import loadingImage from './loading.gif'

const StateContainer = ({error}) => (
    <Container>
        {!!error ? error : <Image src={loadingImage} alt="Ładowanie..."/>}
    </Container>
);

export default StateContainer;