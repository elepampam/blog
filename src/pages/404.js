import React,{Component} from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import * as CryingAnimation from '../utils/animation/crying.json'

const BigAttention = styled.p`
	font-family: 'Roboto', sans-serif;
	font-size: 36px;
	text-align: center;
`
const SmallAttention = styled.p`
	font-family: 'Roboto', sans-serif;
	font-size: 16px;
	text-align: center;
`

export default class FourZeroFour extends Component{
	constructor(){
		super()		
	}
	render(){
		const cryingAnimOptions = {
			loop: true,
			autoplay: true, 
			animationData: CryingAnimation,
		}
		return(
			<section className="section">
				<div className="container">
					<BigAttention>OH MY GOSH! YOU HAVE REACHED HERE!</BigAttention>
					<Lottie 
						options={cryingAnimOptions}
						height={200}
						width={200}
		          	/>
		          	<SmallAttention>
		          		Looks like the page you are looking doesn't exist.<br/>
		          		Please Check the URL and try again.
		          	</SmallAttention>
				</div>
			</section>
		)
	}
}