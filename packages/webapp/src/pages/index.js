import Basic from '@monorepo-nextjs/library/components';
import Link from 'next/link';
import { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCityName } from '../redux/actions/action';


const simple = (props) => {

    console.log(props);
    const {cityName, setCityName} = props;
    const [newCityName, setNewCityName] = useState('')

    return (
        <>
        
            <div>
                <h1>Enter the city Name to check the weather:-</h1>

                <div>
                    <input name="cityName"  placeholder="Enter city name" value={newCityName} onChange={(e)=> setNewCityName(e.target.value)} />
                    <button onClick={() => setCityName(newCityName)} >Search</button>
                </div> 

                
                <h2> {props.data ?props.data.getCityByName.name : null}</h2>
                <h2> {props.data ?props.data.getCityByName.country : null}</h2>
                <h2> {props.data ?props.data.getCityByName.weather.summary.description : null}</h2>
                <h2> {props.data ?props.data.getCityByName.weather.temperature.actual : null}</h2>
                

        
            </div>
        </>
    );
};

const mapStateToProps = state =>{
    return{
        data:state.main.data
    }
}

const mapDispatchToProps =(dispatch)=> bindActionCreators( {setCityName}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(simple);
