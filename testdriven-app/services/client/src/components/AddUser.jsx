import React from "react";
const AddUser = (props) => {
  return (
    <form onSubmit={(event) => props.addUser(event)}>
      <div className="form-group">
        <input
          name="username"
          className="form-control input-lg"
          placeholder="Enter a username"
          type="text"
          required
          value={props.username}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <input
          name="email"
          className="form-control input-lg"
          placeholder="Enter an email address"
          type="email"
          required
          value={props.email}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="submit"
          className="btn btn-primary btn-lg btn-block"
          value="Submit"
        />
      </div>
    </form>
  );
};

export default AddUser;
