// import { ticketsDaoMongoose } from '../dao/tickets.dao.mongoose.js'
import { ticketDao } from "../dao/index.js";
import { DefaultRepository } from "./DefaultRepository.js";

export const ticketsRepository = new DefaultRepository(ticketDao)