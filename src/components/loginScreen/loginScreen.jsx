import React from 'react';

import LoginFormContainer from 'components/loginFormContainer';
import LoginForm from 'components/loginForm';
import { Grid, Row, Col } from 'components/grid';

const LoginScreen = () => (
  <Grid>
    <Row>
      <Col
        sm={8}
        smOffset={2}
        md={6}
        mdOffset={3}
      >
        <LoginFormContainer title="Hello again">
          <LoginForm />
        </LoginFormContainer>
      </Col>
    </Row>
  </Grid>
);

export default LoginScreen;
