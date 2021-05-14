import React, {ChangeEventHandler, FormEventHandler, useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {actions, StoreState} from '../store';

const mapStateToProps = (state: StoreState) => ({
    codeword: state.codeword
});
const mapDispatchToProps = {
    guessWord: actions.guessWord
}
const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;

const WordInput = ({codeword, guessWord}: Props) => {

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
            <div>I'm thinking of a <strong>{codeword.length}</strong> letter word.</div>
            <input type="text" autoFocus={true} value={word} onChange={onChange}/>
        </form>
    );
}

export default connector(WordInput);
