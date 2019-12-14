import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp,faSortDown } from '@fortawesome/free-solid-svg-icons'

const sortTypes = {
	up: {
		class: 'sort-up',
		fn: (a, b) => a.net_worth - b.net_worth
	},
	down: {
		class: 'sort-down',
		fn: (a, b) => b.net_worth - a.net_worth
	},
	default: {
		class: 'sort',
		fn: (a, b) => a
	}
};

class Table extends Component{
    constructor(props){
        super(props);
        this.state={
            currentSort:'default'
        }
    }

    onSortChange=()=>{
        const { currentSort } = this.state;
		let nextSort;

		if (currentSort === 'down') nextSort = 'up';
		else if (currentSort === 'up') nextSort = 'default';
		else if (currentSort === 'default') nextSort = 'down';

		this.setState({
			currentSort: nextSort
		});
    };

    render(){
        const {data}=this.props;
        const {currentSort}=this.state;
        return (
            data.length > 0 && (
				<table className='text-left'>
					<thead>
						<tr>
							<th>Name</th>
							<th>Net Worth
                            <button onClick={()=>this.onSortChange}>
									<FontAwesomeIcon icon={`fas fa-${sortTypes[currentSort].class}`} />
								</button>
                            </th>
						</tr>
					</thead>
					<tbody>
						{[...data].sort(sortTypes[currentSort].fn).map(p => (
							<tr>
								<td>{p.name}</td>
								<td>${p.net_worth}b</td>
							</tr>
						))}
					</tbody>
				</table>
            )
        );
    }
}

export default Table;