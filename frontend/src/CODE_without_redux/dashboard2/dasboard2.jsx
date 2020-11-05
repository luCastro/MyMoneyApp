import React, { Component } from "react";
import axios from "axios";

import Row from "../../common/layout/row";
import ContentHeader from "../../common/template/contentHeader";
import Content from "../../common/template/content";
import ValueBox from "../../common/widget/valueBox";

const BASE_URL = "http://localhost:8088/api";

export default class Dashboard2 extends Component {
  constructor(props) {
    super(props);
    this.state = { credit: 0, debit: 0 };
  }

  componentWillMount() {
    axios
      .get(`${BASE_URL}/billingCycles/summary`)
      .then((resp) => this.setState(resp.data));
  }

  render() {
    const { credit, debit } = this.state;
    return (
      <div>
        <ContentHeader title="Dashboard" subtitle="Version 2.0" />
        <Content>
          <Row>
            <ValueBox
              cols="12 4"
              icon="bank"
              color="green"
              value={`$ ${credit}`}
              text="Credit"
            />
            <ValueBox
              cols="12 4"
              icon="credit-card"
              color="red"
              value={`$ ${debit}`}
              text="Debit"
            />
            <ValueBox
              cols="12 4"
              icon="money"
              color="blue"
              value={`$ ${credit - debit}`}
              text="Balance"
            />
          </Row>
        </Content>
      </div>
    );
  }
}
