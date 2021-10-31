import { AppProps } from 'next/app';
import { wrapper } from '../redux/store/store';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <div>
            <Component {...pageProps} />
        </div>
    );
};

export default wrapper.withRedux(App);
