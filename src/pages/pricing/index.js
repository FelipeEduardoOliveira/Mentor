import React, {useState} from 'react';
import CardPricing from '../../components/cardPricing';
import Switch from '@material-ui/core/switch'
import './style.css';

function Pricing() {

  const [checked, setchecked] = useState(false);

  const values=[
    {Plano: 'Basic', value1:'19.99', value2:'199.99', Storag:'500 GB Storage', Users:'2 Users Allowed', Send:'Send up to 3 GB'},
    {Plano: 'professional', value1:'24.99', value2:'249.99', Storag:'1 TB Storage', Users:'5 Users Allowed', Send:'Send up to 10 GB'},
    {Plano: 'Master', value1:'39.99', value2:'399.99', Storag:'2 TB Storage', Users:'10 Users Allowed', Send:'Send up to 20 GB'}
  ]

  const handleChange = (event) => {

    if(event.target.checked === true){
      setchecked(true);
    }else{
      setchecked(false);
    }
  };

  return (
    <div>
      <div>
        <h1>Our Pricing</h1>
        <div className='Interruptor'>
          <p>Monthly</p>
          <Switch
        checked={checked}
        onChange={handleChange}
        name="checked"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
          <p>Annualy</p>
        </div>

        <div className='ContainerPricing'>
          <CardPricing
          Plano={values[0].Plano} 
          Valor={checked ? values[1].value2 : values[1].value1}  
          Storage='500 GB Storage' 
          Users='2 Users Allowed' 
          Send='Send up to 3 GB'
          />
          <CardPricing 
          Plano={values[1].Plano}
          Valor={checked ? values[1].value2 : values[1].value1} 
          Storage='1 TB Storage' 
          Users='5 Users Allowed' 
          Send='Send up to 10 GB'
          />
          <CardPricing 
          Plano={values[2].Plano} 
          Valor={checked ? values[2].value2 : values[2].value1} 
          Storage='2 TB Storage' 
          Users='10 Users Allowed' 
          Send='Send up to 20 GB'
          />
        </div>

      </div>
      
    </div>
  );
}

export default Pricing;
