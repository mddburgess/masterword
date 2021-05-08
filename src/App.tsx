import React from 'react';
import WordInput from "./components/WordInput";
import WordList from "./components/WordList";
import {Provider} from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <WordInput/>
                <WordList/>
            </div>
        </Provider>
    );
}

export default App;
