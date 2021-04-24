import React from 'react';
import './card-list.styles.css'
import { Card } from '../card/card';

export const CardList = ( props: any ) => {
	return (
		<div className={'card-list'}>
			{
				props.monsters.map( ( value: any ) => <Card monster={value} key={value.id} /> )
			}
		</div>
	);
};
