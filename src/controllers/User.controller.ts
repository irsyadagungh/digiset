import { UserModel } from "@/Model/User.model";
import { IUserCreate, IUserResponse, IUserUpdate } from "@/types/User.type";
import { DatabaseError, ValidationError } from "@/utils/Error";



export class UserController{
    private userModel: UserModel
    

    constructor(){
        this.userModel = UserModel.getInstance();
    }

    public getAll = async():Promise<IUserResponse[]> =>{
        const dataDump:IUserResponse[] = []
        try{
            const dataUser = await this.userModel.findAll();
            return dataUser;
        } catch(error) {
            if (error instanceof DatabaseError) {
                console.log('databaseError');
                return dataDump;
            }
            return dataDump;
        }
        

    }

    public signup = async(email: string, password:string, username:string):Promise<void>=>{
        try {
            await  this.userModel.signup(email, password, username )
        } catch (error) {
            if (error instanceof DatabaseError) {
                console.log("database error")               
            }           
        }
    }
    public signin = async(email: string, password:string ):Promise<void>=>{
        try {
            await  this.userModel.signin(email, password )
        } catch (error) {
            if (error instanceof DatabaseError) {
                console.log("database error")               
            }           
        }
    }


    public getById = async(id: string):Promise<IUserResponse> =>{
        const dataDump:IUserResponse = {id:"", username:"", email:"",password:"",walletId:"",created_at:new Date()};
        try{
            const dataUser = await this.userModel.findById(id);
            return dataUser;
        }catch(error){
            if (error instanceof DatabaseError) {
                console.log("database error")
                return dataDump;
            }
            return dataDump

        }
    }

    public create = async(userData: IUserCreate):Promise<void> => {
        try{
            const newUser = await this.userModel.create(userData);
            return newUser;
        }catch(error){
            if (error instanceof ValidationError){
                console.log(error.message);
                return;
            }
            console.log('internal server error')
        }
    }
    public update = async(id:string, userData: IUserUpdate):Promise<void>=>{
        try{
            const updateUser = await this.userModel.update(id, userData);
            console.log(updateUser);
        }catch(error){
            console.log("error updating data");
                
        }
        console.log('internal server error')
    }
    public delete = async(id:string): Promise<void> =>{
        try{
            const updateUser = await this.userModel.delete(id);
            console.log(updateUser);
        }catch(error){
            console.log("error deleting data");
                
        }
        console.log('internal server error')
    }

}