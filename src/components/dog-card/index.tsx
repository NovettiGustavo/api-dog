import { DogCardProps, DogDescription, DogResponseProps } from "@/types";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { Badge } from 'primereact/badge'

export default function DogCard({dog}: DogCardProps){
    const [visible, setVisible] = useState<boolean>(false);
    const [selectedDogDetail, setSelectedDogDetail] = useState <DogDescription | null>(null)

    const getDogById = async (id: string) => {
        const response = await fetch(`https://dogapi.dog/api/v2/breeds/${id}`)
        const data: DogResponseProps = await response.json()
        setSelectedDogDetail(data.data)
        console.log(data)
        setVisible(true)
     
    }

    function onHide(){
        if(visible){
            return setVisible(false)
        }
    }
    const formatHypoallergenic =(value:boolean) =>{
        return value ? <Badge value={"Sim"} severity={"success"}></Badge> : <Badge value={"Não"} severity={"danger"}>Não</Badge>
    }
return(
    <div>
        <Button label="Descrição" icon="pi pi-arrow" onClick={() => getDogById(dog.id)}/>
            <Dialog 
                header="Descrição completa"
                visible={visible}
                style={{width: '50vw'}}
                onHide={onHide}>
                    {selectedDogDetail &&(
                        <div>
                            <p className="mb-2">Raça: {selectedDogDetail.attributes.name}</p>
                            <p className="mb-1">Tempo médio de vida:</p>
                            <p className="mb-2">Máximo: {selectedDogDetail.attributes.life.max} anos. Mínimo: {selectedDogDetail.attributes.life.min}</p>
                            <p className="mb-1">Peso máximo por gênero(macho e fêmea):</p>
                            <p className="mb-2">Macho: {selectedDogDetail.attributes.male_weight.max}Kg. Fêmea: {selectedDogDetail.attributes.female_weight.max}Kg</p>
                            <p className="mb-1">Peso mínimo por gênero(macho e fêmea):</p>
                            <p className="mb-2">Macho: {selectedDogDetail.attributes.male_weight.min}Kg . Fêmea: {selectedDogDetail.attributes.female_weight.min}Kg</p>
                            <p>Descrição: {selectedDogDetail.attributes.description}</p>
                            <p>Hipoalergênico: {formatHypoallergenic(selectedDogDetail.attributes.hypoallergenic)}</p>
                        </div>
                       
                    )}

            </Dialog>
    </div>
)
}