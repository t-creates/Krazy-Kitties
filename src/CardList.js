import React from 'react';
import Card from './Card.js';

const CardList = ({ cats }) => {
	return (
		<div>
			{
			cats.map((user, i) => {
						return (
							<Card
								key={i}
								id={cats[i].id}
								name={cats[i].name}
								username={cats[i].username}
								email={cats[i].email}
								/>
						);
					})
				}
		</div>
	);
}

export default CardList;

