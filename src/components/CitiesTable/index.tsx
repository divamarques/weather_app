import { useEffect, useState } from 'react';
import { NewWeatherModal } from '../NewWeatherModal';
import {Container} from './styles';


interface DashboardPorps{
  listedCities : any;
}

interface NewItemModaProps {
  name: string;
  main: {
    temp:number;
    temp_min: number;
    temp_max: number;
  }

}

export function CitiesTable({ listedCities }: DashboardPorps ){


  const [isItemModal, setIsItemModal] = useState<NewItemModaProps>();
  const [isNewWeatherModalOpen, setIsNewWeatherModalOpen] = useState<DashboardPorps[]>([]);

  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleCloseWeatherModal() {
    setIsOpenModal(false);
  }

  function openModal(obj:any){
    setIsItemModal(obj);
    setIsOpenModal(true);
  }

  useEffect(() => {
    
    setIsNewWeatherModalOpen(listedCities?.list)
    console.log(listedCities)
       
  },[ listedCities ])

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>City</th>
            <th>How does it feel</th>
            <th>Hat or Jacket?</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {isNewWeatherModalOpen?.length > 0 && isNewWeatherModalOpen.map((listed:any) => {
            return(
            <tr key={listed.id}>
              <td>{listed.sys.country}</td>
              <td>{listed.name}</td>
              <td>{listed.main.feels_like}°c</td>
              <td>{listed.weather[0].description}</td>
              <td><button type="button" onClick={() => openModal(listed)}>Let's see</button></td>
          </tr>
            );
          })}
        </tbody>
      </table>
      <NewWeatherModal
        item={isItemModal}
        isOpen={isOpenModal}
        onRequestClose={handleCloseWeatherModal}
      /> 
    </Container>
  );
}
