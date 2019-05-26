import React from 'react';
import {Button , TextField} from '@material-ui/core'


function ForgotPassword(props) {
    return <div className="login-form">
    <div className="login-title">
          <i
            className="twa twa-sweat"
            style={{ fontSize: "inherit", marginRight: "10px" }}
          />
          Forgot password
        </div>
        <div className="field-wrapper">
            <TextField
              id="reset-password"
              label="reset email"
              name="resetEmail"
              value={props.resetEmail}
              onChange={e => {
                  props.setResetEmail(e.target.value);
              }}
              style={{ margin: "15px 10px", width: "calc(100% - 20px)" }}
              placeholder="John@smith.com"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              InputProps={{
                startAdornment: <i className="twa twa-email" />
              }}
            />
          </div>
          <div className="login-options" style={{ margin: "15px 10px", textAlign: "right" , display : 'flex' , alignItems : 'center' , justifyContent : 'space-between' }}>
          <div
            onClick={() => {
                props.backToLogin();              
            }}
          >			
            back to login
          </div>
          <Button
            variant="contained"
            className="login-button"
            disabled={!props.resetEmail}
          >
            Reset Password
            <i
              className={"twa twa-mailbox"}
              style={{ fontSize: "inherit" }}
            />
          </Button>
        </div>			
    </div>
}

export default ForgotPassword;