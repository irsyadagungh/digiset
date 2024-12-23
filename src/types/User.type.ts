export interface IUser {
    id ?: string,
    walletId ?: string,
    username : string,
    email : string,
    password : string,
    created_at ?: Date,
}

export interface IUserResponse extends Required<IUser>{
    id : string,
    walletId : string,
    created_at : Date,
}
export interface IUserCreate extends Omit<IUser,'id'|'wallet_id'|'created_at'>{
    username : string,
    email : string,
    password : string
}
export interface IUserUpdate extends Partial<IUserResponse>{

}