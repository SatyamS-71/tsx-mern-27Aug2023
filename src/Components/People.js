import { useEffect, useState, useCallback } from "react";
import { Col, Row, Pagination, Input, Divider } from "antd";
import UserCard from "../Components/Cards/UserCard";
import Loading from "../Components/Loading/Loading";
import api from "../Services/api";
import { debounce } from "lodash";

const People = () => {
  const [page, setPage] = useState(1);
  const [apiEndpoint, setApiEndpoint] = useState(`${api.People}/?page=${page}`);
  const [characters, setCharacters] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const handlePageChange = (page, pageSize) => {
    setPage(page);
    setApiEndpoint(`${api.People}/?page=${page}`);
  };
  const getFilteredData = useCallback(async () => {
    try {
      const response = await fetch(`${api.People}/?search=${inputSearch}`);
      const returnedData = await response.json();
      setCharacters(returnedData.results);
    } catch(error) {
      console.log('Error while fetching data in Seach bar' , error);
    } finally {
      setLoading(false);
    }
  }, [inputSearch]);

  useEffect(() => {
    // Fetch data from API
    setLoading(true);
    fetch(apiEndpoint)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //set the data
        setCharacters(data["results"]);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching data:", error);
      });
  }, [page]);

  useEffect(() => {
    setLoading(true);
    getFilteredData();
  }, [getFilteredData]);

  function handleInputChange(event) {
    setInputSearch(event.target.value);
  }

  const debouncedOnChange = debounce(handleInputChange, 500);

  if (loading !== true) {
    return (
      <div style={{ margin: "2.5rem", backgroundColor: "" }} className="">
        <Row>
          <Col>
            {" "}
            <div
              style={{ fontSize: "30px", marginTop: "-10px", color: "white" }}
            >
              {" "}
              <h6>" MAY THE FORCE BE WITH YOU " </h6>{" "}
              <span
                className="tracking-in-expand"
                style={{
                  color: "white",
                  textDecoration: "underline",
                  textDecorationColor: "#ffe81f",
                }}
              >
                <h1> STARWARS</h1>
              </span>{" "}
            </div>
          </Col>
          <Divider type="horizontal"></Divider>
          <Col span={12}>
            <Input
              type="text"
              placeholder="Type the name of the character to search"
              onChange={(event) => debouncedOnChange(event)}
              style={{ height: "3rem", width: "20rem" }}
              tooltip="Type the name of the character to search"
            />
          </Col>
        </Row>
        <Divider type="horizontal" />
        <Row>
          <Col span={12}>
            {" "}
            <Pagination
              defaultCurrent={page}
              showSizeChanger={false}
              total={80}
              onChange={handlePageChange}
              responsive={true}
              style={{
                marginLeft: "-12px",
                marginBottom: "5rem",
              }}
            />
          </Col>
          <Col span={6}></Col>
        </Row>

        {/* </div> */}
        <Row gutter={[6, 100]}>
          {characters.map((char) => (
            <Col>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className=""
              >
                <UserCard charData={char} />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  } else {
    return (
      <div>
        <Loading />
      </div>
    );
  }
};
export default People;
