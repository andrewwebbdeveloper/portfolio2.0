import React from 'react';
import styled from 'styled-components';
// import { Formik } from 'formik';
import PDF from './Andrew_Webb_Resume.pdf';

import { color, font, titleFont } from './utilities';
import device from './utilities/media';

const FormArea = styled.div`
  margin-top: -40rem;
  padding: 5rem 0 5rem 0;
  width: 100vw;
  height: min-content;
  background: ${color[0]};
  display: grid;
  justify-self: center;
  justify-content: center;
  align-items: center;

  @media ${device.mobileM} {
    padding: 5rem 0 1rem 0;
  }

  @media ${device.desktop} {
    height: 70rem;
  }
  @media ${device.desktopL} {
    height: 70rem;
  }
  a {
    justify-self: center;
  }
  .hidden {
    display: none;
  }

  h2 {
    ${titleFont};
    text-align: center;
    font-size: 5rem;
    color: ${color[3]};
    justify-self: center;
    margin: 1rem;
    margin-top: 20rem;
    padding: 0;

    @media ${device.tablet} {
      font-size: 4rem;
    }
    @media ${device.mobileM} {
      font-size: 3rem;
    }

    @media ${device.desktop} {
      font-size: 9rem;
    }
    @media ${device.desktopL} {
      font-size: 9rem;
    }
  }

  form {
    ${font};
    display: grid;
    grid-template-columns: 50% 50%;
  }

  input {
    border: none;
    overflow: auto;
    outline: none;
    box-shadow: none;
    ${font};
    color: ${color[3]};
    font-size: 1.2rem;
    min-height: 2rem;
    width: auto;
    padding: 0.2rem;
    padding-left: 1rem;
    margin: 1rem;

    @media ${device.tablet} {
      grid-column: 1 / span 2;
    }
    @media ${device.desktop} {
      min-height: 4rem;
    }
    @media ${device.desktopL} {
      min-height: 4rem;
    }
  }
  textarea {
    ${font};
    color: ${color[3]};
    grid-column: 1 / end;
    font-size: 1.2rem;
    min-height: 10rem;
    width: auto;
    padding: 1rem;
    margin: 1rem;

    @media ${device.desktop} {
      min-height: 15rem;
    }
    @media ${device.desktopL} {
      min-height: 15rem;
    }
  }

  button {
    text-transform: uppercase;

    justify-self: center;
    width: min-content;
    ${font};
    color: ${color[3]};
    font-weight: 700;
    font-size: 1rem;
    text-align: center;
    padding: 1rem;
    border: 0.3rem solid ${color[3]};
    transition: all ease 0.1s;

    @media ${device.mobileM} {
      width: 15rem;
    }
    @media ${device.desktop} {
      width: 30rem;
    }
    @media ${device.desktopL} {
      width: 30rem;
    }

    &:hover {
      color: ${color[2]};
      border: 0.3rem solid ${color[1]};
    }
    &:active {
      border: 0.3rem solid ${color[0]};
      color: ${color[0]};
      background: ${color[3]};
    }
  }
`;

const FooterResumeButton = styled.button`
  text-decoration: uppercase;
  justify-self: center;
  width: min-content;
  padding: 1rem;
`;

const LinkButton = styled.a`
  text-decoration: none;
  font-size: 5rem;
  justify-self: center;
  color: ${color[2]};
  margin-bottom: 1rem;
  transition: all ease-in-out 0.1s;

  &:hover {
    color: ${color[1]};
  }
`;

const Form = () => (
  <FormArea>
    <h2>Contact</h2>
    <LinkButton
      className="far fa-envelope"
      href="mailto:drewbird87@gmail.com"
    />

    <LinkButton
      className="fab fa-linkedin"
      rel="noopener noreferrer"
      target="_blank"
      href="https://www.linkedin.com/in/andrew-webb-web-developer"
    />

    <a href={PDF} target="_blank" rel="noopener noreferrer">
      <FooterResumeButton>Resume</FooterResumeButton>
    </a>

    {/* <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,

      }) => (
        <form
          name="contact"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <p className="hidden">
            <label htmlFor="bot-field">
              Don’t fill this out if you're human:
              <input name="bot-field" />
            </label>
          </p>
          <input
            required
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors.name && touched.name && errors.name}
          <input
            required
            type="email"
            name="email"
            placeholder="email@email.com"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email}
          <textarea
            name="message"
            placeholder="Message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          />
          {errors.message && touched.message && errors.message}
          <div data-netlify-recaptcha="true" />
          <button type="submit" disabled={isSubmitting}>
            Send Message
          </button>
        </form>
      )}
    </Formik>  */}
  </FormArea>
);

export default Form;
