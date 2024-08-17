import SumOfTwoNumbers from './Components/SumOfTwoNumbers'
import { EmployeeCard } from './Components/EmployeeCard'
import { ProductComponent } from './Components/ProductComponent'
import { ProductCard } from './Components/ProductCard'
import { EmployeeExperience } from './Components/EmployeeExperience'
import { Counter } from './Components/Counter'

const product = {
  id : 1023 ,
  name : "Air Conditioner",
  price : 29600,
  specification : "1 Ton, 4 Star Rating",
  warranty : "5 year Compressor Carranty"
}

const phones = [
  {id : 1 , name : "Apple" , price : 1500000},
  {id : 2 , name : "Samsung" , price : 100000},
  {id : 3 , name : "Motorola" , price : 10000},
  {id : 4 , name : "Redmi" , price : 15000},
  {id : 5 , name : "Realme" , price : 30000},
]

const employee = [
  {id : "E1" , name : "Jayant" , experience : 1},
  {id : "E2" , name : "Sidharth" , experience : 9},
  {id : "E3" , name : "Chirag" , experience : 4},
  {id : "E4" , name : "Avish" , experience : 6},
]

function App() {
  

  return (
    <>
      {/* <SumOfTwoNumbers a={6} b={8} /> */}
      {/* <EmployeeCard name="Jayant Kushwah" designation="Software Engineer" experience="1 Year" /> */}
      {/* <ProductComponent props={product} /> */}
      {/* <ProductCard heading="Mobile Phone" phones={phones} /> */}
      {/* <EmployeeExperience arrayOfObj={employee} /> */}
      <Counter />
    </>
  )
}

export default App
