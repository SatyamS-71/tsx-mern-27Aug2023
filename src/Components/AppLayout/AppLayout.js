import People from "../People";
import { Layout, Menu } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const { Header, Content, Footer } = Layout;
import logo from '../../Utilities/animations/images/logo.svg';

const items = [
  {
    key: "People",
    label: (
      <a href="/" >
        {" "}
        People{" "}
      </a>
    )
  },
  {
    key: "Planet",
    label: (
      <a href="/planet">
        {" "}
        Planet{" "}
      </a>
    )
  },
  {
    key: "Species",
    label: (
      <a href="/species" >
        {" "}
        Species
      </a>
    )
  },
  {
    key: "starships",
    label: (
      <a href="/starships" >
        {" "}
        Starships{" "}
      </a>
    )
  }
];

const AppLayout = () => {
  
 
  return (
    <Layout className="Layout" >
      <Header style={{display:'flex' , flexDirection:'row' , backgroundColor:'#5d5b5b',alignItems:'center' , alignContent:'center' }} >
     
        <Menu 
          mode="horizontal"
          items={items}
          selectable={true}
          style={{width:'75vw'}}
        />
        
        <a href ='/' ><div style={{marginTop:'1.5rem',}} > <img src={logo} height={'120rem'} /></div></a>
        
     
      </Header>

      <Content>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={People}></Route>
            <Route path="/species" element={<div> Species </div>}></Route>
            <Route path="/planet" element={<div> Planets </div>}></Route>
            <Route path = "/Starships" element={<div> Starships</div>}> </Route>
          </Routes>
        </BrowserRouter>
        </Content>

      <Footer
        style={{
          textAlign: "center"
        }}
      >
        STARWARS
      </Footer>
    </Layout>
  );
};
export default AppLayout;
