"use client"
import Navbar from "@/components/navbar";
import SalaryReport from "@/components/salaryreport";
import { useRouter } from "next/navigation";

const Salary = () => {
     const router = useRouter()
     return (
          <>
          <Navbar />
            <div className="flex justify-end items-center p-4">
                <button
                onClick={()=>router.push('/attendence')}
                    className="bg-blue-500 text-white px-4 py-2 mx-2 rounded"
                    type="button"
                >
                    + Add Attendance List
                </button>
                <button
                 onClick={()=>router.push('/attendencereport')}
                    className="bg-blue-500 text-white px-4 py-2 mx-2 rounded"
                    type="button"
                >
                    Attendance Report
                </button>
                <button
                 onClick={()=>router.push('/salary')}
                    className="bg-blue-500 text-white px-4 py-2 mx-2 rounded"
                    type="button"
                >
                    Salary Report
                </button>
            </div>
            <SalaryReport/>
            </>
     )
}

export default Salary;