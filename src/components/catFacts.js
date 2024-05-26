import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

const CatFacts = () => {
  const catFacts = useSelector((state) => state.catfacts.data);

  return (
    <div className="container my-5">
      <h1 className="mb-4">Cat Facts</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Fact</th>
            <th>Verified</th>
            <th>Created On</th>
          </tr>
        </thead>
        <tbody>
          {catFacts.map((fact) => (
            <tr key={fact.id}>
              <td>{fact.text}</td>
              <td>{fact.status.verified ? 'True' : 'False'}</td>
              <td>{moment(fact.createdAt).format('DD-MM-YYYY hh:mm:ss')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CatFacts;
