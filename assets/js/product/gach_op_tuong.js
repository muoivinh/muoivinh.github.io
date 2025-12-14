const gach = [
{         id: 'T.60.30.0001',         size: '60 x 30cm',         manufacturer: 'Prime',     },
{         id: 'T.60.30.0002',         size: '60 x 30cm',         manufacturer: 'Prime',     },
{         id: 'T.60.30.0003',         size: '60 x 30cm',         manufacturer: 'Prime',     },
{         id: 'T.60.30.0004',         size: '60 x 30cm',         manufacturer: 'Prime',     },
{         id: 'T.60.30.0005',         size: '60 x 30cm',         manufacturer: 'Prime',     },
{         id: 'T.60.30.0006',         size: '60 x 30cm',         manufacturer: 'Prime',     },
{         id: 'T.60.30.0007',         size: '60 x 30cm',         manufacturer: 'Prime',     },
{         id: 'T.60.30.0008',         size: '60 x 30cm',         manufacturer: 'Prime',     },
{         id: 'T.60.30.0009',         size: '60 x 30cm',         manufacturer: 'Prime',     },
{         id: 'T.60.30.0010',         size: '60 x 30cm',         manufacturer: 'Prime',     },
{         id: 'T.60.30.0011',         size: '60 x 30cm',         manufacturer: 'Prime',     },
{         id: 'T.60.30.0012',         size: '60 x 30cm',         manufacturer: 'Prime',     },
{         id: 'T.60.30.0013',         size: '60 x 30cm',         manufacturer: 'Prime',     },
{         id: 'T.60.30.0014',         size: '60 x 30cm',         manufacturer: 'Prime',     },
{         id: 'T.60.30.0015',         size: '60 x 30cm',         manufacturer: 'Prime',     },
{         id: 'T.60.30.0016',         size: '60 x 30cm',         manufacturer: 'Prime',     },
{         id: 'T.60.30.0017',         size: '60 x 30cm',         manufacturer: 'Prime',     },
{         id: 'T.60.30.0018',         size: '60 x 30cm',         manufacturer: 'Prime',     },
{         id: 'T.60.30.0019',         size: '60 x 30cm',         manufacturer: 'Prime',     },
{         id: 'T.60.30.0020',         size: '60 x 30cm',         manufacturer: 'Prime',     },



];
const gallery = document.getElementById("gallery");
const src = "assets/img/product/normal-quality/T/"

function showData(arr) {
    gallery.innerHTML = ""

    if (arr.length === 0) {
    } else {

        arr.forEach(val => { gallery.insertAdjacentHTML('beforeend', "<div class='col-auto'> <div class='gallery-box mv-border mv-item'> <div class='gallery-img global-img mv-item'><img class='lazyload' data-src='" + src + val.id + ".jpg" + "'><span style='position: absolute; left: 5%; bottom: 1%; color: black; font-size: 70%;'>" + val.id + "</span><a href='" + src + val.id + ".jpg" + "' class='icon-btn popup-image'><i class='fal fa-magnifying-glass-plus'></i></a></div></div></div>"); });
    }
}

function searchProduct() {
    const filtered = gach.filter(product => {
        if (product.id === "id") {
            if (product.size === "") {
                if (product.manufacturer === "") {
                    return true; // keep product size = 
                } else {
                    return false; // skip expensive electronics
                }
            } else {
                return false; // skip expensive electronics
            }
        }
    });


}

const form = document.getElementById('filterForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    let txt_ma = document.getElementById('txt_ma').value;
    let sl_kichthuoc = document.getElementById('sl_kichthuoc').value;
    let sl_thuonghieu = document.getElementById('sl_thuonghieu').value;


    let filtered = gach.filter(product => {
        if (txt_ma && product.id !== txt_ma) {
            return false;
        }
        if (sl_kichthuoc && product.size !== sl_kichthuoc) {
            return false;
        }
        if (sl_thuonghieu && product.manufacturer !== sl_thuonghieu) {
            return false;
        }
        return true;
    });

    // Clear and show results
    showData(filtered);
});

const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', function () {
    // Reset form inputs
    document.getElementById('txt_ma').value = "";
    document.getElementById('sl_kichthuoc').value = "";
    document.getElementById('sl_thuonghieu').value = "";

    // Hiển thị lại toàn bộ sản phẩm
    showData(gach);
});

showData(gach);