import Basic from '@monorepo-nextjs/library/components';
import Link from 'next/link';
import { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setName } from '../../redux/actions/action';


const simple = (props) => {

    const {name, setName} = props;
    const [newName, setNewName] = useState('')

    return (
        <>
            {/* <div>Hello World</div>
            <Basic />
            <div>
                <Link href='./csr'>
                    <button>Server side rendering</button>
                </Link>{' '}
            </div> */}
            <div>
                <p>Enter a Name {name}</p>
                <input
                    type='text'
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                ></input>
                <button onClick={() => setName(newName)}>Submit</button>
            </div>
        </>
    );
};

const mapStateToProps = state =>{
    return{
        name:state.main.name
    }
}

const mapDispatchToProps =(dispatch)=> bindActionCreators({setName}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(simple);
