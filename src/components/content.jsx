import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '', 
      password: '',
      role: '',
      remenberMe: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(inputKey, inputValue) {
    this.setState({
      ...this.state,
      [inputKey]: inputValue
    });
  }

  handleSubmit(event) {
    console.log(this.state)
    event.preventDefault();
  }

  render() {
    return (
      <form noValidate
            autoComplete="off"
            onSubmit={this.handleSubmit}>
              
        <TextField id="email"
                   label="Email"
                   variant="outlined"
                   type="email"
                   value={this.state.email}
                   onChange={(e) => this.handleChange('email', e.target.value)}
                   className="mb-16"/>

        <TextField id="password"
                   label="Password"
                   variant="outlined"
                   type="password"
                   value={this.state.password}
                   onChange={(e) => this.handleChange('password', e.target.value)}
                   className="mb-16"/>

        <FormControl variant="outlined" className="mb-16">
          <InputLabel id="role">Role</InputLabel>

          <Select
            labelId="role"
            id="role"
            value={this.state.role}
            onChange={(e) => this.handleChange('role', e.target.value)}>

            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="ADMIN">Admin</MenuItem>
            <MenuItem value="VISITOR">Monitor</MenuItem>
            <MenuItem value="SALES">Sales</MenuItem>
          </Select>
        </FormControl>

        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.remenberMe}
              onChange={(e) => this.handleChange('remenberMe', e.target.checked)}
              value={true}
              color="primary"
            />
          }
          label="Remeber me"
          className="mb-16"/>

        <Button variant="contained"
                color="primary"
                type="submit">
          Register
        </Button>

      </form>
    );
  }
}

export default Content;