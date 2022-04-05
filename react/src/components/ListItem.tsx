import React from 'react'
import axios from 'axios';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';

interface IHero {
  nickname: string; 
  real_name: string;
  origin_description: string;
  superpowers: string; 
  catch_phrase: string; 
  images: string;
  _id: string;
}

interface IValues {
  nickname: string;
  real_name: string;
  origin_description: string;
  superpowers: string;
  catch_phrase: string;
  images: string;
}

export default function ListItem({nickname, real_name, origin_description, superpowers, catch_phrase, images, _id }: IHero) {
  const [showContent, setShowContent] = React.useState(0)
  const onDelete = async () => {
    // eslint-disable-next-line no-restricted-globals
    if(confirm(`Delete ${nickname}`)){
      await axios.delete(`http://localhost:5000/api/heroes/${_id}`);
      window.location.reload();
    }
  }

  const onLearnMore = () => {
    setShowContent(1);
  }

  const onGoBack = () => {
    setShowContent(0);
  }

  const onEdit = () => {
    setShowContent(2)
  }

  const onEditSubmit = async (values: IValues) => {
    await axios.put(`http://localhost:5000/api/heroes/${_id}`, values);
    window.location.reload();
  }

  const shema = Yup.object().shape({
    nickname: Yup.string().default(''),
    real_name: Yup.string().default(''),
    origin_description: Yup.string().default(''),
    superpowers: Yup.string().default(''),
    catch_phrase: Yup.string().default(''),
    images: Yup.string().default(''),
  });

  if(showContent === 0) {
    return(
      <div className='heroes-list__item'>
        <div className='heroes-list__nickname'>Nicknam: {nickname}</div>
        <div className='heroes-list__real-name'>Real Name: {real_name}</div>
        <button onClick={onLearnMore} className='heroes-list__learn-more-btn'>Learn More</button>
        <button onClick={onEdit} className='heroes-list__edit-btn'>Edit</button>
        <button onClick={onDelete} className='heroes-list__delete-btn'>Delete</button>
      </div>
    );
  } else if(showContent === 1){
    return(
      <div className='heroes-list__learn-more'>
        <div className='heroes-list__learn-more-item'>
        
        <div className='heroes-list__learn-more-text'> 
          <div className='heroes-list__learn-more-nickname'>Nicknam: {nickname}</div>
          <div className='heroes-list__learn-more-real-name'>Real Name: {real_name}</div>
          <div className='heroes-list__learn-more-origin_description'>Origin Description: {origin_description}</div>
          <div className='heroes-list__learn-more-superpowers'>Superpowers: {superpowers}</div>
          <div className='heroes-list__learn-more-catch_phrase'>Catch Phrase: {catch_phrase}</div>
        </div>
       
        <div className='heroes-list__learn-more-img'>
          <div className='heroes-list__learn-more-image'></div>
        </div>
       
        <button onClick={onGoBack} className='heroes-list__learn-more-go-back'>Go Back</button>

        </div>
      </div>
    )
  } else if(showContent === 2){
    return(
      <div className='heroes-list__edit'>
        <h2>Edit {nickname}</h2>
        <Formik
        initialValues={{
          nickname: nickname,
          real_name: real_name,
          origin_description: origin_description,
          superpowers: superpowers,
          catch_phrase: catch_phrase,
          images: images,
        }}
        validationSchema={shema}
        onSubmit={(values: IValues) => onEditSubmit(values)}
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
            <button onClick={onGoBack} className='formik__go-back'>Go Back</button>
            <button className='formik__submit' type="submit">Edit</button>
          </div>
        </Form>

      </Formik>
      </div>
    )
  } else {
    return (
      <div className='heroes-list__item'>
        <div className='heroes-list__nickname'>{nickname}</div>
        <div className='heroes-list__real-name'>{real_name}</div>
        <button className='heroes-list__learn-more-btn'>Learn More</button>
        <button className='heroes-list__edit-btn'>Edit</button>
        <button onClick={onDelete} className='heroes-list__delete-btn'>Delete</button>
      </div>
    )
  }  
}
