import React from "react";
import ReactDOM from "react-dom";
import { Container, Header, List } from "semantic-ui-react";
import Content from "./content";

const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
    <Header as="h3" color='teal'>DYNAMIC QR-CODE GENERATION </Header>
    <List bulleted>
      <List.Item
        as="a"
        content="QR-Code Documentation"
        href="https://docs.google.com/document/d/1lOKX3MHSQ-ClMWGGYG0v3RxgzEq5lZfXdJ1oV52sYNE/edit"
        target="_blank"
      />
    </List>

    {children}
  </Container>
);

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <App>
    <Content />
  </App>,
  document.getElementById("root")
);





