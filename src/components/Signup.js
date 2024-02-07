import React from "react";
import { Card, Col, Input, Row, Typography, Button } from "antd";
import Color from "./Layout";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const onclick = () => {
    navigate("/login");
  };
  return (
    <>
      <Color />
      <Row>
        <Col span={8} offset={8}>
          <Card
            style={{
              marginTop: "15%",
              borderRadius: "28px",
            }}
          >
            <Typography style={{ textAlign: "center", fontSize: "50px" }}>
              Create An Account
            </Typography>
            <Typography style={{ textAlign: "center", fontSize: "20px" }}>
              Create an account to enjoy all the services
              <br /> without any ads for free!
            </Typography>
            <Input
              type="email"
              placeholder="Email Addresss"
              style={{
                padding: "24px 28px",
                marginTop: "50px",
                fontSize: "20px",
              }}
            />
            <Input.Password
              placeholder="password"
              type="text"
              style={{
                padding: "24px 28px",
                marginTop: "40px",
                fontSize: "20px",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
              }}
            >
              <Button
                style={{
                  padding: "20px 80px 50px 80px",
                  backgroundColor: "springgreen",
                  color: "white",
                  fontSize: "20px",
                  borderRadius: "30px",
                }}
              >
                Create Account
              </Button>
            </div>

            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <Typography style={{ fontSize: "18px" }}>
                Already Have An Account?
                <Button
                  type="link"
                  style={{ color: "black", fontSize: "18px" }}
                  onClick={onclick}
                >
                  Sign In
                </Button>
              </Typography>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Signup;
