export class QuanLyGioHang {
    constructor() {
        this._cacSanPhamTrongGioHang = [];
    }
    xoasanpham(sanpham) {
        var chiso = this.checkSp(sanpham);
        if (chiso > -1) {
            this._cacSanPhamTrongGioHang.splice(chiso, 1);
            return true;
        }
        return false;
    }
    addSanPhamVaoGioHang(sanpham) {
        this._cacSanPhamTrongGioHang.push(sanpham);
        // checkSp(sanpham);
    }
    checkSp(motsanpham) {
        for (let i = 0; i < this._cacSanPhamTrongGioHang.length; i++) {
            const ele = this._cacSanPhamTrongGioHang[i];
            if (ele.sanpham.id == motsanpham.id)
                return i;
        }
        return -1;
    }
    tangsoluongsanpham(motsanpham) {
        //can biet vi tri san pham
        var chiso = this.checkSp(motsanpham);
        var soluonghientai = this._cacSanPhamTrongGioHang[chiso].soluong;
        var soluongmoi = +soluonghientai + 1;
        this._cacSanPhamTrongGioHang[chiso].soluong = soluongmoi;
    }
    updateSanPhamTrongGH(motsanpham, soluong) {
        this._cacSanPhamTrongGioHang.forEach(ele => {
            if (ele.sanpham.id == motsanpham.id) {
                ele.soluong = soluong;
            }
        });
    }
    kiemTraTrangThaiSP() { }
    ;
    tinhSoLuong() {
        var tongsanpham = 0;
        for (let i = 0; i < this._cacSanPhamTrongGioHang.length; i++) {
            const ele = this._cacSanPhamTrongGioHang[i];
            tongsanpham = tongsanpham + +ele.soluong;
        }
        return tongsanpham;
    }
    ;
    tinhgia() {
        var tonggia = 0;
        for (let i = 0; i < this._cacSanPhamTrongGioHang.length; i++) {
            const ele = this._cacSanPhamTrongGioHang[i];
            var gia = ele.sanpham.gia;
            var soluong = ele.soluong;
            var cost = soluong * gia;
            tonggia += cost;
        }
        return tonggia;
    }
    ;
    hienThiTronGioHang() {
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
    `;
        }
        return html;
    }
    hienthigiatronggiohang() {
        var html = "";
        var tongtien = this.tinhgia();
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
  `;
        return html;
    }
}
