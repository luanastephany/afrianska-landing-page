import React, { useState } from 'react'
import { FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import MDButton from '@material-ui/core/Button'
import GoogleMapReact from 'google-map-react'

import './Contact.scss'
import Header from '../../components/Header'
import PageTitle from '../../components/PageTitle/PageTitle'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Footer from '../../components/Footer'

const key = process.env.REACT_APP_GOOGLE_MAPS_KEY

const Contact = () => {
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleClose = () => {
    formik.resetForm()
    setDialogOpen(false)
  }

  const onSubmit = (value) => {
    setDialogOpen(true)
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      message: Yup.string().min(20).required()
    }),
    onSubmit,
  })

  return (
    <main>
      <Header />
      <PageTitle title="Contact Us" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />

      <section className="contact-us">
        <div className="info-form">
          <div className="info">
            <img className="contact-img" src="/img/contact-pic.png" alt="" />
            <h2 className="title">Address</h2>
            <p className="description">Id convallis placerat sit sed duis id amet volutpat quam a, pharetra.</p>

            <h2 className="title">Phone</h2>
            <div className="contact">
              <FaPhoneAlt color="#a6acb3" />
              <span className="contact-info">+62-812-7313-4321</span>
            </div>
            <div className="contact">
              <FaPhoneAlt color="#a6acb3" />
              <span className="contact-info">+62-817-000-1234</span>
            </div>


            <h2 className="title">Online Service</h2>
            <div className="contact">
              <FaGlobe color="#a6acb3" />
              <p className="contact-info">www.afrianska.com</p>
            </div>
            <div className="contact">
              <FaEnvelope color="#a6acb3" />
              <p className="contact-info">hello.afrian@gmail.com</p>
            </div>

          </div>

          <div className="form">
            <Input
              label="Full Name"
              placeholder="Your Name"
              value={formik.values.name}
              onChange={event => formik.setFieldValue('name', event.target.value)}
              error={formik.errors.name}
            />

            <Input
              label="Email"
              placeholder="Your Email"
              value={formik.values.email}
              onChange={event => formik.setFieldValue('email', event.target.value)}
              error={formik.errors.email}
            />

            <Input
              label="Message"
              multiline
              placeholder="Your Message"
              value={formik.values.message}
              onChange={event => formik.setFieldValue('message', event.target.value)}
              error={formik.errors.message}
            />

            <Button onClick={formik.submitForm} style={{ width: '100%' }}>Submit</Button>
          </div>
        </div>

        <div className="map">
          <GoogleMapReact
            bootstrapURLKeys={{ key }}
            defaultCenter={{
              lat: 45.42047149662438,
              lng: -75.69799644801994
            }}
            defaultZoom={11}
          />
        </div>

      </section>
      <Footer />

      <Dialog open={dialogOpen} onClose={handleClose}>
        <DialogTitle>Your message has been sent!</DialogTitle>
        <DialogContent>
          <DialogContentText>{formik.values.name}, we will send you a response in a few hours</DialogContentText>
        </DialogContent>
        <DialogActions>
          <MDButton onClick={handleClose} color="primary" variant="contained">OK</MDButton>
        </DialogActions>
      </Dialog>

    </main>
  )
}

export default Contact
