"use client";
import React from "react";

import { useUpdateTask } from "@/hooks/taskUpdate";
import { useState, useCallback } from "react";

import toast from "react-hot-toast";
import { MdCancel, MdEdit } from "react-icons/md";

const EditModal = ({
  taskId,
  taskTitle,
  taskStatus,
  taskDescription,
}: {
  taskId: string;
  taskTitle: string;
  taskStatus: string;
  taskDescription: string | undefined;
}) => {
  const [status, setStatus] = useState<string>(taskStatus);
  const [title, setTitle] = useState<string>(taskTitle);
  const [description, setDescription] = useState<string | undefined>(
    taskDescription
  );
  //   const { data, isLoading, isError } = useGetSingleTask(id);
  const [showEditModal, setShowEditModal] = useState(false);
  const { mutate } = useUpdateTask();

  const updateTaskHandler = useCallback(() => {
    // console.log("updateTask")

    if (title.length === 0) {
      return toast.error("Please Enter The Title !");
    }

    mutate({
      id: taskId,
      title,
      description,
      status,
    });

    setShowEditModal(false);
  }, [mutate, taskId, title, description, status]);

  //   if (isLoading) return <div>Loading...</div>;
  //   if (isError) return <div>You Gave Wrong Id !</div>;
  //   if (data === null) {
  //     return <div>Wrong Id of Task !</div>;
  //   }

  return (
    <>
      <button
        onClick={() => {
          setShowEditModal(!showEditModal);
        }}
        className=" p-1 bg-blue-500 hover:bg-blue-700 rounded-md mx-1 "
      >
        <MdEdit size={18} color="white" />
      </button>

      {showEditModal && (
        <div className="    fixed  left-0 top-0 bottom-0 w-full     flex justify-center items-center bg-black/70">
          <div className=" w-[40%]  max-md:w-[90%] shadow-xl  bg-white  min-h-56 rounded-md">
            <div className=" w-full flex  justify-end  cursor-pointer  pr-2 my-2">
              <MdCancel
                onClick={() => {
                  setShowEditModal(false);
                }}
                size={28}
              />
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateTaskHandler();
              }}
              className=" w-full  px-3 h-full  "
            >
              <p>Task Title :</p>
              <input
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                type="text"
                className=" w-full h-10 border-gray-500 outline-blue-400  my-2 rounded-md  border-2
"
                placeholder=" Enter Task Title"
              />

              <p>Task Description :</p>
              <textarea
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                className=" w-full h-20 border-2 border-gray-500 outline-blue-400  my-2 rounded-md
"
                placeholder=" Enter Task Description"
              />

              <p>Task Status : {status}</p>
              <select
                className=" w-full h-10 border-2 border-gray-500 outline-blue-400  my-2 rounded-md
"
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              >
                <option value="TODO">TODO</option>
                <option value="INPROGRESS">INPROGRESS</option>
                <option value="DONE">DONE</option>
              </select>
              <button
                type="submit"
                className=" text-white bg-gradient-to-r from-pink-400 via-blue-500 to-yellow-300  my-4 w-full h-10 font-bold  hover:from-pink-500 hover:via-blue-600 hover:to-yellow-500 rounded-md"
              >
                UPDATE TASK
              </button>
            </form>
          </div>
        </div>
      )}
   </>
  );
};

export default EditModal;
