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
    FormText,
    Media
} from 'reactstrap';
import YouTube from 'react-youtube';

class ShowRecipe extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            content: '',
            images: '',
            url_video:'',
            showMyComponent: false
        }

    }
    handleOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount() {
        let url = 'http://127.0.0.1:8000/api/recipe/' + this.props.match.params.id
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

    render() {
        const opts = {
            height: '500',
            width: '100%',
            playerVars: {
              autoplay: 1
            }
        }
        return (
            <div className="app">
                <Header />
                <div className="app-body">
                    <Sidebar {...this.props} />
                    <main className="main">
                        <Breadcrumb />
                        <Container fluid>
                            <Row>
                                <Col xs="12" lg="12">
                                    <h1>{this.state.title}</h1>

                                    <p> {this.state.content}</p>

                                </Col>
                                </Row>
                                <Row>

                                <Col xs="12" lg="12">
                                        <YouTube
                                        videoId="eLH7Ta7m6QU"
                                        opts={opts}
                                        onReady={this._onReady}
                                    />
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

export default ShowRecipe;
