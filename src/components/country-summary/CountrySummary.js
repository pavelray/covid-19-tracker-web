import React, { Component } from 'react'
import CountrySummaryTable from './CountrySummaryTable'
import {fetchAllCountrySummary} from '../../redux/actions';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

export class CountrySummary extends Component {

    columns = [
        {
            title: 'Name',
            field: 'name',
            sorting: false,
            headerStyle: {
                backgroundColor: '#3f51b5',
            }
           
        },
        {
            title: 'Confirmed',
            field: 'confirmed',
            type: 'numeric',
            headerStyle: {
                backgroundColor: '#3f51b5',
            }
        },
        {
            title: 'Recovered',
            field: 'recovered',
            type: 'numeric',
            headerStyle: {
                backgroundColor: '#3f51b5',
            }
        },
        {
            title: 'Death',
            field: 'deaths',
            type: 'numeric',
            headerStyle: {
                backgroundColor: '#3f51b5',
            }
        },
        {
            title: 'Global Ratio',
            field: 'percentage',
            sorting: false,
            headerStyle: {
                backgroundColor: '#3f51b5',
            }
        },
    ]


    componentDidMount(){
        this.props.fetchAllCountrySummary()
    }

    renderCountrySummaryList = ()=>{

        return(
            <>
                <CountrySummaryTable columns={this.columns} data={this.props.countries} title='Country Wise Stats'/>
            </>
        )
    }

    render() {
        return (
        <>
            {this.renderCountrySummaryList()}
        </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        countries: state.global.countries
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchAllCountrySummary
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CountrySummary)
