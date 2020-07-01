import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Faq from '../components/faq'
import Products from '../components/products'
import Email from '../components/email'
import SEO from '../components/seo'

export const query = graphql`
	query siteData {
		allStrapiSites {
			nodes {
				products_title
				subscribe_option_text
				page_title
				hero_title
				hero_description
				faq_made_title
				faq_made_description
				faq_fresh_title
				faq_fresh_description
				faq_eat_title
				email_us_title
				email_us_description
				eat_step_3_title
				eat_step_3_description
				eat_step_2_title
				eat_step_2_description
				eat_step_1_title
				eat_step_1_description
			}
		}
	}
`

export default function Home({ data })
{
	const siteData = data.allStrapiSites.nodes[0];

	return (
		<Layout>
			<SEO siteData={siteData}/>
			<Hero siteData={siteData}/>
			<Faq siteData={siteData}/>
			<Products siteData={siteData}/>
			<Email siteData={siteData}/>
		</Layout>
	);
}
