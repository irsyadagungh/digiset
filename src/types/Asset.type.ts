


export interface IAsset{
    id ?: string,
    label : string,
    walletId: string,
    prevWalletId: string|null,
    buktiKepemilikan: string|File,
    buktiTransaksi: string|File,
    created_at: Date,
    updated_at: Date,
}

export interface IAssetResponse extends Required<IAsset>{
    id : string,
    prevWalletId: string|null,
    created_at: Date,
    updated_at: Date,
}

export interface IAssetCreate extends Omit<IAsset, 'id'| 'prevWalletId'|'buktiTransaksi'|'created_at'|'uppdated_at'>{
    label : string,
    walletId: string,
    buktiKepemilikan: File,
}
export interface IAssetUpdate extends Partial<IAssetResponse>{
    walletId: string
    buktiTransaksi: File,
}