import React from 'react';

import withDataTransform from './components/WithDataTransform';

import MonthTable from './components/tables/MonthTable';
import YearTable from './components/tables/YearTable';
import SortTable from './components/tables/SortTable';

import monthTransform from './components/wrappers/MonthTransform';
import yearTransform from './components/wrappers/WithYearGrouping';
import sortTransform from './components/wrappers/WithSorting';

// Компоненты с применением HOC
const MonthTableWithData = withDataTransform(MonthTable, monthTransform);
const YearTableWithData = withDataTransform(YearTable, yearTransform);
const SortTableWithData = withDataTransform(SortTable, sortTransform);

// URL для загрузки данных
const DATA_URL = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json';


export default class App extends React.Component {
    state = {
        list: []
    };

    componentDidMount() {
        fetch(DATA_URL)
            .then(response => response.json())
            .then(data => {
                this.setState({ list: data.list });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    render() {
        const { list } = this.state;
        return (
            <div id="app">
                <MonthTableWithData list={list} />
                <YearTableWithData list={list} />
                <SortTableWithData list={list} />
            </div>
        );
    }
}