import React from 'react'
const getAgify=async (name:string)=>{
  const res =await fetch(`https://api.agify.io/?name=${name}`)
  return res.json()
}
const getGenderize=async (name:string)=>{
  const res =await fetch(`https://api.genderize.io/?name=${name}`)
  return res.json()
}
const getNationalize=async (name:string)=>{
  const res =await fetch(`https://api.nationalize.io/?name=${name}`)
  return res.json()
}

interface Params{
  params:{name:string}
}
export default async function page({params}:Params) {
  const ageData=getAgify(params.name)
  const genderData=getGenderize(params.name)
  const nationalizeData=getNationalize('')
  const [age,gender,nationalize] =await Promise.all([ageData,genderData,nationalizeData])
  return (
    <div>
      name:{params?.name}
      age:{age?.age}
      gender:{gender?.gender}
      nation:{ nationalize?.country[0]?.country_id }
    </div>
  )
}

