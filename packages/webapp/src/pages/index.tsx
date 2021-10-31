import Basic from "@monorepo-nextjs/library/components"
import { useRouter } from 'next/router';
import { useState } from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { setCityName } from '../redux/actions/action';


const simple = (props: { setCityName: any; }) => {

    console.log(props);
    const {setCityName} = props;
    const [newCityName, setNewCityName] = useState('')
    const router = useRouter()

    const handleClick =(cityName: string)=>{
        setCityName(cityName)
        router.push('./city/'+cityName)
    }

    return (
        <>
            {/* <div>
                <Basic/>
            </div>
             */}
            <div className="container p-4">
                    <div className="row align-items-start">
                        <span className="fs-1 fw-bold">Enter the city Name to check the weather :-
                        </span>
                    </div>
                    <div className="col-3">
                        <input className="form-control mb-3"  name="cityName"  placeholder="Enter city name" value={newCityName} onChange={(e)=> setNewCityName(e.target.value)} />
                    </div>
                    <button className="btn btn-primary" onClick={() => handleClick(newCityName)} >Search</button>
            </div> 
            
        </>
    );
};

const mapStateToProps = (state: { main: { data: any; }; }) =>{
    return{
        data:state.main.data
    }
}

const mapDispatchToProps =(dispatch: Dispatch<AnyAction>)=> bindActionCreators( {setCityName}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(simple);
