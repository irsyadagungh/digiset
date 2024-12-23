


export interface IAsset{
    id ?: string,
    label : string,
    walletId: string,
    prevWalletId: string|null,
    buktiKepemilikan: string,
    buktiTransaksi: string,
    created_at: Date,
    updated_at: Date,
}

export interface IAssetResponse extends Required<IAsset>{
    id : string,
    prevWalletId: string|null,
    created_at: Date,
    updated_at: Date,
}

export interface IAssetCreate extends Omit<IAsset, 'id'| 'prevWalletId'|'created_at'|'uppdated_at'>{
    label : string,
    walletId: string,
    buktiKepemilikan: string,
    buktiTransaksi: string||null,
}
export interface IAssetUpdate extends Partial<IAssetResponse>{
    walletId: string
    buktiTransaksi: string,
}