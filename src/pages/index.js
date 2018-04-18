import React from "react";
import Link from 'gatsby-link';
import styled from 'styled-components';
import PostList, {PostCard} from '../components/PostList';

const PostListSection = styled.section`
	padding: .5rem 1.5rem !important;
`


export default ({data}) => {    
	const posts = data.allMarkdownRemark.edges
    return(
        <PostListSection className="section">
        	<div className="container"> 
	        	<PostList>
	        		{posts.map((post,index) => {
		        		return(
		        			<PostCard key={index}>
		        				<Link to={post.node.frontmatter.path}>
		        					<PostCard.Title>
			        					{post.node.frontmatter.title}
			        				</PostCard.Title>
		        				</Link>
		        				<PostCard.Subs>
		        					{post.node.frontmatter.date}
		        				</PostCard.Subs>
		        				<PostCard.Excerpt>
		        					{post.node.excerpt}
		        				</PostCard.Excerpt>
		        			</PostCard>
		        		)
		        	})} 	
	        	</PostList>              	
        	</div>
        </PostListSection>
    )
}

export const query = graphql`
  query PostListQuery {
	allMarkdownRemark{
	    edges{
	      node{
	        frontmatter{
	          title
						date
						path
	        }
	        excerpt        
	      }      
	    }
	    totalCount
	  }
	}
`;