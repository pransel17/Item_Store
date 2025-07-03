// will be using global state // A global state is data that can be shared and used by many components in your app — without having to pass it down manually as props.
// since usestate()  is only for local 

import {create} from "zustand"

export const useProductStore = create((set) => ({  //  doing (set) is required when you're creating a Zustand store


    products: [],  // the actual data oki
    setProducts: (products) => set({ products }),  /// function to update the data
    createProduct: async(newProduct) =>{
        if(!newProduct.name || !newProduct.image || !newProduct.price){
            return {success: false, message: "Please fill in all fields"}
        }
        const res = await fetch("/api/products", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(newProduct)
        })
        const data = await res.json()
        set((state) => ({products:[...state.products, data.data]}))
        return {success: true, message: "Product created succesfully"}
    },
    fetchProducts: async () => {
        const res = await fetch("/api/products");
        const data = await res.json();
        set({ products: data.data }); 
    }
}))

