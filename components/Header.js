import Link from 'next/link';

const Header = () => (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <Link href="/"><a className="navbar-brand">HSM-NIGERIA</a></Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">

                <li class="nav-item active">
                <Link href="/"><a className="nav-link">Home</a></Link>
                </li>

                <li class="nav-item">
                <Link href="/about"><a className="nav-link">About</a></Link>
                </li>

            </ul>
        </div>
    </nav>
);

export default Header;