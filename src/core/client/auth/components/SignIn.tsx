import * as React from "react";
import { StatelessComponent } from "react";
import * as styles from "./SignIn.css";

import {
  Button,
  Flex,
  FormField,
  InputLabel,
  TextField,
  Typography,
} from "talk-ui/components";

const SignIn: StatelessComponent = props => {
  return (
    <Flex itemGutter direction="column" className={styles.root}>
      <Typography variant="heading1" align="center">
        Sign in to join the conversation
      </Typography>
      <FormField>
        <InputLabel>Email Address</InputLabel>
        <TextField />
      </FormField>
      <FormField>
        <InputLabel>Password</InputLabel>
        <TextField />
        <span className={styles.forgotPassword}>
          <Button variant="underlined" color="primary">
            Forgot your password?
          </Button>
        </span>
      </FormField>
      <Button variant="filled" color="primary" size="large" fullWidth>
        Sign in and join the conversation
      </Button>
      <Flex itemGutter="half" alignItems="center">
        <Typography>Sign up and join the conversation</Typography>
        <Button variant="underlined" size="small" color="primary">
          Sign Up
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignIn;
