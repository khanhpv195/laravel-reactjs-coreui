import React, {Component} from 'react';
import {Container, Row, Col, Card, CardBody, CardFooter, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
        email: '',
        password: '',
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

    handleChangeEmail(e) {
        this.setState({email: e.target.value});
    }

    handleChangePassword(e) {
        this.setState({password: e.target.value});
    }

    handleSubmit(e) {
      console.log(this.state.email)
    }
  render() {
    
    return (
      
      <div className="app flex-row align-items-center">
        <Container>
      
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <form onSubmit={this.handleSubmit}>
                  <InputGroup className="mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="icon-user"></i>
                      </span>
                    </div>
                    <Input type="text" placeholder="Username"/>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                    </div>
                    <Input type="text" placeholder="Email" onChange={this.handleChangeEmail} />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="icon-lock"></i>
                      </span>
                    </div>
                    <Input type="password" placeholder="Password"  onChange={this.handleChangePassword}/>
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="icon-lock"></i>
                      </span>
                    </div>
                    <Input type="password" placeholder="Repeat password" />
                  </InputGroup>
                  <Button  type="submit" color="success" block>Create Account</Button>
                  </form>
                </CardBody>
               
              </Card>
            </Col>
          </Row>
        
        </Container>
        
      </div>
    );
  }
  gotoLogin() {
    alert(this.state.username)
  }
 
}

export default Register;
