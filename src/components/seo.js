import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
	query SEO 
	{
		site 
		{
			siteMetadata 
			{
				defaultTitle: title
				titleTemplate
				defaultDescription: description
				siteUrl: url
				defaultImage: image
			}
		}
	}
`

const SEO = ({ siteData }) => 
{
	const { pathname } = useLocation();
	const { site } = useStaticQuery(query);

	const { defaultTitle, titleTemplate, defaultDescription, siteUrl, defaultImage } = site.siteMetadata;

	const seo = 
	{
		title: siteData.page_title || defaultTitle,
		description: siteData.page_description || defaultDescription,
		image: `${siteUrl}${siteData.image || defaultImage}`,
		url: `${siteUrl}${pathname}`
	};

	return (
		<Helmet title={seo.title} titleTemplate={titleTemplate}>
			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />

			{seo.url && <meta property="og:url" content={seo.url} />}
			{seo.title && <meta property="og:title" content={seo.title} />}
			{seo.description && <meta property="og:description" content={seo.description} />}
			{seo.image && <meta property="og:image" content={seo.image} />}
		</Helmet>
	)
}

SEO.propTypes = 
{
	siteData: PropTypes.object
};

SEO.defaultProps = 
{
	siteData: {}
};

export default SEO