import { Router } from 'express'

import { ensuredAuthenticated } from '../../../middlewares'
import { createDevelyFactory } from '../CreateDevely/CreateDevelyFactory'
import { findAllDeveliesFactory } from '../FindAllDevelies/FindAllDeveliesFactory'
import { findByIdDevelyFactory } from '../FindByIdDevely/FindByIdDevelyFactory'
import { findByStatusDevelyFactory } from '../FindByStatusDevely/FindByStatusDevelyFactory'
import { findByOrderDevelyFactory } from '../FindByOrderDevely/FindByOrderDevelyFactory'
import { deleteDevelyFactory } from '../DeleteDevely/DeleteDevelyFactory'
import { updateDevelyFactory } from '../UpdateDevely/UpdateDevelyFactory'


export const develyRoutes = Router();

develyRoutes.route('/')
  .post(ensuredAuthenticated(), (request, response) => { return createDevelyFactory().handle(request, response) } )
  .get((request, response) => { return findAllDeveliesFactory().handle(request, response) } )
  
develyRoutes.route('/:id')
  .get((request, response) => { return findByIdDevelyFactory().handle(request, response) } )
  .put(ensuredAuthenticated(), (request, response) => { return updateDevelyFactory().handle(request, response) } )
  .delete(ensuredAuthenticated(), (request, response) => { return deleteDevelyFactory().handle(request, response) } )
  
develyRoutes.route('/ByOrder/:id_order')
  .get((request, response) => { return findByOrderDevelyFactory().handle(request, response) } )
  
develyRoutes.route('/ByStatus/:status')
  .get((request, response) => { return findByStatusDevelyFactory().handle(request, response) } )

  