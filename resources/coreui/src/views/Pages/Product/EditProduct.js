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

class EditProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: '',
            showMyComponent: false
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount () {
        let url =  'http://127.0.0.1:8000/api/products/' + this.props.match.params.id + '/edit'
        console.log(url)
        axios.get(url)
          .then(response => {
            this.setState(response.data)
            console.log(response.data)
          })
          .catch(function (error) {
            console.log(error)
          })

    }


    async handleSubmit(e) {
        e.preventDefault()
        let url =  'http://127.0.0.1:8000/api/products/' + this.props.match.params.id
        const data = {
          title: this.state.title,
          body: this.state.body
        }
        axios.patch(url, data)
          .then(response => {
            this.setState({
                showMyComponent:true
            })
          })
          .catch(function (error) {
            console.log(error)
          })
    }


    render() {
        const MessagessBox = () => {
            return (
                <Alert color="success" style={this.state.showMyComponent ? {} : { display: 'none' }}>
                    Update a success alert — check it out!
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
                                                                name="title"
                                                                value={this.state.title}
                                                                onChange={this.handleOnChange}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="12">
                                                        <FormGroup>
                                                            <Label htmlFor="name">Body</Label>
                                                            <Input type="text" id="body" placeholder="Enter your body" required
                                                                name="body"
                                                                value={this.state.body}
                                                                onChange={this.handleOnChange}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="12">
                                                        <button type='submit' className="btn btn-lg btn-primary">Update</button>
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

export default EditProduct;
