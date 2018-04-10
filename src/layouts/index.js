import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import 'font-awesome/css/font-awesome.css';
import './index.scss';
import './index.css';
export default ({children, data}) => {    
    return(
        <div>
            <Header
                title={data.site.siteMetadata.title}
            />
            {children()}
            <Footer 
                social={{
                    facebook: data.site.siteMetadata.owner.social.facebook,
                    twitter: data.site.siteMetadata.owner.social.twitter,
                    github: data.site.siteMetadata.owner.social.github
                }}
            />
        </div>
    )
}

export const query = graphql`
  query LayoutQuery {
    site{
        siteMetadata{
            title
            owner{
                social{
                    twitter
                    facebook
                    github
                }
            }
        }
    }
  }
`