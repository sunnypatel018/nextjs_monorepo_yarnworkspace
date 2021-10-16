import Basic from '@monorepo-nextjs/library/components';
import Link from 'next/link';

const simple = () => {
    return (
        <>
            <div>Hello World</div>
            <Basic />
            <div>
                <Link href='./csr'>
                    <button>Server side rendering</button>
                </Link>{' '}
            </div>
        </>
    );
};

export default simple;
