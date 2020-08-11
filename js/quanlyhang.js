import { SanPham } from "./sanpham.js";
export class QuanlyHang {
    constructor() {
        this.hang = [];
        //vi ko co backend nen tao tay san pham
        var sanpham1 = new SanPham(1, 'DUREX Bao Cao Su Durex Fetherlite 3 cái/Hộp', 60000, "ao Cao Su Durex Fetherlite có độ bảo vệ cao, với kiểu dáng được cải tiến dễ sử dụng và tạo cảm giác mãnh liệt, vừa vặn hơn khi quan hệ. Bao Cao Su Durex Fetherlite giúp mọi người lại gần nhau hơn, Fetherlite là bao cao su siêu mỏng trong nhóm sản phẩm Latex.", true, "image/1.webp");
        this.addSanPham(sanpham1);
        var sanpham2 = new SanPham(2, 'DUREX Gel Bôi Trơn Durex Play Strawberry 100ml', 174000, "Gel Bôi Trơn Durex Play Strawberry với hương vị và mùi thơm ngọt ngào, mang đến trải nghiệm khó cưỡng. Gel bôi trơn gốc nước, an toàn khi sử dụng cùng bao cao su, giúp cuộc yêu trở nên mặn mà và nồng nhiệt hơn. Gel giúp bôi trơn, tăng độ ẩm cho âm đạo, mang lại cảm giác mịn màng, êm ái, thoải mái cho các nàng.", true, "image/2.webp");
        this.addSanPham(sanpham2);
        var sanpham3 = new SanPham(4, 'DUREX Bao Cao Su Durex Invisible Extra Thin/Sensi 3 cái/Hộp', 79000, "Bao Cao Su Durex Invisible Extra Thin/Sensi sở hữu thiết kế rộng rãi, cỡ lớn 56mm nhằm đem lại cảm giác thoải mái mà vẫn đảm bảo ôm khít vừa vặn, an toàn cho sức khỏe cả hai.. Sản phẩm là một lựa chọn tối ưu, mang lại hiệu quả cao trong phòng tránh các bệnh lây lan qua đường tình dục và ngừa thai hiệu quả khi sử dụng đúng cách.", true, "image/1.webp");
        this.addSanPham(sanpham3);
        ;
    }
    getSanPham(idsp) {
        for (let i = 0; i < this.hang.length; i++) {
            const ele = this.hang[i];
            if (ele.id == idsp) {
                return ele;
            }
        }
        //ko co san pham nao trong he thong
        return 0;
    }
    addSanPham(sp) {
        //dung để cho data lấy từ api vào mảng hàng bên trên
        //cach 1
        // this.hang.push(sp);
        //cach 2
        this.hang[this.hang.length] = sp;
        // console.log(this.hang);
    }
    getCacSanPham() {
        return this.hang;
    }
    showSanPham() {
        //xuat ra san pham duoi dang html va dat vao giao dien
        var dsspHTML = "";
        if (this.hang.length !== 0) {
            for (let i = 0; i < this.hang.length; i++) {
                const element = this.hang[i];
                dsspHTML += `<div class="col-sm-4 _1sanphamkhac pt-2" id=${element.id}>
                <div class="card splienquan">
                    <img class="img-fluid" src="${element.anh}" alt="">
                        <div class="card-body">
                            <a href="" class="card-title">${element.ten}</a>
                            <p class="card-text">${element.mota}
                            </p>
                            <p class="card-text to">${element.gia} ₫</p>
                            <div class="${element.tinhtrang == false ? "muangay btn btn-outline-secondary btn-block  disabled" : "muangay btn btn-outline-secondary  btn-block"}"data-idsp="${element.id}">Mua Ngay</div>
                        </div>
                    </div>
                 </div>
`;
            }
            return dsspHTML;
        }
        return "Sản phẩm đang được cập nhật.";
    }
}
