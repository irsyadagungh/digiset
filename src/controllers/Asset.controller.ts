import { IAssetCreate, IAssetResponse, IAssetUpdate } from '@/types/Asset.type';
import { AssetModel } from './../Model/Asset.model';

import { DatabaseError, ValidationError } from "@/utils/Error";



export class AssetController{
    private assetModel: AssetModel;

      

    constructor(){
        this.assetModel = AssetModel.getInstance();
       
    }

   

    public getAll = async():Promise<IAssetResponse[]> =>{
        const dataDump:IAssetResponse[] = []
        try{
            const dataAsset = await this.assetModel.findAll();
            return dataAsset;
        } catch(error) {
            if (error instanceof DatabaseError) {
                console.log('databaseError');
                return dataDump;
            }
            return dataDump;
        }
        

    }

    public getById = async(id: string):Promise<IAssetResponse> =>{
        const dataDump:IAssetResponse = {id:"", label:"",walletId:"", prevWalletId:"", buktiKepemilikan:"",buktiTransaksi:"",created_at:new Date(),updated_at:new Date()};
        try{
            const dataAsset = await this.assetModel.findById(id);
            return dataAsset;
        }catch(error){
            if (error instanceof DatabaseError) {
                console.log("database error")
                return dataDump;
            }
            return dataDump

        }
    }

    public create = async(assetData: IAssetCreate):Promise<void> => {
        try{
            const newAsset = await this.assetModel.create(assetData);
            return newAsset;
        }catch(error){
            if (error instanceof ValidationError){
                console.log(error.message);
                return;
            }
            console.log('internal server error')
        }
    }
    public update = async(id:string, assetData: IAssetUpdate):Promise<void>=>{
        try{
            const updateAsset = await this.assetModel.update(id, assetData);
            console.log(updateAsset);
        }catch(error){
            console.log("error updating data");
                
        }
        console.log('internal server error')
    }

    public delete = async(id:string): Promise<void> =>{
        try{
            const updateUser = await this.assetModel.delete(id);
            console.log(updateUser);
        }catch(error){
            console.log("error deleting data");
                
        }
        console.log('internal server error')
    }

}