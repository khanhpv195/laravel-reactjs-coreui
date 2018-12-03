import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from '../../../components/Header/';
import Sidebar from '../../../components/Sidebar/';
import Breadcrumb from '../../../components/Breadcrumb/';
import Aside from '../../../components/Aside/';
import Footer from '../../../components/Footer/';
import axios from 'axios'
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = { products: '' }
        this.handleDelete = this.handleDelete.bind(this)
    }
    componentDidMount() {
        this.callApi()
    }

    callApi() {
        axios.get('http://127.0.0.1:8000/product')
            .then(response => {
                this.setState({ products: response.data })
                console.log(this.state.products)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    handleDelete(e) {
        let id = e;
        let url = 'http://127.0.0.1:8000/product/' + id
        if (!confirm('Are your sure you want to delete this item?')) {
            return false
        }
        axios.delete(url)
            .then(response => {
                this.callApi()
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    fetchRows() {
        if (this.state.products instanceof Array) {
            return this.state.products.map((object, i) => {
                return (
                    <tr key={i}><td>{object.id}</td><td>{object.title}</td><td>{object.body}</td><td>{object.created_at}</td><td><button onClick={() => this.handleDelete(object.id)} className="btn  btn-danger  btn-sm" type="button">Delete</button></td></tr>
                )
            })
        }
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
                                <Col xs="12" lg="12">
                                    <Card>
                                        <CardHeader>
                                            <i className="fa fa-align-justify"></i> Product
                                        </CardHeader>
                                        <CardBody>
                                            <Table className="table table-responsive-sm table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Product Name</th>
                                                        <th>Content</th>
                                                        <th>Created at</th>
                                                        <th>Action </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.fetchRows()}
                                                </tbody>
                                            </Table>
                                        </CardBody>
                                    </Card>
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

export default Product;
