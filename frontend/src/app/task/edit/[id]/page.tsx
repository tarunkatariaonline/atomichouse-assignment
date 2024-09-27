
"use client"
import React from 'react'
import Image from 'next/image'
import Logo from '@/Assets/clickup-symbol-logo-BB24230BBB-seeklogo.com.png'


import { useGetSingleTask } from '@/hooks/getTask'

import { useUpdateTask } from '@/hooks/taskUpdate'
import { useState, useCallback, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'


const Page = ({ params }: { params: { id: string } }) => {
    const { id } = params
    const router = useRouter()
    const [status, setStatus] = useState<string>("TODO")
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string | undefined>("")
    const { data, isLoading, isError } = useGetSingleTask(id)
    const { mutate } = useUpdateTask()
    useEffect(() => {
        if (data) {
            setStatus(data.status)
            setTitle(data.title)
            setDescription(data.description)
        }

    }, [data])
    const updateTaskHandler = useCallback(() => {

        // console.log("updateTask")

        if (title.length === 0) {
            return toast.error("Please Enter The Title !")
        }

        mutate({
            id,
            title,
            description,
            status
        })

        router.push('/')
    }, [mutate, id, title, description, status])


    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>You Gave Wrong Id !</div>
    if (data === null) {
        return <div>Wrong Id of Task !</div>
    }

    return (
        <div className=' w-full  min-h-[100vh] flex justify-center items-center bg-gray-200'>
            <div className=' w-[40%]  max-md:w-[90%] shadow-xl  bg-white  min-h-56 rounded-md'>

                <div className=' w-full flex justify-center m-2'>
                    <Image width={25} height={25} src={Logo} alt='logo' />
                </div>

                <form onSubmit={(e) => {
                    e.preventDefault()
                    updateTaskHandler()

                }} className=' w-full  px-3 h-full  ' >
                    <p >Task Title :</p>
                    <input value={title} onChange={(e) => {
                        setTitle(e.target.value)
                    }} type="text" className=' w-full h-10 border-gray-500 outline-blue-400  my-2 rounded-md  border-2
' placeholder=' Enter Task Title' />



                    <p >Task Description :</p>
                    <textarea value={description} onChange={(e) => {
                        setDescription(e.target.value)

                    }} className=' w-full h-20 border-2 border-gray-500 outline-blue-400  my-2 rounded-md
' placeholder=' Enter Task Description' />

                    <p >Task Status : {data?.status}</p>
                    <select className=' w-full h-10 border-2 border-gray-500 outline-blue-400  my-2 rounded-md
' value={status} onChange={(e) => {
                            setStatus(e.target.value)
                        }}>
                        <option value="TODO">TODO</option>
                        <option value="INPROGRESS">INPROGRESS</option>
                        <option value="DONE">DONE</option>

                    </select>
                    <button type='submit' className=' text-white bg-gradient-to-r from-pink-400 via-blue-500 to-yellow-300  my-4 w-full h-10 font-bold  hover:from-pink-500 hover:via-blue-600 hover:to-yellow-500 rounded-md'>
                        UPDATE TASK
                    </button>

                </form>

            </div>
        </div>
    )
}

export default Page