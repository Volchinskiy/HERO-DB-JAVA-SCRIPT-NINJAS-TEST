import React from 'react'
import axios from 'axios';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import { Link } from "react-router-dom";

export default function HeroAdd() {
  interface IValues {
    nickname: string;
    real_name: string;
    origin_description: string;
    superpowers: string;
    catch_phrase: string;
    images: string;
  }

  const onSubmit = async (values: IValues) => {
    await axios.post("http://localhost:5000/api/heroes", values);
    window.location.assign('/');
  }

  const shema = Yup.object().shape({
    nickname: Yup.string().default(''),
    real_name: Yup.string().default(''),
    origin_description: Yup.string().default(''),
    superpowers: Yup.string().default(''),
    catch_phrase: Yup.string().default(''),
    images: Yup.string().default(''),
  });
  return (
    <div>
      <h1>ADD NEW HERO</h1>
      <Formik
        initialValues={{
          nickname: '',
          real_name: '',
          origin_description: '',
          superpowers: '',
          catch_phrase: '',
          images: '',
        }}
        validationSchema={shema}
        onSubmit={(values: IValues) => {onSubmit(values)}}
      >
        <Form className='formik'>
          <label className='formik__label'>Nickname</label>
          <Field className='formik__input' name="nickname" placeholder="UNKNOWN" />

          <label className='formik__label'>Real Name</label>
          <Field className='formik__input' name="real_name" placeholder="UNKNOWN" />

          <label className='formik__label'>Origin Description</label>
          <Field className='formik__input' name="origin_description" placeholder="UNKNOWN" />

          <label className='formik__label'>Superpowers</label>
          <Field className='formik__input' name="superpowers" placeholder="UNKNOWN" />

          <label className='formik__label'>Catch Phrase</label>
          <Field className='formik__input' name="catch_phrase" placeholder="UNKNOWN" />

          <label className='formik__label'>Images</label>
          <Field className='formik__input' name="images" placeholder="UNKNOWN" />
          <div className='formik__btn-wrapper'>
            <Link to="/">
              <button className='formik__go-back'>Go Back</button>
            </Link>
            <button className='formik__submit' type="submit">Submit</button>
          </div>
        </Form>

      </Formik>
    </div>
  )
}
