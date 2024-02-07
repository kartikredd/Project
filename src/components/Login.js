import React from "react";
import { Row, Card, Col, Form, Input, Typography, Button, Layout } from "antd";
import Color from "./Layout";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const onclick = () => {
    navigate("/");
  };
  return (
    <>
      <Color />
      <Row>
        <Col span={8} offset={8}>
          <Card style={{ marginTop: "15%", backgroundColor: "lightblue" }}>
            <Form layout="vertical">
              <Typography style={{ fontSize: "50px", textAlign: "center" }}>
                Login
              </Typography>
              <Form.Item label="Email">
                <Input
                  placeholder="Please Enter Your Email"
                  style={{ padding: "12px 12px", fontSize: "20px" }}
                />
              </Form.Item>
              <Form.Item label="Password">
                <Input.Password
                  placeholder="Please Enter Your Password"
                  style={{ padding: "12px 12px", fontSize: "20px" }}
                />
              </Form.Item>
              <Form.Item style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  style={{
                    backgroundColor: "lightslategray",
                    padding: "20px 80px 50px 80px",
                    fontSize: "20px",
                    color: "white",
                  }}
                >
                  Sign In
                </Button>
              </Form.Item>
              <Form.Item>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Typography style={{ fontSize: "18px" }}>
                    Don't you have account?
                    <Button
                      type="link"
                      style={{ color: "black", fontSize: "18px" }}
                      onClick={onclick}
                    >
                      Register Now
                    </Button>
                  </Typography>
                </div>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Login;
