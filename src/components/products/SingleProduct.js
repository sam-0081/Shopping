import {useState} from 'react';
import {useParams} from "react-router-dom";
import {useGetProductQuery} from "../../features/api/api";
import {useDispatch} from "react-redux";
import {addToCart} from "../../features/authSlice/authSlice";


const SingleProduct = () => {
    const {id} = useParams();
    const {data, isLoading} = useGetProductQuery(id);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)
    const dispatch = useDispatch();

    const handleImageChange = (index) => {
        setSelectedImageIndex(index)

    }

    const handleAddToCart = (item) => {
        dispatch(addToCart(item))
        console.log(item)
    }


    return (
        <div className={'container mx-auto px-4'}>
            {isLoading && <p>Loading...</p>}
            {data && (
                <div>
                    {/*<h1 className={'text-center my-4'}>{data.title}</h1>*/}
                    <div className={'flex justify-center mt-2 '}>
                        <div className={'flex max-lg:flex-col items-center justify-between gap-2 max-w-6xl'}>
                            <div className={'lg:flex    gap-2  '}>
                                <div className={' lg:w-[450px] '}>
                                    <img src={data.images[selectedImageIndex]} alt="product"
                                         className="h-max-96 object-cover rounded"/>
                                </div>
                                <div className={'lg:flex-col flex gap-2 mt-2'}>
                                    {data.images.map((image, index) => (
                                        <img onClick={() => handleImageChange(index)} key={index} src={image}
                                             alt="product"
                                             className={`w-20 h-20 min-w-20 min-h-20 mb-4 object-cover cursor-pointer hover:brightness-125 rounded  ${selectedImageIndex === index ? "border-2 border-orange-500 drop-shadow-2xl brightness-125  " : ""}`}/>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-col  p-2 ">
                                <h4 className="text-gray-600 z-20 pb-2">{data.category.name}</h4>
                                <h3 className=" font-bold">{data.title}</h3>
                                <p className="text-gray-600 z-20 py-4 font-bold text-2xl">{`Цена ${data.price}$`}</p>

                                <div className={'mb-8'}>
                                    <h3 className="text-lg font-bold">Описание</h3>
                                    <p className="text-gray-500 text-justify z-20">{data.description}</p>
                                </div>

                                <div className={'flex flex-wrap gap-4 '}>
                                    <button type={"button"}
                                            onClick={() => handleAddToCart(data)}
                                            className="flex justify-center whitespace-nowrap bg-emerald-500 hover:bg-emerald-600   p-2 px-6 rounded-2xl text-slate-900 text-lg">
                                        Добавить в Карзину
                                    </button>
                                    <button type={"button"}
                                            className="flex justify-center whitespace-nowrap  bg-orange-500 hover:bg-orange-600   p-2 px-6 rounded-2xl text-white text-lg">
                                        Добавить в Избранное
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default SingleProduct;