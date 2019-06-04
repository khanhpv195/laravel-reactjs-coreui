import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../../../components/Header/';
import Sidebar from '../../../components/Sidebar/';
import Breadcrumb from '../../../components/Breadcrumb/';
import Aside from '../../../components/Aside/';
import Footer from '../../../components/Footer/';
import Setting from './../../../constant/setting.js'
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
import styles from './DashedBox.css';
import { ClipLoader } from 'react-spinners';
class EditRecipe extends Component {
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
            showMyComponent: false,
            loading:true
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        let url =  Setting.URL+'api/recipe/' + this.props.match.params.id + '/edit'
        console.log(url)
        axios.get(url)
          .then(response => {
            this.setState(response.data)
            this.setState({loading:false})
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
        let url =  Setting.URL+'api/recipe/' + this.props.match.params.id;
        axios.patch(url, data)
          .then(response => {
            this.setState({
                showMyComponent:true,
                loading:false

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
                                                <strong>Edit Recipe</strong>

                                            </CardHeader>
                                            <CardBody>
                                            <ClipLoader
                                            className={styles.override}
                                            sizeUnit={"px"}
                                            size={50}
                                            color={'#39b2d5'}
                                            loading={this.state.loading}
                                          />
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
                                                            <Input type="select" value={this.state.user_id}  name="user_id" id="user_id" disabled
                                                            className="form-control"
                                                            onChange={this.handleOnChange}
                                                            >
                                                                <option >Please select</option>
                                                                <option value="1">Admin</option>
                                                            </Input>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="12">
                                                        <button  type='submit' className="btn btn-lg btn-primary">Edit</button>
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

export default EditRecipe;
