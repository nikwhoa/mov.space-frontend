/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react';
import * as DOMPurify from 'dompurify';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUsers } from '../../slices/users/usersSlice';

const TrainerPage = () => {
  const { trainerName } = useParams();
  const [trainer, setTrainer] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers()).then((res) => {
      setTrainer(res.payload.find((user) => user.username === trainerName));
    });
  }, [dispatch]);

  console.log(trainer);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 mb-5'>
          <h2>Основна інформація</h2>

          <div>
            <p>Ім&apos;я: {trainer.name}</p>
            <p>Прізвище: {trainer.surname}</p>
            <p>
              Телефон: <a href={`tel:${trainer.phone}`}>{trainer.phone}</a>
            </p>
            <p>
              Електронна пошта: <a href={`mailto:${trainer.email}`}>{trainer.email}</a>{' '}
            </p>
            <div dangerouslySetInnerHTML={{ __html: `${DOMPurify.sanitize(trainer.about)}` }} />
          </div>
        </div>
        <div className='col-lg-6 mb-5'>
          <img
            className='img-fluid mb-5 img-square'
            style={{ display: 'block', margin: '0 auto' }}
            src={
              trainer.photo
                ? trainer.photo
                : 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            }
            alt={`${trainer.name} ${trainer.surname}`}
          />
        </div>
      </div>
    </div>
  );
};

export default TrainerPage;
