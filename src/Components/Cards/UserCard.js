import {
  Modal,
  Button,
  Card,
  ConfigProvider,
  Row,
  Col,
  Divider,
  Collapse,
} from "antd";
import "../../styles.css";
const { Meta } = Card;


import HomeworldCard from '../Cards/HomeworldCard'
import moment from "moment";
import { useEffect, useState } from "react";

const Cardcolors = [
  "#ff00ff",
  "#00ffff",
  "#00ff00",
  "#ffff00",
  "#ff69b4",
  "#ff0000",
  "#ffff33",
  "#00ff33",
  "#0033ff",
  "#ff6600",
  "#ff33cc",
  "#9933ff",
  "#00cccc",
  "#ccff00",
  "#ff3366",
  "#cc66ff",
  "#00ccff",
  "#ffcc00",
  "#66ccff",
  "#ff3333",
  "#00cc33",
  "#3300cc",
  "#cc00cc",
  "#ff3399",
  "#66ffcc",
  "#ffff66",
  "#ff9966",
  "#cc99ff",
  "#ff6633",
  "#33ccff",
  "#ccff33",
  "#ff00cc",
  "#3366ff",
  "#ff6666",
  "#99ff33",
  "#cc33ff",
  "#3399ff",
];
const UserCard = ({ charData }) => {
  const splitedUrl = charData.url.split("/");
  const characterId = splitedUrl[splitedUrl.length - 2];

  const [Homeworldstatus, setHomeworldStatus] = useState(true);
  const [fetchHomeworld, setFetchHomeworld] = useState(false);

  const colorofthecard =
    charData.species.length != 0
      ? `${
          Cardcolors[charData.species[0].charAt(charData.species[0].length - 2)]
        }`
      : ``;

  const DrawerClick = (e) => {
    setFetchHomeworld(true);
    console.log(e);
  };

  const info = () => {
    Modal.info({
      className: "my-custom-modal",
      title: <h1 className="tracking-in-expand">{charData.name}</h1>,
      content: (
        <div className="" style={{ width: "", height: "75vh" }}>
          <Divider type="horizontal" />

          {/* {Drawer} */}
          <Row>
            <Col span={18}>
              <h2> Height </h2>
            </Col>{" "}
            <Divider type="vertical" />
            <Col>
              <h2>{charData.height / 100} meters</h2>
            </Col>
          </Row>
          <Divider type="horizontal" />
          <Row>
            <Col span={18}>
              {" "}
              <h2>Mass</h2>
            </Col>{" "}
            <Divider type="vertical" />
            <Col>
              {" "}
              <h2> {charData.mass} kg</h2>
            </Col>
          </Row>
          <Divider type="horizontal" />
          <Row>
            <Col span={18}>
              <h2>Date</h2>
            </Col>{" "}
            <Divider type="vertical" />
            <Col>
              {" "}
              <h2> {moment(charData.created).format("DD-MM-YYYY")}</h2>
            </Col>
          </Row>
          <Divider type="horizontal" />
          <Row>
            <Col span={18}>
              <h2> Films</h2>{" "}
            </Col>{" "}
            <Divider type="vertical" />
            <Col>
              <h2> {charData.films.length}</h2>{" "}
            </Col>
          </Row>
          <Divider type="horizontal" />
          <Row>
            <Col span={18}>
              {" "}
              <h2>Birth Year</h2>
            </Col>{" "}
            <Divider type="vertical" />
            <Col>
              <h2> {charData.birth_year} </h2>
            </Col>
          </Row>
        <HomeworldCard charData = {charData}/>
        </div>
      ),
      onOk() {},
      width: "50rem",
      okButtonProps: { className: "my-custom-ok-button" },
    });
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ffe81f",
          colorInfo: "#ffe81f",
          fontSize: 14,
          colorBgBase: "#5d5b5b",
          colorTextBase: "#ffffff",
        },
      }}
    >
      <div onClick={info}>
        {" "}
        <div className="OuterContainer">
          <div className="container">
            <div
              className="card "
              style={{ backgroundColor: `${colorofthecard}` }}
            >
              <div className="image">
                <img
                  href="#"
                  src={`https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`}
                />
              </div>
              <div className="content ">
                <h1
                  className="tracking-in-expand"
                  style={{ backgroundColor: `${colorofthecard}` }}
                >
                  {charData.name}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default UserCard;
