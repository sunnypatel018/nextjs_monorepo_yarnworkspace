import Basic from '@monorepo-nextjs/library/components';
import Link from 'next/link';
import Csr from './csr';

const simple = () => {
    return (
        <>
            <div>Hello World</div>
            <Basic />
            <Csr />
        </>
    );
};

export default simple;
