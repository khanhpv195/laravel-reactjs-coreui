import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../../../components/Header/';
import Sidebar from '../../../components/Sidebar/';
import Breadcrumb from '../../../components/Breadcrumb/';
import Aside from '../../../components/Aside/';
import Footer from '../../../components/Footer/';
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    FormGroup,
    Input,
    Label,
    Row,
    Alert
} from 'reactstrap';

class CreateProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: '',
            showMyComponent: false
        }

        this.handleTitle = this.handleTitle.bind(this)
        this.handleBody = this.handleBody.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleTitle(e) {
        this.setState({
            title: e.target.value
        })
    }
    handleBody(e) {
        this.setState({
            body: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = {
            title: this.state.title,
            body: this.state.body
        }

        axios.post('/api/products', data)
            .then(function (response) {
                this.props.history.push('/product')
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const MessagessBox = () => {
            return (
                <Alert color="success" style={this.state.showMyComponent ? {} : { display: 'none' }}>
                    This is a success alert — check it out!
              </Alert>
            )
        }
        return (
            <div className="app">
                <Header />
                <div className="app-body">
                    <Sidebar {...this.props} />
                    <main className="main">
                        <Breadcrumb />
                        <Container fluid>
                            <MessagessBox />
                            <Row>
                                <Col xs="12" sm="12">
                                    <form onSubmit={this.handleSubmit}>
                                        <Card>
                                            <CardHeader>
                                                <strong>Create Product</strong>

                                            </CardHeader>
                                            <CardBody>
                                                <Row>
                                                    <Col xs="12">
                                                        <FormGroup>
                                                            <Label htmlFor="name">Title</Label>
                                                            <Input type="text" id="title" placeholder="Enter your title" required
                                                                defaultValue={this.state.title}
                                                                onChange={this.handleTitle}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="12">
                                                        <FormGroup>
                                                            <Label htmlFor="name">Body</Label>
                                                            <Input type="text" id="body" placeholder="Enter your body" required
                                                                defaultValue={this.state.body}
                                                                onChange={this.handleBody}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="12">
                                                        <button type='submit' className="btn btn-lg btn-primary">Create</button>
                                                    </Col>
                                                </Row>

                                            </CardBody>
                                        </Card>
                                    </form>
                                </Col>
                            </Row>
                        </Container>
                    </main>
                    <Aside />
                </div>
                <Footer />
            </div>
        );
    }
}

export default CreateProduct;
