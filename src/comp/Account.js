import { Link } from "react-router-dom";

function Account() {
    return ( 
        <section className="account">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-9"></div>
                        <div className="col-md-3"><Link to="/signup"><button className="btn2 form-control" >SIGN UP </button> </Link></div>
                        </div>
                    </div>
                    
        </section>
     );
}

export default Account;