import styles from '../styles/globals.css';
import { wrapper } from '../../redux/store/store';

const App = ({ Component, pageProps }) => {
    return (
        <div>
            <Component {...pageProps} />
        </div>
    );
};

export default wrapper.withRedux(App);
