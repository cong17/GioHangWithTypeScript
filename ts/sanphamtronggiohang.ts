import { SanPham } from "./sanpham.js"
export class SanPhamTrongGioHang {
    private _sanpham: SanPham;
    private _soluong: number = 1;
    constructor(sanpham: SanPham, soluong: number) {
        this._sanpham = sanpham;
        this._soluong = soluong
    }
    tinhGiaTien(): Number {
        return 123;
    }
    showSanPhamTrongGioHang(): string {
        return "123";
    }

    public get sanpham(): SanPham {
        return this._sanpham;
    }

    public set soluong(v: number) {
        this._soluong = v;
    }

    public get soluong(): number {
        return this._soluong;
    }







}