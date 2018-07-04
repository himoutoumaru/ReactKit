import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Index from '../../components/Home/Index';

const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);



