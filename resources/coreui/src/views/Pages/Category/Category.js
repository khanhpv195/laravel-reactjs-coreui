import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from '../../../components/Header/';
import Sidebar from '../../../components/Sidebar/';
import Breadcrumb from '../../../components/Breadcrumb/';
import Aside from '../../../components/Aside/';
import Footer from '../../../components/Footer/';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import  {Link}  from 'react-router-dom';
import Setting from '../../../constant/setting.js'
import { ClipLoader} from 'react-spinners';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import styles from './../Recipe/DashedBox.css';
class Category extends Component {
    constructor(props) {
        super(props)
        this.state = { loading: true,products: '', pageCount: 0, tit: '', body: '' }
        this.handleDelete = this.handleDelete.bind(this)
    }
    componentDidMount() {
        this.callApi()
    }

    callApi() {
        let url = Setting.URL+ 'api/category'
        axios.get(url)
            .then(response => {

                this.setState({products: response.data,loading:false});
                console.log(this.state.products)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    handleDelete(e) {
        let id = e;
        let url = Setting.URL+'api/user/' + id
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
                    <tr key={i}><td>{object.id}</td><td>{object.name}</td><td><button onClick={() => this.handleDelete(object.id)} className="btn  btn-danger  btn-sm" type="button">Delete</button></td></tr>
                )
            })
        }
    }
    handleEdit(e) {


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
                                            <i className="fa fa-align-justify"></i>Category
                                        </CardHeader>
                                        <CardBody>
                                        <ClipLoader
                                        className={styles.override}
                                        sizeUnit={"px"}
                                        size={50}
                                        color={'#39b2d5'}
                                        loading={this.state.loading}
                                      />
                                            <Table className="table table-responsive-sm table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Delete </th>
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

export default Category;
