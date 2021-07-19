import styled from 'styled-components';
import { PageContainerStyle } from '../../src/styles/components/Page-container';
import { PageMenuStyle } from '../../src/styles/components/page-menu-container';



const Home = () => {
    return (
        <PageContainerStyle>
            <PageMenuStyle>oiqwedqewqeqweq</PageMenuStyle>

        </PageContainerStyle>
    );
};

export default Home;

export const HomePageMenuStyle = styled(PageMenuStyle)`
background-color: #850c0c;
max-width: 610px;
width:90%;
`;