import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const [categorias, setCategorias] = useState([]);

    const valoresIniciais = {
      nome: '',
      descricao: '',
      cor: ''
    }
    
    const [values, setvalues] = useState(valoresIniciais);

    function setValue(chave, valor) {
      setvalues({
        ...values,
        [chave]: valor
      })
    }

    function handleChange(info){
      //const { getAttribute, value } = info.target;
      setValue(
        info.target.getAttribute('name'),
        info.target.value
        );
    }

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>
        
         <form onSubmit={function handleSubmit(e) {
           e.preventDefault();
           setCategorias([
             ...categorias,
              values
           ]);

           setvalues(valoresIniciais);
         }}>

          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="text"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />  

          {/* <div>
            <label>
             Descrição:
             <textarea type="text" name="descricao" value={values.descricao} 
             onChange={handleChange}/>
           </label>
          </div> */}

          <FormField 
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

          {/* <div>
           <label>
            Cor:
             <input type="color" name="cor" value={values.cor} 
             onChange={handleChange}/>
           </label>
          </div>            */}

           <button>
             Cadastrar
           </button>
         </form>

         <ul>
           {categorias.map((categoria, indice) => {
             return (
               <li key={`${categoria}${indice}`}>
                 {categoria.nome}
               </li>
             )
           })}
         </ul>

        <Link to='/'>
            Ir para home
        </Link>
      </PageDefault>
    )
  }

export default CadastroCategoria;