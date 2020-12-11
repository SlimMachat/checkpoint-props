import './App.css';
import React from 'react'
import FullName from './Profile/ProfileCompo/FullName' 
import Bio from './Profile/ProfileCompo/Bio'
import Profession from './Profile/ProfileCompo/Profession'
import Alert from './Profile/ProfileCompo/Alert'
import Image from './Profile/ProfileCompo/Image'
function App() {
  return (
    <div className="App">
    <FullName name = "Lionel Messi"/>
    <Image/>
    <Bio Bioo = "Lionel Messi, parfois surnommé Leo Messi, né le 24 juin 1987 à Rosario en Argentine"/>
   <Profession prof = " Messi est vu comme l'un des meilleurs joueurs de tous les temps. Joueur créatif et complet, il est un buteur et passeur prolifique détenteur de nombreux records : septuple vainqueur du Pichichi, il est le meilleur buteur de l'histoire du championnat d'Espagne, du FC Barcelone, de la sélection argentine, et le deuxième meilleur buteur de l'histoire de la Ligue des champions. "/>
   <Alert alert ="je suis messi"/>
    </div>
  );
}

export default App;
