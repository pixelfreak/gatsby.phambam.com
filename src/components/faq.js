import React from "react"

export default function Faq({ siteData })
{
	return (
		<div id="module-faq" className="module">
			<div className="container">
				<div className="row justify-content-md-center">
					<div className="col">
						<div className="faq-item">
							<h2>{siteData.faq_made_title}</h2>
							<p>{siteData.faq_made_description}</p>
						</div>
						<div className="faq-item">
							<h2>{siteData.faq_fresh_title}</h2>
							<p>{siteData.faq_fresh_description}</p>
						</div>
						<div className="faq-item">
							<h2>{siteData.faq_eat_title}</h2>
							<div className="row eat-steps">
								<div className="col col-12 col-sm-12 col-md-4">
									<img src="/img/pour.svg"/>
									<h3>{siteData.eat_step_1_title}</h3>
									<p>{siteData.eat_step_1_description}</p>
								</div>
								<div className="col col-12 col-sm-12 col-md-4">
									<img src="/img/stopwatch.svg"/>
									<h3>{siteData.eat_step_2_title}</h3>
									<p>{siteData.eat_step_2_description}</p>
								</div>
								<div className="col col-12 col-sm-12 col-md-4">
									<img src="/img/bowl.svg"/>
									<h3>{siteData.eat_step_3_title}</h3>
									<p>{siteData.eat_step_3_description}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}