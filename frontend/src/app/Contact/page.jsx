import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Contact() {
  return (
    <div>
      <div className="ml-[50px]">
        <h1 className="font-bold text-3xl ml-[520px] mt-[100px]">Best Hospitals</h1>
        <ul className="flex gap-28 mt-[10px] ml-[50px]">
         <Link href="https://www.cloudninecare.com/">
         <li><div>
          <h1 className="font-bold text-xl mt-[80px] text-orange-400 ml-[100px]">CloudNine</h1>
      <div><img src="https://images1-fabric.practo.com/cloudnine-hospital-bangalore-1474260633-57df6e992be16.jpg" className="w-[300px] h-[300px] mt-6 rounded-xl" alt="" srcset="" />
      <p className="mt-6 ml-[20px]"> Emergency number: 9972999729</p>
      </div>
          </div> </li></Link>
          <Link href="https://www.apollocradle.com/bengaluru/brookefield/our-hospitals/maternity-hospital-in-brookefield"><li><div>
          <h1 className="font-bold text-xl mt-[80px] text-orange-400 ml-[100px] ">Apollo</h1>
      <div><img src="data:image/jpeg;base64,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" className="w-[300px] h-[300px] mt-6 rounded-xl" alt="" srcset="" />
      <p className="mt-6 ml-[20px]"> Emergency number:08044244424</p></div>
          </div> </li></Link>
          <Link href="https://www.fortishealthcare.com/"><li><div>
          <h1 className="font-bold text-xl mt-[80px] text-orange-400 ml-[100px]">Fortis</h1>

      <div><img src="data:image/jpeg;base64,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" className="w-[300px] h-[300px] mt-6 rounded-xl" alt="" srcset="" /></div>
          </div> 
          <p className="mt-6 ml-[20px]"> Emergency number: 9205 010 100</p></li></Link>

        </ul>
      </div>
    </div>
  )
}

export default Contact