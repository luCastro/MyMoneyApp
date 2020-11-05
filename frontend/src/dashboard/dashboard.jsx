import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getSummary } from "../dashboard/dashboardActions";
import Row from "../common/layout/row";
import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import ValueBox from "../common/widget/valueBox";

class Dashboard extends Component {
  componentWillMount(){
    this.props.getSummary()
  }
  render() {
    const { credit, debit } = this.props.summary;
    return (
      <div>
        <ContentHeader title="Dashboard" subtitle="Version 1.0" />
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
const mapStateToProps = (state) => ({ summary: state.dashboard.summary });
const mapDispatchToProps = (dispatch) => bindActionCreators({ getSummary }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
