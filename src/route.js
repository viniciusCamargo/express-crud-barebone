import { Router } from 'express'
import { collection } from './db'
const router = new Router()

router.route('/')
  .get((req, res) => {
    collection.find({})
      .then(data => {
        res.render('imoveis/index', { imoveis: data })
      })
      .catch(err => res.send(err))
  })

router.route('/imoveis/criar')
  .get((req, res) => res.render('imoveis/new'))
  .post((req, res) => {
    collection.insert(req.body)
      .then(data => {
        res.render('imoveis/single', { imovel: data, message: 'new' })
      })
      .catch(err => res.send(err))
  })

router.route('/imoveis/:id/editar')
  .post((req, res) => {
    collection.findOneAndUpdate(
      { _id: req.body.id },
      { $set: {
        bairro: req.body.bairro,
        area: req.body.area,
        preco: req.body.preco,
        dormitorios: req.body.dormitorios,
        banheiros: req.body.banheiros,
        vagasGaragem: req.body.vagasGaragem
      }}
    ).then(data => {
      res.render('imoveis/single', { imovel: data, message: 'edit' })      
    }).catch(err => res.send(err))
  })

router.route('/imoveis/:id/excluir')
  .post((req, res) => {
    collection.findOneAndDelete({ _id: req.body.id })
      .then(data => res.redirect('/'))
      .catch(err => res.send(err))
  })

const routeGetter = (route, view) => {
  return router.route(route)
    .get((req, res) => {
      collection.findOne({ _id: req.params.id })
        .then(data => res.render(view, { imovel: data }))
        .catch(err => res.send(err))
  })
}

routeGetter('/imoveis/:id', 'imoveis/single')
routeGetter('/imoveis/:id/editar', 'imoveis/edit')
routeGetter('/imoveis/:id/excluir', 'imoveis/delete')

export default router
