import axios from "axios";
import { TContactSocialMediaData } from "../types/types";



// eslint-disable-next-line @typescript-eslint/no-unused-vars

export async function getSocialMediaData(): Promise<TContactSocialMediaData> {
        const response = await axios.get('http://127.0.0.1:8000/api/contacts/1').then(res => {

                return res.data;
        })
        return response;

}


export async function getBrandData(brand:number|undefined):Promise<string[]>{

                const response = await axios.get(`http://127.0.0.1:8000/api/brand/${brand}/site`).then(res=>
                        
                        { 
                                return res.data.data
                        });

                        
                return response;

        }

//  export async function getProductsDependOnCategory(brand:number|undefined,category:number):Promise<string[]>{

//         const response = await axios.get(`http://127.0.0.1:8000/api/brand/${brand}/site`).then(res=>
                
//                 { 
                
               
//                  return res.data.data.categories[category].products});
//         return response;
// }
