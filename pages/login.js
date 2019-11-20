import Link from 'next/link';
import Head from 'next/head';

function Login() {
	return (
		<div>
			<Head>
				<title>HSM | Login</title>
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
					integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
					crossorigin="anonymous"
				></link>
				<link
					href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<section className="container">
				<div className="row body">
					<div className="col-11 col-sm-10 col-lg-6 mx-auto">
						<h1 className="mb-3 mb-lg-3">Hello, Welcome back</h1>
						<form action="" method="">
							<div className="form-group">
								<label for="email">Email</label>
								<input
									className="form-control"
									type="email"
									placeholder="Email"
									id="email"
								/>
							</div>
							<div className="form-group">
								<label for="password">Password</label>
								<input
									className="form-control"
									type="password"
									placeholder="Password"
									id="password"
								/>
							</div>
							<div className="row">
								<p className="col-sm-6 col-lg remember-me">
									<input type="checkbox" className="mr-1" id="checkbox" />
									Remember Me
								</p>
								<p className="col-sm-6 col-lg text-md-right">
									<a href="">Forgot Password?</a>
								</p>
							</div>
							<div className="form-group">
								<input
									className="form-control btn btn-primary"
									type="submit"
									value="Login"
								/>
							</div>
							<div>
								<p>
									Don't have an account?
									<span>
										<a href="#"> Click here</a>
									</span>
								</p>
							</div>
						</form>
					</div>
				</div>
			</section>

			<style jsx>{`
				section {
					font-size: 62.5%; //10px
				}

				.body {
					font-size: 1.3rem; //13px
					font-family: 'Roboto', sans-serif;
					// margin-top: 8rem; //50px
					display: flex;
					align-items: center;
					height: 90vh;
				}
				a:visited,
				a:link {
					color: #0c479d;
				}
				.btn-primary {
					background-color: #0c479d;
				}

				@media (min-width: 1200px) {
					section {
						font-size: 75%; // 12px
					}
				}
			`}</style>
		</div>
	);
}

export default Login;
