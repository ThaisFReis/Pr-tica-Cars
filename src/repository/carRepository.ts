import { prisma } from '../config/prisma'

const getCars = async () => {
  return await prisma.car.findMany()
}

const getCar = async (id: number) => {
  return await prisma.car.findUnique({ where: { id } })
}

const getCarWithLicensePlate = async (licensePlate: string) => {
  return await prisma.car.findUnique({ where: { licensePlate } })
}

const createCar = async (model: string, licensePlate: string, year: number, color: string) => {
  return await prisma.car.create({ data: { model, licensePlate, year, color } })
}

const deleteCar = async (id: number) => {
  return await prisma.car.delete({ where: { id } })
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;