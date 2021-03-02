import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { prevQueries, searchResults, submitSearch, save } from './searchSlice';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { unwrapResult } from '@reduxjs/toolkit';

export const Search = () => {
    const queries = useSelector(prevQueries);
    const results = useSelector((searchResults));
    const dispatch = useDispatch();
    const [botCode, updateBotCode] = useState('A6N94C20');
    const [SearchStatus, setSearchStatus] = useState('idle')

    useEffect(() => {
        updateBotCode(generateBotCode(8));
    }, []);

    const generateBotCode = codeLength => {
        let result           = '';
        const characters       = 'ABCDEFGHIJKLMNPQRSTUVWXYZ123456789';
        const charactersLength = characters.length;
        for ( let i = 0; i < codeLength; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const formik = useFormik({
        initialValues: {
            query: '',
            botCheck: '',
            botCode: generateBotCode(8),
        },
        validationSchema: Yup.object({
            query: Yup.string().required('Please enter something to search for.'),
            botCheck: Yup.string().required('Please help us prevent automated abuse by entering the code shown.')
            .test(
                'equal',
                'I think you may be a bot!',
                function(botCode) {
                    const ref = Yup.ref('botCheck');
                    return botCode === this.resolve(ref);
                }
            )
        }),
        onSubmit: values => {
            if (canSave) {
                try {
                    setSearchStatus('pending');
                    const resultAction = dispatch(
                        submitSearch(values.query)
                    )
                    unwrapResult(resultAction);
                } catch (err) {
                    console.error('Failed to submit: ', err);
                } finally {
                    dispatch(save(values.query));
                    setSearchStatus('idle')
                }
            }
            
            dispatch(save(values.query));
            dispatch(submitSearch(values.query));
        }
    })

    const canSave = [formik.values.query, formik.values.botCheck].every(Boolean) && SearchStatus === 'idle'

    return (
        <Container>
            <div className='spacer'></div>
            <div className='center'>
                <h2>Search Hacker News via Algolia</h2>
            </div>
            <Form onSubmit={formik.handleSubmit}>
                <Row>
                    <Col xs='12'>
                        <FormGroup>
                            <Label for='query'>Query</Label>
                            <Input
                                id='query'
                                name='query'
                                type='text'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.query}
                                className={formik.touched.query && !formik.errors.query ? 'form-control is-valid' : 'form-control is-invalid'}
                            />
                            {formik.touched.query && formik.errors.query ? <div className='invalid-feedback'>{formik.errors.query}</div> : null}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs='8'>
                        <FormGroup>
                            <Label for='botCheck'>Are You Human?</Label>
                            <Input
                                id='botCheck'
                                name='botCheck'
                                type='text'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.botCheck}
                                className={formik.touched.botCheck && !formik.errors.botCheck ? 'form-control is-valid' : 'form-control is-invalid'}
                            />
                            {formik.touched.botCheck && formik.errors.botCheck ? <div className='invalid-feedback'>{formik.errors.botCheck}</div> : null}
                        </FormGroup>
                    </Col>
                    <Col xs='4'>
                        <Label>Verification Code:&nbsp;<span className="badge badge-warning">{formik.values.botCode}</span></Label>
                    </Col>
                </Row>
                <Row>
                    <Col xs='6'>
                        <Label for='submit'>&nbsp;</Label>
                        <Button type='submit' style={{width: '100%'}} className='btn-info'>Submit</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}