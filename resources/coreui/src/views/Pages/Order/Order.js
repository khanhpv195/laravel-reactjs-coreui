import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../../components/Header/';
import Sidebar from '../../../components/Sidebar/';
import Breadcrumb from '../../../components/Breadcrumb/';
import Aside from '../../../components/Aside/';
import Footer from '../../../components/Footer/';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class Order extends Component {
    render() {
        return (
            <div className="app">
        <Header/>
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb/>
            <Container fluid>
            <Row>
            <Col xs="12" lg="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Order
                </CardHeader>
                <CardBody>
                  <Table className="table table-responsive-sm table-striped">
                    <thead>
                    <tr>
                      <th>Username</th>
                      <th>Date registered</th>
                      <th>Role</th>
                      <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Samppa Nori</td>
                      <td>2012/01/01</td>
                      <td>Member</td>
                      <td>
                        <Badge color="success">Active</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Estavan Lykos</td>
                      <td>2012/02/01</td>
                      <td>Staff</td>
                      <td>
                        <Badge color="danger">Banned</Badge>
                      </td>
                    </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            </Row>
            </Container>
          </main>
          <Aside/>
        </div>
        <Footer/>
      </div>
        );
    }
}

export default Order;
