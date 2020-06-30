import React from "react"

export default function Hero({ siteData })
{
	return (
		<div id="module-hero" className="module">
			<div className="container">
				<div className="row justify-content-md-center">
					<div className="col col-md-7">
						<figure>
							<img src="/img/hero-photo.jpg" alt="Pho Bo Vietnamese Dish"/>
						</figure>
						<h2>{siteData.hero_title}</h2>
						<p dangerouslySetInnerHTML={{__html: siteData.hero_description }}></p>
						<button id="btn-shop-now" className="btn btn-primary btn-lg" type="button">Shop Now</button>
					</div>
				</div>
			</div>
		</div>
	);
}