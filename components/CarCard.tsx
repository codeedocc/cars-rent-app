'use client'

import { CarProps } from '@/types'
import { calculateCarRent } from '@/utils'
import Image from 'next/image'
import CustomButton from './CustomButton'
import { useState } from 'react'
import CarDetails from './CarDetails'

interface CarCardProps {
  car: CarProps
}

const CarCard = ({ car }: CarCardProps) => {
  const [isOpen, setisOpen] = useState(false)
  const { city_mpg, year, make, model, transmission, drive } = car

  const carRent = calculateCarRent(city_mpg, year)

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/в день</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={'/hero.png'}
          alt="car"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={'/steering-wheel.svg'}
              alt="steeringwheel"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {transmission === 'a' ? 'Автомат' : 'Механика'}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={'/tire.svg'} alt="tire" width={20} height={20} />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={'/gas.svg'}
              alt="steeringwheel"
              width={20}
              height={20}
            />
            <p className="text-[14px]">{city_mpg} л. на 100 км</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            text="Посмотреть"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setisOpen(true)}
          />
        </div>
      </div>

      <CarDetails />
    </div>
  )
}

export default CarCard
