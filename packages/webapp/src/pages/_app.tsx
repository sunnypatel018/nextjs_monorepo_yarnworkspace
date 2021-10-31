// import styles from '../styles/globals.css';
import { AppProps } from 'next/app';
import { wrapper } from '../redux/store/store';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <div>
            <Component {...pageProps} />
        </div>
    );
};

export default wrapper.withRedux(App);
