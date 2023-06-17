import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import { Checkbox } from '@mui/material';
import { getClasses, uploadPicture, updateClass } from '../../../slices/classes/classesSlice';
import LoadingSpinner from '../../../utils/LoadingSpinner';
import './style.scss';
import TextEditor from '../../../utils/TextEditor';

function Class() {
  const { id } = useParams();
  const [editClassForm, setEditClassForm] = useState({});
  const [editorValue, setEditorValue] = useState('');
  const { classes, isLoading, isLoadingImage, status } = useSelector((state) => state.classes);
  const [preview, setPreview] = useState(null);
  const [uploadImage, setUploadImage] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!classes || classes.length === 0) {
      dispatch(getClasses());
    }
  }, [dispatch, classes]);

  useEffect(() => {
    if (!isLoading && classes) {
      const foundClass = classes.find((el) => el._id === id);
      if (foundClass) {
        setEditClassForm(foundClass);
      }
    }
  }, [id, classes, isLoading]);

  useEffect(() => {
    if (status === 'Тренування успішно змінено') {
      dispatch(getClasses());
    }
    if (status) {
      toast(status);
    }
  }, [status]);

  if (uploadImage) {
    dispatch(uploadPicture(uploadImage))
      .then((res) => {
        setEditClassForm({ ...editClassForm, classImage: res.payload.fileUrl });
      })
      .then(setUploadImage(false));
    setPreview(URL.createObjectURL(uploadImage));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = CyrillicToTranslit({ preset: 'uk' }).transform(editClassForm.className);

    dispatch(
      updateClass({
        className: editClassForm.className,
        classDescription: editClassForm.classDescription,
        classImage: editClassForm.classImage,
        classID: id,
        classUrl: url.replace(/ /g, '-'),
        showOnMainPage: editClassForm.showOnMainPage,
      })
    );
  };

  const handleInputChange = (e) => {
    setEditClassForm({ ...editClassForm, [e.target.name]: e.target.value });
  };
  console.log(editClassForm);
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-lg-12 mb-5'>Редагувати тренування</div>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className='col-lg-8'>
            <div>
              <form className='update-class'>
                <div className='input-container'>
                  <label className='label'>
                    <input
                      type='text'
                      placeholder='Назва тренування'
                      className='form-input'
                      name='className'
                      value={editClassForm.className || ''}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className='input-container update-class-description'>
                  <TextEditor
                    value={editClassForm.classDescription || ''}
                    setValue={(text) => setEditClassForm({ ...editClassForm, classDescription: text })}
                  />
                </div>
                <div className='input-container'>
                  <p>Показати на головній сторінці?</p>
                  <Checkbox
                    value={editClassForm.showOnMainPage || false}
                    checked={editClassForm.showOnMainPage || false}
                    style={{ color: 'green' }}
                    onChange={() =>
                      setEditClassForm({ ...editClassForm, showOnMainPage: !editClassForm.showOnMainPage })
                    }
                  />
                </div>
                <br />
                <div className='input-container input-container-image'>
                  <label className='label'>
                    <div>Зображення</div>
                    <br />
                    <img src={preview || editClassForm.classImage} className='uploaded-image' alt='preview' />
                  </label>
                </div>
                <div className='input-container'>
                  <label className='label'>
                    <input
                      type='file'
                      placeholder='Зображення'
                      className='form-input'
                      onChange={(e) => setUploadImage(e.target.files[0])}
                    />
                    {!isLoadingImage ? <span className='done'>&#9989;</span> : null}
                  </label>
                </div>
                <div>
                  <button type='submit' className='btn btn-primary' onClick={handleSubmit}>
                    Редагувати
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Class;
