import {actions} from '../store';
import {connect, ConnectedProps} from 'react-redux';

const mapDispatchToProps = {
    startNewGame: actions.startNewGame
};
const connector = connect(undefined, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;

const NewGameButton = ({startNewGame}: Props) => (
    <button onClick={() => startNewGame()}>New Game</button>
);

export default connector(NewGameButton);
