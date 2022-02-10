import "./App.css";
import React from "react";

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      email:null,
      password:null,
      emailError:null,
      passwordError:null,
      emailS:null,
      passwordS:null
      
    }
  }
  value(){
    if (!this.state.email.includes("@") && this.state.password.length<5) {
        this.setState({
            passwordError:'invalid Password',
            emailError:'invalid Email (should contain @)'
        })
    }
   else if (!this.state.email.includes("@")) {
    this.setState({
        emailError:'invalid Email (should contain @)'
    })
   }
   else if (this.state.password.length<5) {
       this.setState({
           passwordError:'invalid Password'
       })
   }
   else{
       return true;
   }
  }
  valid(){
    if (!this.state.email.includes("@") && this.state.password.length<5) {
        this.setState({
            passwordS:'password should be more than 5 characters',
            emailS:'invalid Email (should contain @)'
        })
    }
   else if (!this.state.email.includes("@")) {
    this.setState({
        emailS:'invalid Email (should contain @)'
    })
   }
   else if (this.state.password.length<5) {
       this.setState({
           passwordS:'password should be more than 5 characters'
       })
   }
   else{
       return true;
   }
  }

   show(){
    if (this.value()) {
      this.setState({
        emailError:'',
        passwordError:''
      })
      alert('submitted')
    }
      
   }

   sign(){
     if(this.valid()){
       this.setState({
        passwordS:'',
        emailS:''
       })
       alert('submitted')
     }
   }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Home
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="/">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Conact Us
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link ">Link</a>
                </li>
              </ul>
              {/* <!-- Button trigger modal --> */}
              <button 
                style={{ color: "black" }}
                type="button"
                className="btn btn-light mx-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Log In
              </button>

              {/* <!-- Modal --> */}
              <div
                className="modal fade "
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title text-primary"
                        id="exampleModalLabel"
                      >
                        Log In
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div class="mb-3 row">
                        <label
                          for="staticEmail"
                          class="col-sm-2 col-form-label"
                        >
                          Email
                        </label>
                        <div class="col-sm-10">
                          <input
                          onChange={(e)=>{this.setState({email:e.target.value})}}
                            type="text"
                            name="email"
                            class=" form-control"
                          />
                          <p style={{color:'red'}}>{this.state.emailError}</p>
                        </div>
                      </div>
                      
                      <div class="mb-3 row">
                       
                        <label
                        
                          for="inputPassword"
                          class="col-sm-2 col-form-label"
                        >
                          Password
                        </label>
                        <div class="col-sm-10">
                          <input
                          onChange={(e)=>{this.setState({password:e.target.value})}}
                            type="password"
                            class="form-control"
                            id="inputPassword"
                          />
                          <p style={{color:'red'}}>{this.state.passwordError}</p>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button onClick={()=>{this.show()}} type="button" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Button trigger modal --> */}
              <button
                style={{ color: "black" }}
                type="button"
                className="btn btn-light"
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
              >
                Sign Up
              </button>

              {/* <!-- Modal --> */}
              <div
                className="modal fade"
                id="signupModal"
                tabindex="-1"
                aria-labelledby="signupModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title text-primary" id="signupModalLabel ">
                        Sign Up
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form class="row g-3">
                        <div class="col-md-6">
                          <label for="inputEmail4" class="form-label">
                            Email
                          </label>
                          <input
                          onChange={(e)=>{this.setState({email:e.target.value})}}
                            type="email"
                            class="form-control"
                            id="inputEmail4"
                          />
                          <p style={{color:'red'}}>{this.state.emailS}</p>
                        </div>
                        <div class="col-md-6">
                          <label for="inputPassword4" class="form-label">
                            Password
                          </label>
                          <input
                          onChange={(e)=>{this.setState({password:e.target.value})}}
                            type="password"
                            class="form-control"
                            id="inputPassword4"
                          />
                          <p style={{color:'red'}}>{this.state.passwordS}</p>
                        </div>
                        <div class="col-12">
                          <label for="inputAddress" class="form-label">
                            Address
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputAddress"
                            placeholder="1234 Main St"
                          />
                        </div>
                        <div class="col-12">
                          <label for="inputAddress2" class="form-label">
                            Address 2
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputAddress2"
                            placeholder="Apartment, studio, or floor"
                          />
                        </div>
                        <div class="col-md-6">
                          <label for="inputCity" class="form-label">
                            City
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputCity"
                          />
                        </div>
                        <div class="col-md-4">
                          <label for="inputState" class="form-label">
                            State
                          </label>
                          <select id="inputState" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                          </select>
                        </div>
                        <div class="col-md-2">
                          <label for="inputZip" class="form-label">
                            Zip
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputZip"
                          />
                        </div>
                        
                        
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button onClick={()=>{this.sign()}} type="button" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </nav>
        <div>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://source.unsplash.com/1400x400/?code,program"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block ">
                  <h5 className="text-dark " >Welcome</h5>
                  <div className="my-1">
                  <p className=" text-dark  " >
                     How are You ?
                  </p>
                  </div>
                    
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://source.unsplash.com/1400x400/?code,hacker"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block ">
                  <h5 className=" text-dark ">Get some Tips</h5>
                  <div className="my-1">

                  <p className="text-dark ">
                    Best Bloggers are here!
                  </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img className='faded'
                  src="https://source.unsplash.com/1400x400/?office,boss"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className=" text-dark">Want to learn</h5>
                  <div className="my-1">

                  <p className="text-dark">
                    You are at the right place
                  </p>
                  </div>
                </div>
              </div>
            </div>
            

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="container my-2 ">
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-primary">
                    World
                  </strong>
                  <h3 className="mb-0">Introduction</h3>
                  <div className="mb-1 text-muted">Dec 22</div>
                  <p className="card-text mb-auto">
                  the earth, together with all of its countries and peoples.a particular region or group of countries.
                  </p>
                  <a href="#" className="stretched-link">
                    Continue reading
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block img-fluid ">
                  <img
                    className="responsive"
                    src="https://source.unsplash.com/200x200/?world"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-success">
                    FOREST
                  </strong>
                  <h3 className="mb-0">Introduction</h3>
                  <div className="mb-1 text-muted">Dec 23</div>
                  <p className="mb-auto">
                  a large number or dense mass of vertical or tangled objects.
                        a forest of high-rise apartments"
                  </p>
                  <a href="#" className="stretched-link">
                    Continue reading
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img
                    src="https://source.unsplash.com/200x200/?forest"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-2">
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-danger">
                    STRATEGY
                  </strong>
                  <h3 className="mb-0">Introduction</h3>
                  <div className="mb-1 text-muted">Dec 20</div>
                  <p className="card-text mb-auto">
                  the art of planning and directing overall military operations and movements in a war or battle.
                  </p>
                  <a href="#" className="stretched-link">
                    Continue reading
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block ">
                  <img
                    src="https://source.unsplash.com/200x200/?book"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-warning">
                    SPORTS
                  </strong>
                  <h3 className="mb-0">Introduction</h3>
                  <div className="mb-1 text-muted">Dec 21</div>
                  <p className="mb-auto">
                  an activity involving physical exertion and skill in which an individual or team competes against another or others for entertainment.
                  </p>
                  <a href="#" className="stretched-link">
                    Continue reading
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img
                    src="https://source.unsplash.com/200x200/?sports"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
