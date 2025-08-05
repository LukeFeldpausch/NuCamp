
import { Container } from 'reactstrap';
import CampsitesList from '../feature/campsites/CampsitesList';
import SubHeader from '../components/SubHeader';

const CampsitesDirectoryPage = () => {
   
    

    return(
        <Container>
            <SubHeader current={campsite.name} detail={true} />
           <CampsitesList />
        </Container>

    );
};

export default CampsitesDirectoryPage;