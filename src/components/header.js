import React from "react"
import { Link } from "gatsby"

export default function Header() 
{
	return (
		<div id="header" className="main">
			<div className="logo-container">
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="col">
							<Link id="header-logo" to="/">
								<img src="/img/logo-square.svg" alt="Pham Bam Logo Square"/>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="cart-container">
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="col">
							<a id="btn-cart" href="#" data-toggle="modal" data-target="#module-confirmation">Cart</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}