import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import * as Bent from 'bent';

const TextInput = ({ ...props }) => 
{
	const [field, meta] = useField(props);
	return (
		<>
			<input className={`form-control form-control-lg ${meta.touched && meta.error ? 'error' : ''}`} {...field} {...props} />
		</>
	);
};

const TextArea = ({ ...props }) => 
{
	const [field, meta] = useField(props);
	return (
		<>
			<textarea className={`form-control form-control-lg ${meta.touched && meta.error ? 'error' : ''}`} {...field} {...props}></textarea>
		</>
	);
};

const CheckBox = ({ children, ...props }) => 
{
	const [field, meta] = useField({...props, type: 'checkbox'});
	return (
		<div className="form-check">
			<input className="form-check-input" type="checkbox" {...field} {...props}/>
			<label className="form-check-label" htmlFor={props.id}>{children}</label>
		</div>
	);
};

// const SubmitButton = ({...props}) =>
// {
// 	<button type="submit" className="btn-add-to-cart btn btn-primary btn-md">
// 		<span className="text">Send</span>
// 		<span className="text">&#10004; Sent!</span>
// 		<span className="spinner">
// 			<span className="bounce1"></span>
// 			<span className="bounce2"></span>
// 			<span className="bounce3"></span>
// 		</span>
// 	</button>
// };

export default function Email({ siteData })
{
	return (
		<div id="module-email" className="module">
			<div className="container">
				<h2>{ siteData.email_us_title }</h2>
				<h3>{ siteData.email_us_description }</h3>
				<div className="row justify-content-md-center">
					<div className="col-md-8">
						<Formik initialValues={{email: '', message: '', subscribe: true}} 
							validationSchema={Yup.object(
							{
								email: Yup.string().email('Invalid email address').required('Required'),
								message: Yup.string().required('Required'),
								subscribe: Yup.boolean()
							})}
							onSubmit={ async (values, { resetForm, setStatus }) =>
							{
								// await new Promise(resolve => setTimeout(resolve, 10000));
								await new Promise(resolve => setTimeout(resolve, 5000));

								console.log(values);
								resetForm();
								setStatus({success: 'Sent!'});
							}}
						>
							{ ({ isSubmitting, status }) => (
								<Form className={isSubmitting ? 'loading' : ''}>
									<div className="form-group">
										<TextInput name="email" type="email" placeholder="Email" />
									</div>
									<div className="form-group last">
										<TextArea name="message" rows="5" placeholder="Pour your heart out..."/>
									</div>
									<div className="row no-gutters action">
										<div className="col col-12 col-sm">
											<CheckBox id="subscribe-check" name="subscribe">{siteData.subscribe_option_text}</CheckBox>
										</div>
										<div className="col col-12 col-sm-auto">
											<button id="btn-send-email" type="submit" className={`btn-add-to-cart btn btn-md ${status && status.success ? 'btn-success' : 'btn-primary'}`}>
												<span className="text">{status && status.success ? '\u2714 Sent!' : 'Send'}</span>
												<span className="spinner">
													<span className="bounce1"></span>
													<span className="bounce2"></span>
													<span className="bounce3"></span>
												</span>
											</button>
										</div>
									</div>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</div>
	);
}