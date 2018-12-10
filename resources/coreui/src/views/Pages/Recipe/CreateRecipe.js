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
    Alert,
    FormText
} from 'reactstrap';

class CreateRecipe extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            content: '',
            images: '',
            url_video: '',
            user_id: '',
            cate_id:'',
            showMyComponent: false
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        this.callCategory();
    }
    async callCategory() {
        let url = 'http://127.0.0.1:8000/api/recipe/create';
        console.log(url)
        axios.get(url)
            .then(response => {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    handleOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async handleSubmit(e) {
        e.preventDefault();
        const data = {
            title: this.state.title,
            description: this.state.description,
            content: this.state.content,
            images: this.state.images,
            url_video: this.state.url_video,
            user_id: this.state.user_id,
            cate_id:this.state.cate_id

        }
        try {
            const response = await axios.post('/api/recipe', data);
            console.log(response.data)
            this.setState({
                title: '',
                description: '',
                content: '',
                images: '',
                url_video: '',
                user_id: '',
                showMyComponent: true
            }, () => {
            })
        } catch (error) {
            console.error(error);
        }
    }



    render() {
        const MessagessBox = () => {
            return (
                <Alert color="success" style={this.state.showMyComponent ? {} : { display: 'none' }}>
                    Create a success alert — check it out!
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
                                                            <Label htmlFor="name">Content</Label>
                                                            <Input type="textarea" name="content" id="textarea-input" rows="9"
                                                                placeholder="Content..."
                                                                name="content"
                                                                value={this.state.content}
                                                                onChange={this.handleOnChange}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="12">
                                                        <FormGroup>
                                                            <Label htmlFor="name">Description</Label>
                                                            <Input type="text" id="body" placeholder="Enter your description" required
                                                                name="description"
                                                                value={this.state.description}
                                                                onChange={this.handleOnChange}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="12">
                                                        <FormGroup>
                                                            <Label htmlFor="name">Category</Label>
                                                                <Input type="select" value={this.state.cate_id}  name="cate_id" id="cate_id" required
                                                                className="form-control"
                                                                onChange={this.handleOnChange}
                                                                >
                                                                    <option >Please select</option>
                                                                    <option value="1">Ăn sáng</option>
                                                                    <option value="2">Ăn trưa</option>
                                                                    <option value="3">Ăn tối</option>
                                                                    <option value="4">Ăn đêm</option>
                                                                    <option value="5">Ăn vặt</option>
                                                                </Input>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="12">
                                                        <FormGroup>
                                                            <Label htmlFor="name">Images</Label>
                                                            <Input type="text" id="images" placeholder="Enter your url" required
                                                                name="images"
                                                                value={this.state.images}
                                                                onChange={this.handleOnChange}
                                                            />
                                                        </FormGroup>
                                                    </Col>

                                                    <Col xs="12">
                                                        <FormGroup>
                                                            <Label htmlFor="name">Video</Label>
                                                            <Input type="text" id="url_video" placeholder="Enter your url" required
                                                                name="url_video"
                                                                value={this.state.url_video}
                                                                onChange={this.handleOnChange}
                                                            />
                                                        </FormGroup>
                                                    </Col>

                                                    <Col xs="12">
                                                        <FormGroup>
                                                            <Label htmlFor="name">User</Label>
                                                            <Input type="select" value={this.state.user_id}  name="user_id" id="user_id" required
                                                            className="form-control"
                                                            onChange={this.handleOnChange}
                                                            >
                                                                <option value="1">Admin</option>
                                                            </Input>
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

export default CreateRecipe;
