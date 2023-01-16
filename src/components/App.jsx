import { Loader } from './Loader/Loader';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
      <Loader />
      <GlobalStyle />
    </div>
  );
};
