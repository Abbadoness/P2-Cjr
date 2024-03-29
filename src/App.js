import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import React, {useState} from 'react';



function App() {

  const [users, setUsers] = useState([
      {id:1,first_name:"Lauren",last_name:"Shaxby",email:"lshaxby0@php.net",created_at:"16/10/2021"},
      {id:2,first_name:"Ardenia",last_name:"Paddingdon",email:"apaddingdon1@nsw.gov.au",created_at:"27/07/2021"},{id:3,first_name:"Renaldo",last_name:"Alenichev",email:"ralenichev2@ftc.gov"
      ,created_at:"10/06/2021"},
      {id:4,first_name:"Nichole",last_name:"OHeneghan",email:"noheneghan3@flavors.me",created_at:"28/06/2021"},
      {id:5,first_name:"Haywood",last_name:"Daintry",email:"hdaintry4@nhs.uk",created_at:"18/03/2021"},
      {id:6,first_name:"Leslie",last_name:"Daile",email:"ldaile5@vimeo.com",created_at:"23/05/2021"},
      {id:7,first_name:"Byrann",last_name:"Slorance",email:"bslorance6@kickstarter.com",created_at:"15/05/2021"},
      {id:8,first_name:"My",last_name:"Swendell",email:"mswendell7@moonfruit.com",created_at:"15/12/2021"},
      {id:9,first_name:"Brier",last_name:"Esson",email:"besson8@usa.gov",created_at:"14/03/2021"},
      {id:10,first_name:"Seth",last_name:"Piddle",email:"spiddle9@nationalgeographic.com",created_at:"20/10/2021"},
      {id:11,first_name:"Fer",last_name:"Piddle",email:"ferspiddle9@nationalgeographic.com",created_at:"20/10/2022"}
      ]
  );

  const handleUserDelete = (usersId) => {
    const newUsers = users.filter(user => user.id !== usersId)

    setUsers(newUsers);
  }


  return (
    <>
      <header id="header">
    <div class="menu">
      <h3>dinnerdash</h3>
      <nav>
        <a href="#backoffice" >backoffice</a> 
        <a href="#perfil" >perfil</a>
        <a href="#sair" >sair</a>
      </nav>
    </div>
    <div>
      <h2>Backoffice</h2>
      <p>Gerencie pedidos,refeições e mais.</p>
    </div>
  </header>
  <nav class="backoffice">
    <a href="#" >Pedidos</a> 
    <a href="#" >Usuários</a>
    <a href="#" >Refeições</a>
    <a href="#" >Categorias de Refeição</a>
  </nav>
  <main id="main">
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Cadastrado em</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
    <span>
          <Users users={users}  handleUserDelete={handleUserDelete}/>
    </span>
    <div class="paginacao">
    </div>
  </main>
  <footer>
    <span>dinnerdash | todos os direitos reservados</span>
    <span>desenvolvido por Trainee Legal</span>
  </footer>
    </>
  );
}

export default App;
