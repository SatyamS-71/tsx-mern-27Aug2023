import { useEffect , useState } from "react";
import {Row , Col, Divider} from 'antd';
import Loading from "../Loading/Loading";

const HomeworldCard = ({ charData }) => {
  const [homeworld, setHomeworld] = useState(charData.homeworld);
  const [climate, setClimate] = useState();
  const [Homename, setHomeName] = useState();
  const [terrain, setTerrain] = useState();
  const [residents, setResidents] = useState();
  const [loading , setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(homeworld)
    .then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
        setClimate(data.climate);
        setHomeName(data.name);
        setTerrain(data.name);
        setResidents(data.residents.length);
        setLoading(false);
    })
  }, []);

  
if(loading === false){
   return (<div>
    <Divider type="horizontal"></Divider>
     <h3 style={{textDecoration:'underline' , textDecorationColor:'black'}}> Homeworld Data </h3>
      <Row>
        <Col span={6}>Name : </Col>
        <Col>{Homename}</Col>
      </Row>
    
      <Row>
        <Col span={6}>Climate : </Col> <Col>{climate}</Col>
      </Row>
    
      <Row>
        <Col span={6}>terrain: </Col> <Col>{terrain}</Col>
      </Row>
      
      <Row>
        <Col span={6}>residents : </Col> <Col>{residents}</Col>
      </Row>
      
    </div>
   )
 }
  else{
  return (<> <div style={{display:'flex' , flexDirection:'column' }}> <Loading />  <p> LOADING HOMEWORLD DATA </p> </div></> );
}
};
export default HomeworldCard;
