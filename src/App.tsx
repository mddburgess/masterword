import React, {useEffect} from 'react';
import WordInput from './components/WordInput';
import WordList from './components/WordList';
import {actions, StoreState} from './store';
import {connect, ConnectedProps} from 'react-redux';
import GameOver from './components/GameOver';

const mapStateToProps = (state: StoreState) => ({
    gameOver: state.gameOver
});
const mapDispatchToProps = {
    startNewGame: actions.startNewGame
}
const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;

const App = ({gameOver, startNewGame}: Props) => {
    useEffect(() => {
        startNewGame();
    }, [startNewGame]);

    return (
        <div>
            {gameOver ? <GameOver /> : <WordInput />}
            <WordList />
        </div>
    );
};

export default connector(App);
