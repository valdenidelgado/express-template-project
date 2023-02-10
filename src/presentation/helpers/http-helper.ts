import { HttpResponse } from '../protocols/http'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
})

export const successRequest = (): HttpResponse => ({
  statusCode: 400,
  body: 'Success',
})
