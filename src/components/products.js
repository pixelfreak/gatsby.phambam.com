import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
	query MyQuery {
		allStrapiProducts {
			edges {
				node {
					id
					name
					photo {
		  				url
					}
					price
					description
				}
			}
		}
	}
`

function Product({ productData: { node: product } })
{
	return (
		<div className="row justify-content-md-center product-container">
			<div className="col col-12 col-md-5 col-lg-4 col-xl-3 product-image">
				<img src={ `${process.env.CMS_URL}` + product.photo[0].url } alt={ product.name }/>
			</div>
			<div className="col col-12 col-md-7 col-lg-6 col-xl-5 product-details">
				<h3>{ product.name }</h3>
				<h4>${ product.price }</h4>
				<p>{ product.description }</p>
				<div className="row no-gutters action">
					<div className="col col-auto">
						<div className="qty">
							<span>Quantity</span>
							<select>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
								<option>6</option>
								<option>7</option>
								<option>8</option>
								<option>9</option>
								<option>10</option>
							</select>
						</div>
					</div>
					<div className="col">
						<button className="btn-add-to-cart btn btn-primary btn-sm" type="button" data-toggle="modal" data-target="#module-confirmation">Add to Cart</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Products({ siteData })
{
	const { allStrapiProducts: { edges: products } } = useStaticQuery(query);

	return (
		<div id="module-products" className="module">
			<div className="container">
				<h2>{ siteData.products_title }</h2>
				{
					products.map((product, index) =>
						<Product key={product.node.id} productData={product} index={index}/>
					)
				}
			</div>
		</div>
	);
}
