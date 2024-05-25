import React from 'react'

const Home = () => {
  return (
    <main className="Home container my-5">
      <section className="row align-items-center">
        <div className="col-md-6">
          <article className="card p-4">
            <header className="card-body">
              <h1 className="card-title">Welcome to the Cat fact finder platform!</h1>
              <p className="card-text">
                 Are you a cat lover? Discover fascinating and fun facts about our feline 
                 friends with Cat Fact Finder. From quirky behaviors to historical tidbits, 
                 our app provides a treasure trove of information about cats. Join us today 
                 and become a cat facts expert!
              </p>
              <a href="#!" className="btn btn-primary">Get Started</a>
            </header>
          </article>
        </div>
        <div className="col-md-6">
          <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2h0bmx6eG5hNDUxd2MxZWN6dTV3ejN2dDgxcTZlcGRvcnlkODAwcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XMahYpRYon7EEqchsf/giphy.gif" alt="Placeholder" className="img-fluid" />
        </div>
      </section>
    </main>
  )
}

export default Home