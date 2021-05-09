import {FunctionComponent, ReactElement} from 'react';
import {Provider} from 'react-redux';
import store from '../store';
import {render, RenderOptions} from '@testing-library/react';

const ProvidersWrapper: FunctionComponent = ({children}) => (
    <Provider store={store}>
        {children}
    </Provider>
);

const renderWrapped = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
    render(ui, {wrapper: ProvidersWrapper, ...options});

export * from '@testing-library/react';
export {renderWrapped as render};
