import React, {Component} from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    padding: 1rem 1.5rem !important;
`;

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const SocialWrapper = styled.ul`
    display: flex;
    li{
        display: flex;
        margin: 0 10px;
    }
`

const SocialIcon = styled.i`
    font-size: 24px;
    color: #000;
`

export default class Footer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <StyledFooter className="footer">
                <FooterContainer className="container">
                    <div>Develop with <span style={{color: '#e23a3a'}}>❤</span> by elepampam using <a href="https://www.gatsbyjs.org" target="_blank" style={{color: '#663399'}}>Gatsby.js</a></div>
                    <SocialWrapper>
                        <li>
                            <a href={`https://www.facebook.com/${this.props.social.facebook}`} target="_blank">
                                <SocialIcon className="fa fa-facebook" />
                            </a>                            
                        </li>
                        <li>
                            <a href={`https://twitter.com/${this.props.social.twitter}`} target="_blank">
                                <SocialIcon className="fa fa-twitter" />
                            </a>
                        </li>
                        <li>
                            <a href={`https://github.com/${this.props.social.github}`} target="_blank">
                                <SocialIcon className="fa fa-github" />
                            </a>
                        </li>
                    </SocialWrapper>                                            
                </FooterContainer>
            </StyledFooter>
        )
    }
}