import Button from './Button';
import { TbAlertOctagonFilled } from "react-icons/tb";

const DeleteModal = ({ modalToggle, setModalToggle, handleDelete, postId, postTitle }) => {
    return (
        <div className=" flex items-center justify-center w-screen fixed inset-0 bg-black/60 p-0 z-99 ">
            <div className="flex flex-col items-center bg-white rounded-xl py-12 w-full max-w-md gap-4 relative">
                <span
                    className="absolute top-2 right-3 text-3xl cursor-pointer text-black hover:text-gray-300"
                    onClick={() => setModalToggle(!modalToggle)}
                >
                    &times;
                </span>
                <h2 className="flex flex-col items-center text-4xl text-red-500 text-center font-bold gap-6"> 
                    <TbAlertOctagonFilled size="60"/> 
                    Delete article
                </h2>
                <p className="text-gray-500 drop-shadow-lg">
                    Are you sure you want to delete this article?
                </p> 
                <p className='font-bold px-12 text-center'> 
                    "{postTitle}"
                </p>
                <div className="flex justify-between w-full px-18 gap-6">
                    <Button text="Cancel" style="white" onClick={() => setModalToggle(!modalToggle)}/>
                    <Button text="Delete" style="red" onClick={() => handleDelete(postId)}/>
                </div>
            </div>
        </div>
  );
};

export default DeleteModal;