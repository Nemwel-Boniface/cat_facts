import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatFacts, fetchCatFactsSuccess, fetchCatFactsFailure } from '../redux/catfacts/catFactsSlice';

const WelcomePage = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.login.user);
  const { username, token, photo } = user;
  const loading = useSelector((state) => state.catfacts.loading);
  const success = useSelector((state) => state.catfacts.success)
  const error = useSelector((state) => state.catfacts.error)

  const handleCatFactsFetch = async () => {
    dispatch(fetchCatFacts())
    try{
      const response = await fetch('https://cat-fact.herokuapp.com/facts/', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })

      if(!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const catFacts = await response.json();
      dispatch(fetchCatFactsSuccess(catFacts));
    } catch (error) {
      dispatch(fetchCatFactsFailure(error.message))
    }
  }

  return (
    <main className="container my-5">
      <section className="row align-items-center">
        <div className="col-md-6">
          <article className="card p-4">
            <header className="card-body d-flex align-items-center">
            <img
                src={photo}
                alt="User profile"
                className="img-thumbnail me-3"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
              <div>
                <h1 className="card-title">Hello, {username}!</h1>
                <p className="card-text">
                  Welcome back to Cat Fact Finder! Discover amazing facts about cats and enhance your knowledge about our feline friends.
                </p>
                <button onClick={handleCatFactsFetch} className="btn btn-primary">
                  Fetch data…
                </button>

                {loading && <p className="yellow">Getting cat facts...</p>}
                  {error && (
                    <p className="red">
                      Error:
                      {error}
                    </p>
                  )}
                {success && <p className="green">Cat facts retreived succesfully!</p>}
              </div>
            </header>
          </article>
        </div>
        <div className="col-md-6">
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWd3d3BzNGF5ZXQ1ODE4c3VlYjlzaGw0cG5sZGdibjRmMGZucHFpYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OqJczbkfFYu1EOh4IS/giphy.gif"
            alt="Cat illustration"
            className="img-fluid"
          />
        </div>
      </section>
    </main>
  )
};

export default WelcomePage
