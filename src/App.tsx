import React, {useEffect} from 'react';
import WordInput from './components/WordInput';
import WordList from './components/WordList';
import {actions, StoreState} from './store';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = (state: StoreState) => ({
    codeword: state.codeword
})
const mapDispatchToProps = {
    startNewGame: actions.startNewGame
}
const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;

const App = ({codeword, startNewGame}: Props) => {
    useEffect(() => {
        startNewGame();
    }, [startNewGame]);

    return (
        <div className="App">
            I'm thinking of a <strong>{codeword.length}</strong> letter word.
            <WordInput />
            <WordList />
        </div>

    );
};

export default connector(App);
