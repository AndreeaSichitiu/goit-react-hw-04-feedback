import React from 'react';

import PropTypes from 'prop-types';
import style from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <section className={style.feedbackWrapper}>
      <h1 className={style.feedbackTitle}>{title}</h1>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
