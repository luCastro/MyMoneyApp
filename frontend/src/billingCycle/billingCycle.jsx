import React, { Component } from "react";
import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";
import TabHeader from "../common/tab/tabHeader";

class BillingCycles extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Billing Cycle" subtitle="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="List" icon="bars" target="tabList"></TabHeader>
              <TabHeader label="Add" icon="plus" target="tabCreate"></TabHeader>
              <TabHeader
                label="Edit"
                icon="pencil"
                target="tabUpdate"
              ></TabHeader>
              <TabHeader
                label="Remove"
                icon="trach-o"
                target="tabDelete"
              ></TabHeader>
            </TabsHeader>
            <TabsContent></TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

export default BillingCycles;
