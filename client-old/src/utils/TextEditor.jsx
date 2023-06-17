import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({ value, setValue }) => {
  return (
    <div>
      <ReactQuill theme='snow' value={value} onChange={setValue} />
    </div>
  );
};

// ReactProps check
TextEditor.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default TextEditor;
