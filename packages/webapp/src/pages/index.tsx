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
            <div>
                <Basic/>
            </div>
            <div>
                <h1>Enter the city Name to check the weather:-</h1>

                <div>
                    <input name="cityName"  placeholder="Enter city name" value={newCityName} onChange={(e)=> setNewCityName(e.target.value)} />
                    <button onClick={() => handleClick(newCityName)} >Search</button>
                </div> 
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
