import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSingleMonster } from './services/fetch-utils';

export default function MonsterDetail() {
  const [monster, setMonster] = useState({});
  const params = useParams();

  useEffect(() => {
    async function fetch() {
      const monsterData = await getSingleMonster(params.id);
      setMonster(monsterData);
    }
    fetch();
  }, [params.id]);

  return (
    <>         
      <Link to='/'>Home</Link>
      <div className='monster-detail'>
        <p>{monster.name}</p>
        <p>Size: {monster.size}</p>
        <p>{monster.RA}</p>
        <p>{monster.HP}</p>
        <p>Armor Class: {monster.AC}</p>
        <p>CR: {monster.CR}</p>
      </div>  
    </>
  );
}