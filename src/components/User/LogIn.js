import React from 'react'

const LogIn = () => {
  return (
    <main className="container-fluid px-0 my-5">
      <section className="row justify-content-center mx-0">
        <div className="col-lg-12 px-0">
          <h2 className="text-center mb-4">Welcome back to Cat Fact Finder</h2>
          <div className="card mx-auto" style={{ maxWidth: '900px' }}>
            <div className="row no-gutters">
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">Pawceed to Cat Facts</h5>
                  <form>
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input type="email" className="form-control" id="email" placeholder="Enter email" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" className="form-control" id="password" placeholder="Password" required />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block py-2">Sign In</button>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcW43NDZqNnM4bmFxdzEzNzNnazA3dTA4bjhqZGVmMmJobGg4bGlrbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YsfPFdNPHv7PfdvWv7/giphy.gif" className="card-img" alt="Signin" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LogIn