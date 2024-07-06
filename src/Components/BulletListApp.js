
import { useEffect, useState } from 'react';
import { NewBulletForm} from './Bullet-List/NewBulletForm'
import { BulletList } from './Bullet-List/BulletList'
import { DeleteAll } from './Bullet-List/DeleteAll';



function BulletListApp() {

  const [bullets, setBullets] = useState(()=> {
    const localValue = localStorage.getItem("BULLETS")
    if(localValue == null) return[]

    return JSON.parse(localValue)
  })

 useEffect(()=>{
  localStorage.setItem("BULLETS", JSON.stringify(bullets))
 })


  function AddBullet(title) {
    
    setBullets(currentBullets => {
      return [
        ...currentBullets,
        { id: crypto.randomUUID(), title }
        ,
      ]
    }
    )
  }

  
function DeleteBullet(id){
  setBullets(currentBullets => { 
    return currentBullets.filter(bullet => bullet.id !==id)
  })
}
 
function DeleteBullets(){
  setBullets([])
}

  return (
    <>
    <section className='wrapper'>
      <NewBulletForm onSubmit={AddBullet} />
      <h1 className='header'>Bullet List </h1>
      <BulletList bullets={bullets} DeleteBullet={DeleteBullet} />
      <DeleteAll DeleteAll={DeleteBullets} bullets={bullets} />
      
      </section>
      
    </>
  );
}

export default BulletListApp;
