import { connect } from 'react-redux';
import ToDoGroup from '../components/ToDoGroup';

const mapStateToProps = state => ({
    toDos: state.toDos
});

const ToDoGroupContainer = connect(mapStateToProps)(ToDoGroup);

export default ToDoGroupContainer;