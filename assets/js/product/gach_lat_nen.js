const gach_lat_nen = [
    {
        id: 'N.60.60.0001',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0002',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0003',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0004',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0005',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0006',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0007',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0008',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0009',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0010',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0011',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0012',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0013',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0014',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0015',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0016',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0017',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0018',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0019',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0020',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0021',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0022',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0023',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0024',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0025',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0026',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0027',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0028',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0029',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0030',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0031',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0032',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0033',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0034',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0035',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0036',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0037',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },
    {
        id: 'N.60.60.0038',
        size: '60 x 60cm',
        manufacturer: 'Prime',
    },

];
const gallery = document.getElementById("gallery");
const src = "assets/img/product/normal-quality/"

function showData(arr) {
    gallery.innerHTML = ""

    if (arr.length === 0) {
    } else {

        arr.forEach(val => { gallery.insertAdjacentHTML('beforeend', "<div class='col-auto'> <div class='gallery-box mv-border mv-item'> <div class='gallery-img global-img mv-item'><img class='lazyload' data-src='" + src + val.id + ".jpg" + "'><span style='position: absolute; left: 5%; bottom: 1%; color: black; font-size: 70%;'>" + val.id + "</span><a href='" + src + val.id + ".jpg" + "' class='icon-btn popup-image'><i class='fal fa-magnifying-glass-plus'></i></a></div></div></div>"); });
    }
}

function searchProduct() {
    const filtered = gach_lat_nen.filter(product => {
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


    let filtered = gach_lat_nen.filter(product => {
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
    showData(gach_lat_nen);
});

showData(gach_lat_nen);