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
                    <div class="form-group ">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </Layout>
    );
}