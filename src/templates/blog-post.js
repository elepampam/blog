import React from "react";
import styled from 'styled-components';


const PostTitle = styled.p`
	font-size: 36px;
	font-family: 'Volkhov', serif;
	text-align: center;
	color: #000;
`

const PostContent = styled.div`
	font-family: 'Roboto', sans-serif;
`
export default ({ data }) => {
	console.log(data)
	const post = data.markdownRemark;
	return (
		<section>
			<div className="container">
				<PostTitle>{post.frontmatter.title}</PostTitle>
				<PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
			</div>
		</section>
	);
};

export const query = graphql`
  query BlogPostQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;