import React from 'react';
import { Formik, Form, Field } from 'formik';

function UpdateForm(props) {
  
  const onLogin = ({ id, title, director, metascore, stars }) => {
    return props.onLogin({ id, title, director, metascore, stars});
  }; //???????

  return (
    <Formik
    initialValues={{ id: '', title: '', director: '', metascore: '', stars: []}}
    onSubmit={onLogin}
    render={() => (
      <Form className='update-form'>
        <Field name='id' type="text" placeholder='id' />
        <Field name='title' type="text" placeholder='title' />
        <Field name='director' type="text" placeholder='director' />
        <Field name='metascore' type="number" placeholder='metascore' />
        <Field name='stars' type="text" placeholder='stars' />        
        <input type='submit' />
      </Form>
      )}
    />
  );
}

export default UpdateForm;