import React, { Component } from "react";
import AsyncSelect from "react-select/async";
import Select from "react-select";
import { Controller } from "react-hook-form";

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    borderBottom: "1px dotted pink",
    color: state.selectProps.menuColor,
    padding: 20,
  }),
};

class LocationSelect extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedOption: {},
      normalSelectOption: null,
    };
  }

  fetchData = (inputValue, callback) => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/1" + inputValue, {
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
                tempArray.push({
                  label: `${element.title}`,
                  value: element.id,
                });
              });
            } else {
              tempArray.push({
                label: `${data.title}`,
                value: data.id,
              });
            }
          }
          callback(tempArray);
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
      <div style={{ width: "100%", borderColor: "#ffffff" }}>
        <div>
          <Controller
            name={this.props.name}
            control={this.props.control}
            render={({ field }) => (
              <AsyncSelect
                value={this.state.normalSelectOption}
                style={customStyles}
                loadOptions={this.fetchData}
                placeholder="Select"
                className={this.props.className}
                // onChange={(e) => {
                //   this.onSearchChange(e);
                // }}
                onChange={this.handleChange}
                defaultOptions={true}
                {...field}
              />
            )}
          />
        </div>
      </div>
    );
  }
}
export default LocationSelect;
