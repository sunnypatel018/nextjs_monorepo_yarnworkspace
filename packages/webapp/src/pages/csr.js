// import useSWR from 'swr';

// const name = 'Sunny patel, this is client side rendering';
// const Csr = () => {
//     const { name, error } = useSWR('');

//     if (error) return <div>There was an error</div>;
//     if (!name) return <div>Still loading.... </div>;

//     return <div>Name : {name}</div>;
// };

// export default Csr;
const SSR = typeof window === 'undefined';

export default function index() {
    return <div>{!SSR ? <p>Client side rendering</p> : null}</div>;
}
