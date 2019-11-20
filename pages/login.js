import Layout from '../components/Layout';
import Link from 'next/link';

function Login() {
	return (
		<Layout>
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
									<span> <Link href="/register"><a>Register here</a></Link> 
									</span>
								</p>
							</div>
						</form>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Login;
