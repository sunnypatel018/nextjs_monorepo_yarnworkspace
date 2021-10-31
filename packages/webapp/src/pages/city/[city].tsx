import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { setCityName } from '../../redux/actions/action';
import Link from 'next/link';


const City = (props) => {

    console.log(props)
    return (
        <>
        <div className="container p-4">

                <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">City</li>
                </ol>
                </nav>
            
                <table className="table">
                    <thead>
                    <tr>
                    <th scope="col">City</th>
                    <th scope="col">Country</th>
                    <th scope="col">Temprature</th>
                    <th scope="col">Summary</th>
                    </tr>
                    </thead>
                    <tbody>
                            <tr>
                            <th>{props.data ?props.data.getCityByName.name : null}</th>
                            <td>{props.data ?props.data.getCityByName.country : null}</td>
                            <td>{props.data ?props.data.getCityByName.weather.temperature.actual : null}</td>
                            <td>{props.data ?props.data.getCityByName.weather.summary.description : null}</td>
                            </tr>
                    </tbody>
                    </table>

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

export default connect(mapStateToProps,mapDispatchToProps)(City);