import React, {Component} from 'react';
import styled from 'styled-components';

const PostCardStyled = styled.div`
    border-bottom: 1px solid #c1c1c1e0;
    padding: 25px 10px;
    :nth-child(1){
    	padding: 0 10px 10px;
    }
`

const PostCardTitle = styled.p`
	font-size: 36px;
	font-weight: bold;	
	font-family: 'Roboto', sans-serif;
	color: #000;
	:hover{
		color: #535353;
		transition: color .25s ease;
	}
`
const PostCardSubs = styled.p`
	font-family: 'Roboto', sans-serif;
	font-size: 16px;
	color: grey;
`
const PostCardExcerpt = styled.p`
	font-family: 'Roboto', sans-serif;
	font-size: 16px;
	text-align: justify;
	margin: 10px 0;
`

export default class PostList extends Component{
	render(){
		return(
			<div>
				{this.props.children}
			</div>
		)
	}
}

export let PostCard = (props) => {
	return(
		<PostCardStyled>
			{props.children}												
		</PostCardStyled>
	)
}

PostCard.Title = props => (
	<PostCardTitle>
		{props.children}
	</PostCardTitle>
)

PostCard.Subs = props => (
	<PostCardSubs>
		&#9679; {props.children}
	</PostCardSubs>
)

PostCard.Excerpt = props => (
	<PostCardExcerpt>
		{props.children}
	</PostCardExcerpt>
)