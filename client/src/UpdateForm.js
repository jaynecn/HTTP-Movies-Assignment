import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

function UpdateForm(props) {

  const [movie, setMovie] = useState({});
  
  const fetchMovie = () => {
    axios
      .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.log(err.response));
  };

  const updateMovie = ({title, director, metascore}) => {
    axios
      .put(`http://localhost:5000/api/movies/${props.match.params.id}`, { title, director, metascore })
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response));
  };

  useEffect(() => {
    fetchMovie();
  }, [])

  return (
    <Formik key={movie.id}
    initialValues={{ title: movie.title, director: movie.director, metascore: movie.metascore, }}
    onSubmit={updateMovie}
    render={() => (
      <Form className='update-form'>
        <Field name='title' type="text" placeholder='title' />
        <Field name='director' type="text" placeholder='director' />
        <Field name='metascore' type="number" placeholder='metascore' />       
        <input type='submit' />
      </Form>
      )}
    />
  );
}

export default UpdateForm;