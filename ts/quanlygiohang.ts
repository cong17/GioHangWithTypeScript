import { SanPhamTrongGioHang } from "./sanphamtronggiohang.js"
import { SanPham } from "./sanpham";
export class QuanLyGioHang {

  private _cacSanPhamTrongGioHang: SanPhamTrongGioHang[] = [];

  public xoasanpham(sanpham: SanPham): boolean {
    var chiso: number = this.checkSp(sanpham);
    if (chiso > -1) {
      this._cacSanPhamTrongGioHang.splice(chiso, 1);
      return true
    }
    return false
  }
  public addSanPhamVaoGioHang(sanpham: SanPhamTrongGioHang): void {

    this._cacSanPhamTrongGioHang.push(sanpham);
    // checkSp(sanpham);
  }

  public checkSp(motsanpham): number {
    for (let i = 0; i < this._cacSanPhamTrongGioHang.length; i++) {
      const ele = this._cacSanPhamTrongGioHang[i];
      if (ele.sanpham.id == motsanpham.id)
        return i;
    }
    return -1;
  }

  public tangsoluongsanpham(motsanpham: SanPham): void {
    //can biet vi tri san pham
    var chiso = this.checkSp(motsanpham);
    var soluonghientai: number = this._cacSanPhamTrongGioHang[chiso].soluong;
    var soluongmoi: number = +soluonghientai + 1;
    this._cacSanPhamTrongGioHang[chiso].soluong = soluongmoi;
  }

  public updateSanPhamTrongGH(motsanpham: SanPham, soluong: number): void {
    this._cacSanPhamTrongGioHang.forEach(ele => {
      if (ele.sanpham.id == motsanpham.id) {
        ele.soluong = soluong;
      }
    });
  }

  public kiemTraTrangThaiSP(): void { };

  public tinhSoLuong(): number {
    var tongsanpham: number = 0;
    for (let i = 0; i < this._cacSanPhamTrongGioHang.length; i++) {
      const ele = this._cacSanPhamTrongGioHang[i];
      tongsanpham = tongsanpham + +ele.soluong;

    }
    return tongsanpham
  };

  public tinhgia(): number {
    var tonggia: number = 0;
    for (let i = 0; i < this._cacSanPhamTrongGioHang.length; i++) {
      const ele = this._cacSanPhamTrongGioHang[i];
      var gia: number = ele.sanpham.gia;
      var soluong: number = ele.soluong;
      var cost: number = soluong * gia;
      tonggia += cost;

    }
    return tonggia;
  };

  public hienThiTronGioHang(): string {
    var html = "";
    for (let i = 0; i < this._cacSanPhamTrongGioHang.length; i++) {
      const ele = this._cacSanPhamTrongGioHang[i];
      html += `
      <div class="row _1sanpham ">
						<div class="col-sm-2">
							<img class="img-fluid sanphamtronggio" src="${ele.sanpham.anh}" alt="" />
            </div>
						<div class="col-sm-4 ">
							<a href="#">${ele.sanpham.ten}
							</a>
							<div>${ele.sanpham.mota}</div>
						</div>
						<div class="col-sm-2 pt-3">
							<div class="giahientai">${ele.sanpham.gia} đ</div>
								<span class="badge badge-warning">-26%</span>
						</div>
						<div class="col-sm-2 pt-3">
								<input data-idsp=${ele.sanpham.id} type="number" min="1" value="${ele.soluong}" name="" class="soluong" />
					  </div>
						<div class="col-sm-2 pt-3">
              <button data-idsp="${ele.sanpham.id}" class="btn btn-outline-warning xoa">Delete</button>
            </div>
      </div>
    `
    }
    return html;
  }
  public hienthigiatronggiohang(): string {
    var html: string = "";
    var tongtien: number = this.tinhgia();
    html = `
          <div class="card card-block p-2">
          <div class="tinhtien mb-3">
            <div class="phai float-right">${tongtien}đ</div>
            <div class="trai">Tạm tính</div>
          </div>
          <hr />
          <div class="thanhtien">
            <div class="phai float-right text-right">
              <div class="to">${tongtien} đ</div>
              <div class="nho">(Đã bao gồm VAT nếu có)</div>
            </div>
            <div class="trai">Thành tiền</div>
          </div>
          </div>
        <a id="OK" href="#" class="btn btn-info btn-block mt-3 mb-3">Đặt hàng</a>
  `


    return html;
  }

}