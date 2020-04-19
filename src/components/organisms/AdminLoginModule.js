import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

import "./AdminLoginModule.scss";
import logo from "../../static/logo/ua_logo.png";

const AdminLoginModule = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(email);
    console.log(password);
  });

  const handleClick = async () => {};

  return (
    <div className="flex-grow-1 login-module d-flex flex-column">
      <a href="/" className="align-self-center">
        <img src={logo} className="logo" width="120px" alt="UA_logo" />
      </a>
      <Form className="login-form">
        <Form.Group>
          <Form.Label>이메일</Form.Label>
          <Form.Control
            type="email"
            onChange={value => setEmail(value.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            onChange={value => setPassword(value.target.value)}
          />
        </Form.Group>
        <Button
          className="login-button"
          variant="dark"
          type="submit"
          onClick={handleClick}
        >
          로그인
        </Button>
      </Form>
    </div>
  );
};

export default AdminLoginModule;