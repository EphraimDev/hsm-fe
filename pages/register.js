<<<<<<< HEAD
import Link from "next/link";
import Layout from "../components/Layout";
import Nav from "../components/Navbar";
=======
import Layout from '../components/Layout';
import Link from 'next/link';
>>>>>>> 8edfb8e01a2a9e3a7e95da1f21b6b391f94ba07f

const SignUp = () => (

    <Layout>
        <Nav />
        <form className="mt-5">
            <div className="form-group row d-flex  justify-content-center">
                <label htmlFor="firstName" className="col-sm-2">First Name</label>
                <div className="col-sm-10 col-md-6 col-lg-6">
                    <input type="text" className="form-control" id="firstName" required />
                </div>
            </div>

            <div className="form-group  row d-flex justify-content-center">
                <label htmlFor="lastName" className="col-sm-2">Last Name</label>
                <div className="col-sm-10 col-md-6 col-lg-6">
                    <input type="text" className="form-control" id="lastName" required />
                </div>
            </div>

            <div className="form-group row  d-flex justify-content-center">
                <label htmlFor="email" className="col-sm-2">Email</label>
                <div className="col-sm-10 col-md-6 col-lg-6">
                    <input type="email" className="form-control" id="email" required />
                </div>
            </div>

            <div className="form-group row  d-flex justify-content-center">
                <label htmlFor="password" className="col-sm-2">Password</label>
                <div className="col-sm-10 col-md-6 col-lg-6">
                    <input type="password" className="form-control" id="password" required />
                </div>
            </div>
            
            <div className="form-group d-flex justify-content-center mt-4">
                <button type="submit" className="btn btn-primary btn-md form-control col-sm-12 col-md-5 col-lg-4">Sign Up</button>
            </div>
        </form>

        <p className="text-center mt-4">Already a user, <Link href="/login"><a>login</a></Link>.</p>
        
    </Layout>
)

export default SignUp;