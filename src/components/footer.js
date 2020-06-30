import React from "react"
import { Link } from "gatsby"

export default function Footer() 
{
	return (
		<div id="footer">
			<div className="container">
				<div className="row justify-content-md-center">
					<div className="col">
						<Link id="footer-logo" to="/">
							<img src="/img/logo-horizontal.svg" alt="Pham Bam Logo Horizontal"/>
						</Link>
					</div>
				</div>
				<div className="row justify-content-md-center">
					<div className="col">
						<p>&copy; 2020 All rights reserved.</p>
					</div>
				</div>
			</div>
		</div>
	);
}