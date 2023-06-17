/* eslint-disable react/no-danger */
import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import * as DOMPurify from 'dompurify';
import { getUsers } from '../../slices/users/usersSlice';
import './trainers.scss';

const Trainers = ({ text }) => {
  const [trainers, setTrainers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers()).then((res) => {
      setTrainers(res.payload.filter((user) => user.role === 'trainer'));
    });
  }, [dispatch]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
      className='site-section'
      id='trainer-section'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 mb-5'>
            <h2 className='section-title'>Тренери</h2>
            {/* trainersMainText */}
            <p dangerouslySetInnerHTML={{ __html: `${DOMPurify.sanitize(text)}` }} />
          </div>
        </div>
        <div className='row m-t-1'>
          {trainers.map((trainer) => {
            return (
              <Link key={trainer._id} to={trainer.username} style={{ color: 'white' }}>
                <div className='col-md-6 person col-lg-6 mb-4 mb-lg-0'>
                  {trainer.photo ? (
                    <img
                      src={trainer.photo}
                      alt={`${trainer.name} ${trainer.surname}`}
                      className='img-fluid mb-5 img-square'
                    />
                  ) : (
                    <div style={{ display: 'flex' }}>
                      <Avatar sx={{ width: 120, height: 120, fontSize: 50 }}>
                        {trainer.name[0]}
                        {trainer.surname[0]}
                      </Avatar>
                    </div>
                  )}
                  <h3>
                    {trainer.name} {trainer.surname}
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: `${
                        trainer.about.length > 300
                          ? `${DOMPurify.sanitize(trainer.about).slice(0, 300)}...`
                          : DOMPurify.sanitize(trainer.about)
                      }`,
                    }}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

Trainers.propTypes = {
  // eslint-disable-next-line react/require-default-props
  text: PropTypes.string,
};

export default Trainers;
