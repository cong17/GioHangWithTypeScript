export class SanPhamTrongGioHang {
    constructor(sanpham, soluong) {
        this._soluong = 1;
        this._sanpham = sanpham;
        this._soluong = soluong;
    }
    tinhGiaTien() {
        return 123;
    }
    showSanPhamTrongGioHang() {
        return "123";
    }
    get sanpham() {
        return this._sanpham;
    }
    set soluong(v) {
        this._soluong = v;
    }
    get soluong() {
        return this._soluong;
    }
}
