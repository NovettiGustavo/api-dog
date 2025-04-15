"use client"

import { Button } from "primereact/button";
import { Dog, DogProps } from "@/types";
import DogCard from "../dog-card";

export default function DogList({dogs}: DogProps){
    return(
        <div className="flex justify-center text-black">
          <div className="flex flex-col gap-4 p-8  ">
            {dogs.map(dogs => (
              
              <div key={dogs.id} className="max-w-6xl border-4 p-3 border-gray-500">
                
                <p className="mb-2">Nome:{dogs.attributes.name}</p>
                <p className="mb-2">Descrição:{dogs.attributes.description}</p>
                <p className="mb-2">Expectativa máxima de vida: {dogs.attributes.life.max} anos</p>
                
                <div className="mt-8">
                <p className="mb-1">Peso Máximo do macho: {dogs.attributes.male_weight.max}Kg </p>
                <p className="mb-1">Peso Máximo da Fêmea: {dogs.attributes.female_weight.max}Kg </p>
                </div>
             
                <div className="card flex justify-content-center">
                <DogCard dog={dogs}/>
            </div>
              </div>
              
            ))}
          </div>
        </div>
      )
    }
