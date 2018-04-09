import React, {Component} from 'react';
import styled from 'styled-components';
import Link from "gatsby-link";

const BrandName = styled.div`
    font-family: 'Volkhov', serif;
    font-size: 24px;
    display: flex;  
    justify-content: center;    
    a{        
        display: flex;            
        color: #000;
    }

    a:hover{
        color: #000;
        text-decoration:none;
    }
`;

const Navigation = styled.ul`
    display: flex;
    padding: 10px 0;
    justify-content: center;
    border-top: 1px dashed #737171;
    border-bottom: 1px dashed #737171;
    li{
        margin: 0 10px;
    }

    li a{
        font-weight: normal;
        color: #000;        
    }
    li a:hover{
        color: #000;        
    }
`;

export default class Header extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return(
            <section className="section">
                <div className="container">
                    <BrandName>
                        <Link to="/">{this.props.title}</Link>
                    </BrandName>
                    <Navigation>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </Navigation>
                </div>
            </section>
        )
    }    
}