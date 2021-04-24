import React, { Component } from 'react';
import './App.css';
// @ts-ignore
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';

class App extends Component<any, any> {
	
	constructor( props: any ) {
		super( props );
		this.state = {
			monsters: [],
			search: '',
		};
	};
	
	componentDidMount() {
		fetch( 'https://jsonplaceholder.typicode.com/users' )
			.then( res => res.json() )
			.then( json => this.setState( { monsters: json } ) );
	}
	render() {
		const { monsters, search } = this.state;
		const filteredMonsters = monsters.filter( ( monster: any ) => monster.name.toLowerCase().includes( search.toLowerCase() ) );
		return (
			<div className = {'App'}>
				<h1>Monster Bolodex</h1>
				<SearchBox
					placeholder = "Search Monsters"
					handleChange = {( e: { target: { value: any; }; } ) => this.setState( { search: e.target.value } )}/>
				<CardList monsters = {filteredMonsters}/>
			</div>
		);
	}
}

export default App;
