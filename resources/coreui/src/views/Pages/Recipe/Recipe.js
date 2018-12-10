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
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class Recipe extends Component {
    constructor(props) {
        super(props)
        this.state = { products: '', pageCount: 0, tit: '', body: '' }
        this.handleDelete = this.handleDelete.bind(this)
    }
    componentDidMount() {
        this.callApi()
    }

    callApi() {
        let url = Setting.URL+ 'api/recipe'
        axios.get(url)
            .then(response => {

                this.setState({products: response.data});
                console.log(this.state.products)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    handleDelete(e) {
        let id = e;
        let url = Setting.URL+'api/recipe/' + id
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
                    <tr key={i}><td>{object.id}</td><td><Link to={'/recipe/show/'+object.id}>{object.title}</Link> </td><td><img  style={{ width:150 }} src={object.images} className="img"/></td><td>{object.user_id}</td><td>{object.created_at}</td><td>
                    <Link className="btn  btn-info active  btn-sm" to={'/products/edit/'+object.id}>Edit</Link>
                    </td><td><button onClick={() => this.handleDelete(object.id)} className="btn  btn-danger  btn-sm" type="button">Delete</button></td></tr>
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
                                <Link className='btn btn-success pull-left' to='/recipe/create'>Add Recipe</Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12" lg="12">
                                    <Card>
                                        <CardHeader>
                                            <i className="fa fa-align-justify"></i>Recipe
                                        </CardHeader>
                                        <CardBody>
                                            <Table className="table table-responsive-sm table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Images</th>
                                                        <th>Title</th>
                                                        <th>Author</th>
                                                        <th>Date</th>
                                                        <th>Update</th>
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
                            <ReactPaginate previousLabel={"previous"}
                                nextLabel={"next"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={3}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={2}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"} />
                        </Container>
                    </main>
                    <Aside />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Recipe;
