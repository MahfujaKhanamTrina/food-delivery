import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from 'sweetalert2'

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data)
        //upload image to imgbb
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if(res.data.success){
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url,
                nutrition: {
                    calories: parseFloat(data.calories),
                    protein: parseFloat(data.protein),
                    fat: parseFloat(data.fat),
                    carbohydrates: parseFloat(data.carbohydrates), 
                    sodium: parseFloat(data.sodium)
                }
            }

            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                reset();
                //show success popup
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log('with img url',res.data);

    };

    return (
        <div>
            <SectionTitle heading="add an item"></SectionTitle>

            <div className="px-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              
                <input {...register("name")} />

                <label className="form-control w-full -my-8 mb-2 ">
                     <div className="label ">
                       <span className="label-text text-xl">Recipe Name*</span>
                     </div>
                     <input type="text" placeholder="Recipe Name"
                     {...register('name', {required: true})}  className="input input-bordered w-full text-xl" />
                </label>

                <div className="flex gap-6">
                <label className="form-control w-full my-6">
                     <div className="label">
                       <span className="label-text text-xl">Category*</span>
                     </div>

                     <select defaultValue="default" {...register('category', {required: true})} 
                className="select select-bordered w-full text-xl ">
                      <option disabled value="default">Select a category</option>
                      <option value="appetizer">Appetizer</option>
                      <option value="soup">Soup</option>
                      <option value="salad">Salad</option>
                      <option value="pizza">Pizza</option>
                      <option value="pasta">Pasta</option>
                      <option value="meal">Meal</option>
                      <option value="dessert">Dessert</option>
                      <option value="drinks">Drinks</option>                    
                </select>
                </label>

                <label className="form-control w-full my-6">
                     <div className="label">
                       <span className="label-text text-xl">Price*</span>
                     </div>
                     <input type="number" placeholder="Price"
                     {...register('price', {required: true})} className="input input-bordered w-full text-xl" />
                </label>

                </div>

                <label className="form-control">
                    <div className="label">
                      <span className="label-text text-xl">Recipe Details</span>
                    </div>
                    <textarea {...register('recipe', {required: true})} className="textarea textarea-bordered h-24 text-xl" placeholder="Recipe Details"></textarea>
                </label>

                <div className="form-control w-full my-6">
                <input {...register('image', {required: true})} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </div>

                <div className="label">
                      <span className="label-text text-xl">Nutrition*</span>
                </div>
                 <div className="flex gap-6">
                 <input type="number" placeholder="Calories" {...register('calories', { required: true })} className="input input-bordered w-full mb-2" />
                <input type="number" placeholder="Protein (g)" {...register('protein', { required: true })} className="input input-bordered w-full mb-2" />
                <input type="number" placeholder="Fat (g)" {...register('fat', { required: true })} className="input input-bordered w-full mb-2" />
                <input type="number" placeholder="Carbohydrates (g)" {...register('carbohydrates', { required: true })} className="input input-bordered w-full mb-2" />
                <input type="number" placeholder="Sodium (g)" {...register('sodium', { required: true })} className="input input-bordered w-full mb-2 " />
                 </div>
               <button className="btn text-xl">
                Add Item <FaUtensils></FaUtensils>
               </button>
             </form>
            </div>
        </div>
    );
};
export default AddItems;