window.addEventListener("load", (event) => {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const image1 = document.getElementById("image1");
    const slideshowSlide = document.querySelector(".slideshow-container");
    const slide = document.querySelectorAll(".slideandtext-container");
  
    let counter = 0;
    const size = image1.clientWidth;
  
    //button listener
  
    nextBtn.addEventListener("click", () => {
      if (counter >= slide.length - 3) {
        return;
      }
      slideshowSlide.style.transition = "transform 0.4s ease-in-out";
      counter++;
      slideshowSlide.style.transform = "translateX(" + -size * counter + "px)";
      console.log(counter);
    });
  
    prevBtn.addEventListener("click", () => {
      if (counter <= 0) {
        return;
      }
      slideshowSlide.style.transition = "transform 0.4s ease-in-out";
      counter--;
      slideshowSlide.style.transform = "translateX(" + -size * counter + "px)";
      console.log(counter);
    });

    // chuyenvien nhanvien part

    const nhanvientext = document.getElementById('nhanvientext');
    const chuyenvientext = document.getElementById('chuyenvientext');
    const nhanviencontent = document.getElementById('nhanviencontent');
    const chuyenviencontent = document.getElementById('chuyenviencontent');

    function hideandshowtextnhanvien() {
      if (nhanviencontent.classList.contains("hidetext")) {
        nhanviencontent.classList.remove("hidetext");
      } else {
        nhanviencontent.classList.add("hidetext");
      }
    }

    nhanvientext.addEventListener('click', hideandshowtextnhanvien);

    function hideandshowtextchuyenvien() {
      if (chuyenviencontent.classList.contains("hidetext")) {
        chuyenviencontent.classList.remove("hidetext");
      } else {
        chuyenviencontent.classList.add("hidetext");
      }
    }

    chuyenvientext.addEventListener('click', hideandshowtextchuyenvien);

    //tes

    const tesName = document.querySelector('#tes-name');
    const tesImg = document.querySelector('#tes-img');
    const tesQuote = document.querySelector('#tes-quote');
    const tesPrevBtn = document.getElementById('tesprev');
    const tesNextBtn = document.getElementById('tesnext')

    let tesIndex = 0;
    let tesMembers = [];

    function Member(img, name, quote) {
      this.img = img
      this.name = name
      this.quote = quote
    }

    function createMember(img, name, quote) {
      let fullImg = `/images/tes${img}.png`;
      let member = new Member(fullImg, name, quote);

      tesMembers.push(member);
    }

    createMember(0, 'Nguyen Xa Ri', '"Khi mình chăm sóc phục vụ tốt thì KH sẽ giới thiệu thêm cho Mình nhiều KH mới. Mình nghĩ không có thành quả nào mà không đánh đổi bằng sự cố gắng và suy nghĩ tích cực"')
    createMember(1, 'Trần Mạnh Hùng', '"Vestibulum eu ultricies felis. Suspendisse dapibus neque nec eleifend pharetra. Fusce imperdiet dignissim ante, et tristique augue consectetur id. Vivamus."')
    createMember(2, 'Phan Trần Phương Uyên', '"Cras ac purus tortor. Phasellus ornare commodo nibh, fermentum euismod dolor gravida id. Nam lobortis tellus vel lectus finibus elementum."')
    createMember(3, 'Trịnh Thị Nhung', '"Sed vehicula at metus at posuere. Sed vestibulum tortor urna. Mauris ultricies nisl at sem suscipit aliquam. Etiam eros orci."')
    createMember(4, 'Tiến Định', '"Praesent at convallis turpis. Proin orci neque, vehicula nec auctor vel, semper a purus. Sed at eleifend nisi, interdum euismod."')
    createMember(5, 'Đức Hưởng', '"Suspendisse semper mi ipsum, et efficitur nunc iaculis id. Praesent augue sem, varius at enim ac, gravida venenatis risus. Sed."')
    createMember(6, 'Đồng Tiến Mạnh', '"Suspendisse semper mi ipsum, et efficitur nunc iaculis id. Praesent augue sem, varius at enim ac, gravida venenatis risus. Sed."')
    createMember(7, 'Đoàn Thị Hòa', '"Suspendisse semper mi ipsum, et efficitur nunc iaculis id. Praesent augue sem, varius at enim ac, gravida venenatis risus. Sed."')
    createMember(8, 'Lương Minh Đức', '"Suspendisse semper mi ipsum, et efficitur nunc iaculis id. Praesent augue sem, varius at enim ac, gravida venenatis risus. Sed."')
    createMember(9, 'Ngô Minh Quang', '"Suspendisse semper mi ipsum, et efficitur nunc iaculis id. Praesent augue sem, varius at enim ac, gravida venenatis risus. Sed."')

    tesPrevBtn.addEventListener('click', function() {
      if (tesIndex == 0) {
        tesIndex = tesMembers.length;
      }
      tesIndex--;
      tesImg.src = tesMembers[tesIndex].img
      tesName.textContent = tesMembers[tesIndex].name
      tesQuote.textContent = tesMembers[tesIndex].quote
    });

    tesNextBtn.addEventListener('click', function() {
      if (tesIndex == tesMembers.length) {
        tesIndex = 0;
      }
      tesIndex++;
      tesImg.src = tesMembers[tesIndex].img
      tesName.textContent = tesMembers[tesIndex].name
      tesQuote.textContent = tesMembers[tesIndex].quote
    });
  });