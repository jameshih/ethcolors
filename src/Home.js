import React, { useState, useEffect, Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Icon,
  Button,
  Container,
  Grid,
  Breadcrumb,
  Header
} from "semantic-ui-react";

const Home = () => {
  const [colors, setColors] = useState([]);
  const divEl = useRef(null);
  function genColors(address) {
    let res = address.substr(1);
    res = res.replace("x", "f");
    let arr = [];
    for (let i = 6; i < res.length; i += 6) {
      arr.push(`#${res.substr(i - 6, 6).toLowerCase()}`);
    }
    return arr;
  }

  useEffect(() => {
    const address = divEl.current.innerText;
    setColors(genColors(address));
  }, [colors]);
  console.log(colors);
  return (
    <Fragment>
      <Menu secondary>
        <Menu.Item position="left">
          <Breadcrumb>
            <Breadcrumb.Section>
              <Header
                as="a"
                to="/"
                content="Colors of ETH"
                style={{ color: "black" }}
              />
            </Breadcrumb.Section>
          </Breadcrumb>
        </Menu.Item>
        <Menu.Item>
          <Breadcrumb>
            <Breadcrumb.Section>
              <Icon
                name="square"
                size="large"
                style={{ color: `${colors[0]}` }}
              />
              {colors[0]}
            </Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section>
              <Icon
                name="square"
                size="large"
                style={{ color: `${colors[1]}` }}
              />
              {colors[1]}
            </Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section>
              <Icon
                name="square"
                size="large"
                style={{ color: `${colors[2]}` }}
              />
              {colors[2]}
            </Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section>
              <Icon
                name="square"
                size="large"
                style={{ color: `${colors[3]}` }}
              />
              {colors[3]}
            </Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section>
              <Icon
                name="square"
                size="large"
                style={{ color: `${colors[4]}` }}
              />
              {colors[4]}
            </Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section>
              <Icon
                name="square"
                size="large"
                style={{ color: `${colors[5]}` }}
              />
              {colors[5]}
            </Breadcrumb.Section>
          </Breadcrumb>
        </Menu.Item>
        <Menu.Item position="right">
          <Breadcrumb>
            <Breadcrumb.Section>
              <Icon name="circle" size="small" color="green" />
            </Breadcrumb.Section>
            <Breadcrumb.Section>
              <Header
                as="h3"
                data-dh-feature="network"
                data-dh-property-enable
              />
            </Breadcrumb.Section>
          </Breadcrumb>
        </Menu.Item>
      </Menu>
      <div
        as={Container}
        className="App"
        ref={divEl}
        style={{
          height: "1200px",
          background: `-moz-linear-gradient(left, ${colors[0]} 0%, ${colors[1]} 17%, ${colors[2]} 38%, ${colors[3]} 60%, ${colors[4]} 81%, ${colors[5]} 100% )`,
          background: `-webkit-gradient(left top, right top, color-stop(0%, ${colors[0]}), color-stop(17%, ${colors[1]}), color-stop(38%, ${colors[2]}), color-stop(60%, ${colors[3]}), color-stop(81%, ${colors[4]}), color-stop(100%, ${colors[5]}))`,
          background: `-webkit-linear-gradient(left, ${colors[0]} 0%, ${colors[1]} 17%, ${colors[2]} 38%, ${colors[3]} 60%, ${colors[4]} 81%, ${colors[5]} 100%)`,
          background: `-o-linear-gradient(left, ${colors[0]} 0%, ${colors[1]} 17%, ${colors[2]} 38%, ${colors[3]} 60%, ${colors[4]} 81%, ${colors[5]} 100%)`,
          background: `-ms-linear-gradient(left, ${colors[0]} 0%, ${colors[1]} 17%, ${colors[2]} 38%, ${colors[3]} 60%, ${colors[4]} 81%, ${colors[5]} 100%)`,
          background: `linear-gradient(to right, ${colors[0]} 0%, ${colors[1]} 17%, ${colors[2]} 38%, ${colors[3]} 60%, ${colors[4]} 81%, ${colors[5]} 100%)`,
          filter: `progid:DXImageTransform.Microsoft.gradient( startColorstr=${colors[0]}, endColorstr= ${colors[5]}, GradientType=1 )`
        }}
      >
        <Header
          textAlign="center"
          style={{
            fontSize: "25px",
            fontWeight: "lighter",
            position: "absolute",
            width: "50%",
            height: "60px",
            lineHeight: "60px",
            background: "rgba(0,0,0,0.3)",
            color: "white",
            marginTop: "40%",
            marginLeft: "25%",
            marginRight: "10%",
            borderRadius: "50px"
          }}
          data-dh-feature="user"
          data-dh-property-address="true"
        />
      </div>
    </Fragment>
  );
};

export default Home;
