import {StoreState} from '../store';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = (state: StoreState) => ({
    codeword: state.codeword,
    guesses: state.guesses
});
const connector = connect(mapStateToProps);
type Props = ConnectedProps<typeof connector>;

const GameOver = ({codeword, guesses}: Props) => (
    <div>
        Correct! The word I'm thinking of is <strong>{codeword}</strong>.<br />
        You guessed the word in <strong>{guesses.length}</strong> tries.
    </div>
);

export default connector(GameOver);
