import {StoreState} from "../store";
import {connect, ConnectedProps} from "react-redux";

const mapStateToProps = (state: StoreState) => ({
    guesses: state.guesses
})
const connector = connect(mapStateToProps);
type Props = ConnectedProps<typeof connector>;

const WordList = ({guesses}: Props) => (
    <ul>
        {guesses.map(guess => (<li>{guess.candidate} {guess.correctLetters} {guess.presentLetters}</li>))}
    </ul>
);

export default connector(WordList);
