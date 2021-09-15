import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MDButton from '@material-ui/core/Button';

import './Contact.scss'
import Header from '../../components/Header'
import PageTitle from '../../components/PageTitle/PageTitle'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Footer from '../../components/Footer'

const Contact = () => {
  const [dialogOpen, setDialogOpen] = useState(false)

  const onSubmit = (value) => {
    setDialogOpen(true)
    formik.resetForm()
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

  console.log(formik)

  return (
    <main>
      <Header />
      <PageTitle title="Contact Us" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />

      <section className="contact-us">
        <div className="info-form">
          <div className="info">

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

      </section>
      <Footer />

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Your message has been sent!</DialogTitle>
        <DialogContent>
          <DialogContentText>{formik.values.name}, we will send you a response in a few hours</DialogContentText>
        </DialogContent>
        <DialogActions>
          <MDButton onClick={() => setDialogOpen(false)} color="primary" variant="contained">OK</MDButton>
        </DialogActions>
      </Dialog>

    </main>
  )
}

export default Contact
