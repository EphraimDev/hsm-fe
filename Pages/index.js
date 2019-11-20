import Layout from '../components/MyLayout';

export default function index(){

    return (
        
        <Layout>
            <div className="container mt-5">

                <div className="text-center mb-5">
                    <h3>Welcome<small className="text-muted"> to HSM-Nigeria</small></h3>
                    <p className="lead mt-3">Please log In below</p>
                </div>
            
                <form className="bg-light p-3 col-md-6 col-lg-6 mx-auto">
                    <div className="form-group ">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </Layout>
    );
}