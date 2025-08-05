import { Col } from 'reactstrap';
import { Partner } from './features/partners/Partner';
import { selectAllPartners } from './features/partners/partnersSlice';
import { useSelector } from 'react-redux'; 
import Error from '../../components/Error';
import Loading from '../../components/Loading';


const PartnerList = () => {
    const partners = useSelector(selectAllPartners);
    const isLoading = useSelector((state) => state.partners.isLoading);
    const errMsg = useSelector((state) => state.partners.errMsg);
    return isLoading ? (
        <Loading />
    ) : errMsg ? (
        <Error errMsg={errMsg} />
    ) : (
        <Col className='mt-4'>
            <Row>
                {partners.map((partner) => {
                    return (
                        <div className='d-flex mb-5' key={partner.id}>
                            <Partner partner={partner} />
                        </div>
                    );
                })}
            </Row>
        </Col>
    );

export default PartnerList;