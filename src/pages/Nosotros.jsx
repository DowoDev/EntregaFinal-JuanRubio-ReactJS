import React from 'react'

const Nosotros = () => {
  return (
    <div className='bodyNosotros'>
      <div className="main__titulo--nos">
        <h3>Este es nuestro <strong className="yellow">Equipo.</strong></h3>
      </div>
      <div className="main__texto">
        <p>
        <strong className="marca2">Q I N Q E L A | CoffeeShop</strong> tiene un equipo de expertos, con una pasión compartida por crear el
          café perfecto, habiendo perfeccionado nuestro arte para ofrecerte el mejor producto posible. <br /><br />
          Nuestra inquietud por la excelencia y la atención a los detalles son valores fundamentales que impulsan
          nuestro trabajo diario. Cada producto que elaboramos es una muestra de nuestro compromiso con la calidad, el
          sabor y la satisfacción del cliente. <br /><br />
          Pero lo que realmente nos hace únicos es nuestra dedicación para crear una experiencia acogedora e inolvidable
          para cada uno de nuestros clientes. Creemos que el ambiente y el servicio son tan importantes como el producto
          que servimos.
          <br /><br />
          En <strong className="marca2">Q I N Q E L A | CoffeeShop</strong>, también creemos en la importancia de la innovación y la
          creatividad. Por eso, siempre estamos buscando formas nuevas y emocionantes de mejorar nuestra oferta de café
          y sorprender a nuestros clientes. Desde nuevas mezclas de café hasta métodos de preparación innovadores,
          estamos comprometidos a ofrecer una experiencia de café única y emocionante. Ven a visitarnos y déjanos
          impresionarte con nuestra pasión y creatividad en cada taza de café que preparamos.
        </p>
      </div>
      <section className="team">
        <div className="card-box">
          <div className="card card1">
            <img src="../src/assets/img/team3.jpg" className="main__img__large" alt=""/>
          </div>
          <div className="card card2">
            <img src="../src/assets/img/team2.png" className="main__img__large" alt=""/>
          </div>
          <div className="card card3">
            <img src="../src/assets/img/team1.jpg" className="main__img__large" alt=""/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Nosotros
