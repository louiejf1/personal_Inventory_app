import { createContext } from "react";

const ItemContext = createContext({items:[],load:()=>{}})

export default ItemContext;