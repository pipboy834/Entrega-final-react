import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {Inicio} from "../componentes/Inicio/index"
import { ProductosLista } from './Productos'

export const Paginas = () => {
  return (
    <section>
      <Switch>
        <Route path="/" exact component={Inicio}></Route>
        <Route path="/productos" exact component={ProductosLista}></Route>
      </Switch>
    </section>
  )
}
