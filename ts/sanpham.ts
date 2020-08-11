export class SanPham {
    //thuoctinh
    private _id: Number;
    private _ten: string;
    private _gia: number;
    private _mota: string;
    private _tinhtrang: boolean;
    private _anh: string;
    constructor(
        id: Number,
        ten: string,
        gia: number,
        mota: string,
        tinhtrang: boolean,
        anh: string
    ) {
        this._id = id;
        this._ten = ten;
        this._gia = gia;
        this._mota = mota;
        this._tinhtrang = tinhtrang;
        this._anh = anh;
    }
    //#region assesor
    //id
    public get id(): Number {
        return this._id;
    }

    public set id(v: Number) {
        this._id = v;
    }
    //ten
    public get ten(): string {
        return this._ten;
    }
    public set ten(v: string) {
        this._ten = v;
    }
    //gia
    public get gia(): number {
        return this._gia;
    }
    public set gia(v: number) {
        this._gia = v;
    }
    //mota
    public get mota(): string {
        return this._mota;
    }
    public set mota(v: string) {
        this._mota = v;
    }
    //tinhtrang
    public get tinhtrang(): boolean {
        return this._tinhtrang;
    }
    public set tinhtrang(v: boolean) {
        this._tinhtrang = v;
    }
    //anh

    public get anh(): string {
        return this._anh;
    }

    public set anh(v: string) {
        this._anh = v;
    }

    //#endregion




}
