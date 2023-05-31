import React, { Component } from "react";
import AsyncSelect from "react-select/async";
import Select from "react-select";
import { Controller } from "react-hook-form";

const options = [
  { value: true, label: "Full Time" },
  { value: false, label: "Part Time" },
];
const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    borderBottom: "1px dotted pink",
    color: state.selectProps.menuColor,
    padding: 20,
  }),
};

class ReactSelectExample extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedOption: {},
      normalSelectOption: null,
    };
  }

  fetchData = (inputValue, callback) => {
    setTimeout(() => {
      fetch("" + inputValue, {
        method: "GET",
      })
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          const tempArray = [];
          if (data) {
            if (data.length) {
              data.forEach((element) => {
                options.push({
                  label: `${element.body}`,
                  value: element.id,
                });
              });
            } else {
              options.push({
                label: `${data.body}`,
                value: data.id,
              });
            }
          }
          callback(options);
        })
        .catch((error) => {
          console.log(error, "catch the hoop");
        });
    }, 1000);
  };

  onSearchChange = (selectedOption) => {
    if (selectedOption) {
      this.setState({
        selectedOption,
      });
    }
  };
  handleChange = (normalSelectOption) => {
    this.setState({ normalSelectOption });
  };

  render() {
    return (
      <div style={{ width: "100%", borderColor: "#0dab42" }}>
        <div>
          <Controller
            name={this.props.name}
            required={this.props.required}
            control={this.props.control}
            render={({ field }) => (
              <Select
                required
                value={this.state.normalSelectOption}
                onChange={this.handleChange}
                color="primary"
                options={options}
                className={this.props.className}
                {...field}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default ReactSelectExample;
