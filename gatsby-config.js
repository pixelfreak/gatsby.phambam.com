/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = 
{
	siteMetadata:
	{
		title: 'Pham Bam',
		titleTemplate: '%s - Pham Bam',
		description: 'Convenient, delicious pho made of bone broth prepared for 12 hours.',
		url: 'https://phambam.co',
		image: '/img/hero-photo.jpg'
	},
	plugins: 
	[
		'gatsby-plugin-sass', 
		'gatsby-plugin-react-helmet',
		{
			resolve: "gatsby-source-strapi",
			options: 
			{
				apiURL: process.env.API_URL || "http://localhost:1337",
				contentTypes: ['products', 'sites'],
				queryLimit: 1000,
			}
		}
	],
}
