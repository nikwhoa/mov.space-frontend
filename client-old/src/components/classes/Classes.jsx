/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Navigation, A11y, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import * as DOMPurify from 'dompurify';
import { useDispatch, useSelector } from 'react-redux';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/bundle';
import './classes.scss';
import { getClasses } from '../../slices/classes/classesSlice';
import LoadingSpinner from '../../utils/LoadingSpinner';
import Class from './Class';

const Classes = ({ settings }) => {
  const dispatch = useDispatch();

  const { classes } = useSelector((state) => state.classes);
  const { isLoading } = useSelector((state) => state.classes);

  useEffect(() => {
    dispatch(getClasses());
  }, [dispatch]);

  return (
    <motion.div
      transition={{ duration: 0.75 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='site-section section-2'
      id='classes-section'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 mb-5'>
            <h2 className='section-title'>Тренування</h2>
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(settings.classesMainText) }} />
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <Swiper
              modules={[Navigation, A11y, Scrollbar]}
              slidesPerView={3}
              navigation
              loop
              scrollbar={{ draggable: true }}
            >
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                classes.map((item) => (
                  <SwiperSlide key={item._id}>
                    <Link className='work-thumb' key={item._id} state='test1' to={`class/${item.classUrl}`}>
                      <div className='work-text'>
                        <h3>{item.className}</h3>
                      </div>
                      <img src={item.classImage} alt={item.className} className='img-fluid' />
                    </Link>
                  </SwiperSlide>
                ))
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Classes;
