import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './table';
import tableData from './tabledata';

function App() {
  return (
    <div className='text-center'>
		<h4>A list of top 10 richest billionaires.</h4>
		<p>
			Click on the icon next to "Net Worth" to see the sorting functionality
		</p>

		<Table data={tableData} />
	</div>
  );
}

export default App;
