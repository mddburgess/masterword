import {ChangeEventHandler, FormEventHandler, useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {actions} from '../store';

const mapDispatchToProps = {
    guessWord: actions.guessWord
}
const connector = connect(undefined, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;

const WordInput = ({guessWord}: Props) => {

    const [word, setWord] = useState("");

    const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setWord(event.target.value);
    }

    const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        guessWord(word);
        setWord("");
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" autoFocus={true} value={word} onChange={onChange}/>
        </form>
    );
}

export default connector(WordInput);
