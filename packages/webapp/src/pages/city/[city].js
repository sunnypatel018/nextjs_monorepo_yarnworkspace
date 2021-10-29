import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCityName } from '../../redux/actions/action';
import Link from 'next/link';


const City = (props) => {

    
    return (
        <>
        
            <div> 
                    <h2> {props.data ?props.data.getCityByName.name : null}</h2>
                    <h2> {props.data ?props.data.getCityByName.country : null}</h2>
                    <h2> {props.data ?props.data.getCityByName.weather.summary.description : null}</h2>
                    <h2> {props.data ?props.data.getCityByName.weather.temperature.actual : null}</h2>  
                    
            </div>
            <Link href="/">
                <h3><a>Home</a></h3>
            </Link>
            

            
        </>
    );
};



const mapStateToProps = state =>{
    return{
        data:state.main.data
    }
}

const mapDispatchToProps =(dispatch)=> bindActionCreators( {setCityName}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(City);