// import useSWR from 'swr';

// const name = 'Sunny patel, this is client side rendering';
// const Csr = () => {
//     const { name, error } = useSWR('');

//     if (error) return <div>There was an error</div>;
//     if (!name) return <div>Still loading.... </div>;

//     return <div>Name : {name}</div>;
// };

// export default Csr;

// ------------------------------------------------------

// const SSR = typeof window === 'undefined';

// export default function index() {
//     return <div>{!SSR ? <p>Client side rendering</p> : <p>SSR</p>}</div>;
// }

// ------------------------------------------------------

// import { useState, useEffect } from 'react';
// import Link from 'next/link';

// const ToDoPage = () => {
//     const [toDos, setToDos] = useState();
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//         setIsLoading(true);
//         fetch('https://jsonplaceholder.typicode.com/todos/')
//             .then((response) => response.json())
//             .then((data) => {
//                 setToDos(data);
//                 setIsLoading(false);
//             });
//     }, []);

//     if (isLoading) {
//         return <p>Loading....</p>;
//     }
//     if (!toDos) {
//         return <p>No List to show</p>;
//     }
//     return (
//         <>
//             <div>
//                 <Link href='/'>
//                     <button>Home</button>
//                 </Link>
//             </div>
//             <div>
//                 <h1>TODO List</h1>
//                 <ul>
//                     {toDos.map((toDo) => (
//                         <li key={toDo.id}>
//                             {toDo.title} -{' '}
//                             <span>
//                                 ({' '}
//                                 {toDo.completed ? 'Completed' : 'Not Completed'}{' '}
//                                 )
//                             </span>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </>
//     );
// };

// export default ToDoPage;

// -------------------------Server Side rendering using getServerSideProps --------------------------------------------------------

import Link from 'next/link';
const ToDoPage = ({ data }) => {
    return (
        <>
            <div>
                <Link href='/'>
                    <button>Home</button>
                </Link>
            </div>
            <div>
                <h1>To Do List</h1>
                <ul>
                    {data.map((todo) => (
                        <li key={todo.id}>
                            {todo.title} -{' '}
                            <span>
                                ({' '}
                                {todo.completed ? 'Completed' : 'Not Completed'}{' '}
                                )
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export async function getServerSideProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            data,
        },
    };
}

export default ToDoPage;
