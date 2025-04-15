import { Button } from "primereact/button";
import React from 'react';
import { DogProps } from "@/types";
import { Dog } from "@/types";
import DogList from "@/components/dogs-routine";

interface Responses{
  data: Dog[];
}
export default async function Home() {
  const response = await fetch("https://dogapi.dog/api/v2/breeds");

  const data: Responses = await response.json();

  console.log(data)

 
  return(
   <DogList dogs={data.data} />
  )
}
