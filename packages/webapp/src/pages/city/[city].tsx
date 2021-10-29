import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { setCityName } from '../../redux/actions/action';
import Link from 'next/link';


const City = (props) => {

    console.log(props)
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



const mapStateToProps = (state: { main: { data: any; }; }) =>{
    return{
        data:state.main.data
    }
}

const mapDispatchToProps =(dispatch: Dispatch<AnyAction>)=> bindActionCreators( {setCityName}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(City);