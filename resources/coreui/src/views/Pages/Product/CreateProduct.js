import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../../../components/Header/';
import Sidebar from '../../../components/Sidebar/';
import Breadcrumb from '../../../components/Breadcrumb/';
import Aside from '../../../components/Aside/';
import Footer from '../../../components/Footer/';
import {
    Badge,
    Button,
    ButtonDropdown,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Fade,
    Form,
    FormGroup,
    FormText,
    FormFeedback,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Label,
    Row,
} from 'reactstrap';

class CreateProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
    }
    handleSubmit(e) {
        e.preventDefault()
        axios.post('/user', {
            title: 'Fred',
            body: 'Flintstone'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    render() {
        return (
            <div className="app">
                <Header />
                <div className="app-body">
                    <Sidebar {...this.props} />
                    <main className="main">
                        <Breadcrumb />
                        <Container fluid>
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
                                                            <Input type="text" id="title" placeholder="Enter your title" required />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="12">
                                                        <FormGroup>
                                                            <Label htmlFor="name">Body</Label>
                                                            <Input type="text" id="body" placeholder="Enter your body" required />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="12">
                                                        <button class="btn btn-lg btn-primary" type="button">Create</button>
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
