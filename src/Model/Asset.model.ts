
import { IAssetCreate, IAssetResponse, IAssetUpdate,} from "@/types/Asset.type";
import { DatabaseError, NotFoundError, ValidationError } from "@/utils/Error";
import { FirebaseService } from "../../config/FirebaseService";
import FirestoreRepository from "../../config/FirebaseModul";


export class AssetModel {

    private fireBaseService : FirebaseService;
    private firebaseModule : FirestoreRepository;
    private static instance: AssetModel;
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

    public static getInstance(): AssetModel{
        if(!AssetModel.instance){
            AssetModel.instance = new AssetModel()
        }
        return AssetModel.instance;
    }
    private dataDummy = 
    [
        {
            id : "10",
            label: "SigmaBoy",
            walletId : "sigamboy@gmail.com",
            prevWalletId: "Jfnk9kdfw0dfnIfenu2",
            buktiKepemilikan : "12345678",
            buktiTransaksi:"sadasdasdsa"
        },
        {
            id : "11",
            label: "SigmaBoy2",
            walletId : "sigamboy2@gmail.com", 
            prevWalletId: "Jfnk9kdfw0dfnIfenu22",
            buktiKepemilikan: "123456782",
            buktiTransaksi:"sadasdasdsa"
        },
    ]

    private validateCreateAsset(data: IAssetCreate){
        if(!data.label){
            throw new ValidationError("label required")
        }
        if(!data.walletId){
            throw new ValidationError("walletId required")
        }
        if(!data.buktiKepemilikan){
            throw new ValidationError("bukti kepemilikan required")
        }
        
    }

    private convertImage(file: File):Promise<string>{
        return new Promise<string>(
            (resolve,reject)=>{
                const reader = new FileReader();
                
                reader.onload =()=> {
                    const base64string = reader.result as string;
                    resolve(base64string);
                }
                reader.onerror = (error) =>{
                    reject(error);
                }
                reader.readAsDataURL(file);
            })

    }

    private formatAsset(assetData: {id: string, label: string, walletId: string, prevWalletId: string, buktiKepemilikan: string, buktiTransaksi :string}):IAssetResponse{
        return {
            id: assetData.id,
            label: assetData.label,
            walletId:assetData.walletId,
            prevWalletId: assetData.prevWalletId,
            buktiKepemilikan: assetData.buktiKepemilikan,
            buktiTransaksi: assetData.buktiTransaksi,
            created_at: new Date(),
            updated_at: new Date(),

        }
    }

   public async findAll():Promise<IAssetResponse[]>{
    try {

    }catch{

    }
    
    return this.dataDummy.map(row => this.formatAsset(row));
    
   }

   public async getDatabyValue(id: string): Promise<IAssetResponse[]> {

    try {
      const assets = await this.firebaseModule.getDataByField('Asset', 'walletId', id);
      return assets as IAssetResponse[];
    } catch (error) {
      throw new DatabaseError(`Error fetching item`, error as Error);
    }
  }
  

   public async findById(id: string):Promise<IAssetResponse>{

        try{
            const asset = await this.firebaseModule.getDocument('Asset', id)
            return asset as IAssetResponse
        }catch(error){
            if(error instanceof NotFoundError){
                throw error
            }
            throw new DatabaseError(`Error fetch item dengan id ${id}`,  error as Error )
        }
    }

    public async create (data: IAssetCreate){
    //buat object IAssetCreate dengan useState dulu di FE nya;
        try{
            this.validateCreateAsset(data);
            console.log('success')
            try {
                //const convert = this.convertImage(data.buktiKepemilikan);
                this.firebaseModule.addDocument('Asset', data.walletId, {'label' : data.label ,'bukti_kepemilikan' : data.buktiKepemilikan, 'bukti_transaksi': data.buktiTransaksi , 'prevWalletId': "", 'walletId' : data.walletId,  'created_at' :Date.now(), 'updated_at' :Date.now() })
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

    public async update(id:string, data: IAssetUpdate):Promise<IAssetResponse>{
        //const convert = this.convertImage(data.buktiTransaksi);
        try{
            await this.findById(id);
            const updatedData = {
            buktiTransaksi: data.buktiTransaksi,
            updated_at: new Date(),
        };
            
            this.firebaseModule.updateDocument('Asset', data.walletId, {'buktiTransaksi' : data.buktiTransaksi , 'updated_at' :new Date()} ) 
            console.log(data)

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
                //fetch API dan ABI Delete disini, contoh :

                //const [result] = await this.pool.query<ResultSetHeader>('DELETE FROM asset WHERE id = ? ',[id]);
                // if(result.affectedRows===0){
                //     throw new NotFoundError(`asset not found`)
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