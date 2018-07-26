import React from 'react';

const Card  = ({name,id,email}) => {
	return(
		<div className='bg-light-green br3 dib pa3 ma2 grow bw2 tc'>
			<img alt='robot' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;