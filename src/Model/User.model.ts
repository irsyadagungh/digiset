/* eslint-disable @typescript-eslint/no-unused-vars */
import {  IUserCreate, IUserResponse, IUserUpdate } from "@/types/User.type";
import { DatabaseError, NotFoundError, ValidationError } from "@/utils/Error";
import { FirebaseService } from "../../config/FirebaseService";
import FirestoreRepository from "../../config/FirebaseModul";

export class UserModel {


    private static instance: UserModel;
    private fireBaseService : FirebaseService;
    private firebaseModule : FirestoreRepository;
    private firebaseConfig = {
        apiKey: "AIzaSyA-uAmBgPT-fgZDoKapaCKrawKsOIgXXE4",
        authDomain: "digiset-8a296.firebaseapp.com",
        projectId: "digiset-8a296",
        storageBucket: "digiset-8a296.firebasestorage.app",
        messagingSenderId: "136515781927",
        appId: "1:136515781927:web:39a7d24cf9f44c0554d502",
        measurementId: "G-CFTHCSRQ72"
    };


    private constructor(){
        this.fireBaseService = FirebaseService.getInstance(this.firebaseConfig);
        this.firebaseModule = new FirestoreRepository(this.fireBaseService);
        
    }

    public static getInstance(): UserModel{
        if(!UserModel.instance){
            UserModel.instance = new UserModel()
        }
        return UserModel.instance;
    }
    private dataDummy = 
    [
        {
            id : "10",
            username: "SigmaBoy",
            email : "sigamboy@gmail.com",
            walletId: "Jfnk9kdfw0dfnIfenu2",
            password : "12345678",
        },
        {
            id : "11",
            username: "SigmaBoy2",
            email : "sigamboy2@gmail.com", 
            walletId: "Jfnk9kdfw0dfnIfenu22",
            password : "123456782",
        },
    ]

    private validateCreateUser(data: IUserCreate){
        if(!data.username){
            throw new ValidationError("username required")
        }
        if(!data.password){
            throw new ValidationError("password required")
        }
        if(!data.email){
            throw new ValidationError("email required")
        }
        
    }
    private formatUser(userData: {id: string, username: string, email: string, walletId: string, password: string}):IUserResponse{
        return {
            id: userData.id,
            username: userData.username,
            email:userData.email,
            walletId: userData.walletId,
            password: userData.password,
            created_at: new Date()

        }
    }

   public async findAll():Promise<IUserResponse[]>{
   
    return this.dataDummy.map(row => this.formatUser(row));
    
   }

    public async signup(email: string, password:string, username:string){
        try{
            const credential  = await this.firebaseModule.signup(email,password,username)
        }catch (error){
            throw new DatabaseError(`Error signup`,  error as Error )
        }
    
    }

    public async signin(email : string, password:string){
        try{
            await this.firebaseModule.signin(email,password);
        }catch(error){
            throw new DatabaseError(`Error login`,  error as Error )
        }
    }

   public async findById(id: string):Promise<IUserResponse>{
    
        try{
            if(this.dataDummy.length === 0){
                throw new NotFoundError(`user dengan id ${id} tidak ditemukan`);
            }
            return this.formatUser(this.dataDummy[0])
        }catch(error){
            if(error instanceof NotFoundError){
                throw error
            }
            throw new DatabaseError(`Error fetch item dengan id ${id}`,  error as Error )
        }
    }

    public async create (data: IUserCreate){
        try{
            this.validateCreateUser(data);
            console.log('success')
            try {

            } catch (error) {
                console.error('Database query error:', error);
                throw new DatabaseError('Error creating item', error as Error);
            }
            
           
        }catch(error){
            if (error instanceof ValidationError) {
                throw error;
            }
            throw new DatabaseError('Error creating item', error as Error);
        }
    }

    public async update(id:string, data: IUserUpdate):Promise<IUserResponse>{
        try{
            await this.findById(id);
 
            return await this.findById(id)
        }catch(error){
            if(error instanceof NotFoundError){
                throw error;
            }
            throw new DatabaseError(`Error updating item with id ${id}`, error as Error)
        }
    }

    public async delete(id: string): Promise<void>{
        
        try{             
           
            await this.findById(id);  

            try {
                //fetch API Delete disini, contoh :

                //const [result] = await this.pool.query<ResultSetHeader>('DELETE FROM user WHERE id = ? ',[id]);
                // if(result.affectedRows===0){
                //     throw new NotFoundError(`user not found`)
                // }  
            } catch (error) {
                console.error('Database query error:', error);
                throw new DatabaseError('Error creating item', error as Error);
            }
                       
                 
        }catch(error){
            throw new DatabaseError(`Error deleting item with id ${id}`, error as Error);
        }
    }


}