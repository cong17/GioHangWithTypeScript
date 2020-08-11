
import { SanPham } from "./sanpham.js"
import { QuanlyHang } from "./quanlyhang.js"
import { QuanLyGioHang } from "./quanlygiohang.js"
import { SanPhamTrongGioHang } from "./sanphamtronggiohang.js"

var quanlyhang = new QuanlyHang();
var giohang = new QuanLyGioHang();
var spHTML = quanlyhang.showSanPham();

function alertAdd(): void {
    document.getElementsByClassName("thongbao")[0].innerHTML = `
    <div class="col-sm-12">
        <div class="alert alert-info" role="alert">
            <i class="fa fa-check-circle-o" aria-hidden="true"></i><strong> Một sản phẩm </strong> đã được
            thêm vào giỏ hàng
        </div>
    </div>

`
}
function alertDelete(): void {
    document.getElementsByClassName("thongbao")[0].innerHTML = `
    <div class="col-sm-12">
        <div class="alert alert-warning" role="alert">
        <i class="fa fa-ban" aria-hidden="true"></i><strong> Một sản phầm</strong> Vừa bị
        xóa khỏi giỏ hàng
        </div>
    </div>`
}
function OKKKKKK(): void {
    document.getElementsByClassName("thongbao")[0].innerHTML = `
    <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">Well done!</h4>
        <p>Thiết kế giỏ hàng viết theo OOP </p>
        <hr>
        <p class="mb-0">TypeScript & JavScript</p>
    </div>`
}
function dislayToCard(): void {
    document.getElementById("tinhgiasp").innerHTML = giohang.hienthigiatronggiohang();
    document.getElementById("tongsp").innerText = `${giohang.tinhSoLuong()} sản phẩm `
}



document.querySelector("#splienquan > .row").innerHTML = spHTML;
document.querySelectorAll(".muangay").forEach(ele => {
    ele.addEventListener("click", function () {
        var idsp = this.getAttribute("data-idsp");
        if (quanlyhang.getSanPham(idsp) === 0) {
            console.log("San pham khong ton tai");
        }
        else {
            var splayduoc: SanPham = quanlyhang.getSanPham(idsp);
            if (giohang.checkSp(splayduoc) == -1) {//san pham nay chua co trong gio hang
                var sptronggiohang = new SanPhamTrongGioHang(splayduoc, 1);
                giohang.addSanPhamVaoGioHang(sptronggiohang);
            }
            else {
                giohang.tangsoluongsanpham(splayduoc);

            }
            var html: string = giohang.hienThiTronGioHang();
            document.getElementById("sptronggiohang").innerHTML = html;
            alertAdd();

            document.querySelectorAll("button.xoa").forEach(ele => {
                ele.addEventListener("click", function () {
                    var idsp: number = Number(ele.getAttribute("data-idsp"));
                    var splayduoc: SanPham = quanlyhang.getSanPham(idsp);
                    if (giohang.xoasanpham(splayduoc)) {
                        this.parentNode.parentNode.outerHTML = ""
                        dislayToCard();
                        alertDelete();
                    }


                })

            })

            //xu ly tang giam san pham;
            document.querySelectorAll(".soluong").forEach(function (ele) {
                ele.addEventListener("change", function () {
                    var soluongthaydoi: number = this.value;
                    var idsp: number = this.getAttribute("data-idsp");
                    var splayduoc: SanPham = quanlyhang.getSanPham(idsp);
                    giohang.updateSanPhamTrongGH(splayduoc, soluongthaydoi);
                    dislayToCard();


                })
            });

            dislayToCard();

        }
    })
});



