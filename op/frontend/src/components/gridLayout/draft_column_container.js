import { connect } from 'react-redux';
import DraftColumn from './draft_column';
import {fetchDrafts} from '../../actions/drafts';
import {modalOn, modalOff} from '../../actions/modal';
import {selectOp} from '../../actions/select_op';


const mapStateToProps = (state, ownProps) => {
    
    return {
        selected: ownProps.selected,
        drafts: state.drafts
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
    fetchDrafts:(id) => dispatch(fetchDrafts(id)),
    
}}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DraftColumn);