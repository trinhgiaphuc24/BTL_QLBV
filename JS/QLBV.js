$(function () {
  //Fixed header and gototop
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      $("#gotoTop").show("slow");
    } else {
      $("#gotoTop").hide("slow");
    }
  });
  $("#gotoTop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 400);
  });

  // on off menu nhỏ
  let isMenuOpen = false; // Biến để lưu trạng thái menu (true: mở, false: đóng)
  $("#showId").click(function () {
    if (isMenuOpen) {
      $("#menuMini").hide(400);
    } else {
      $("#menuMini").show(400);
    }
    isMenuOpen = !isMenuOpen;
    // Đảo ngược trạng thái sau mỗi lần click
  });

  // on off menu mobile
  let openmenu;
  $("#openMenu").click(function () {
    $(".left").removeClass(
      "animate__animated animate__fadeInLeft"
    );
    $(".left").addClass("animate__animated animate__faster animate__fadeInLeft");
    $("#openMenu").hide();
    $(".left").show(100);
    $("#closeMenu").show(500);
  });
  let closemenu;
  $("#closeMenu").click(function () {
    $(".left").hide();
    $("#closeMenu").hide();
    $("#openMenu").show(400);
  });

  //confirm logout
  $(".logout").click(function () {
    if (confirm("Bạn chắc chắn muốn đăng xuất")) {
      window.location.href =
        "Login.html";
    } else {
    }
  });

  //All input
  $("#form-check-input").on("click", function () {
    let isChecked = $(this).prop("checked");
    $(".form-check-input").prop("checked", isChecked);
  });
});

//---------------------------JSON--------------------------------

//Room
function Room() {
  fetch("./JSON/Room.json")
    .then((res) => res.json())
    .then((data) => {
      let h = "";
      for (let p of data) {
        h += `
        <div class="room">
        <input type="checkbox" id="${p.idfor}" ${p.checked}>
        <label for="${p.idfor}">
            <i class="fa-solid fa-bed"></i>
            <span class="text-muted">Room ${p.name}</span>
        </label>
    </div>
      `;
      }
      let e = document.getElementById("box-room-bed");
      if (e !== null) {
        e.innerHTML += h;
      }
    });
}

//Departments
function Departments() {
  fetch("./JSON/Departments.json")
    .then((res) => res.json())
    .then((data) => {
      let h = "";
      for (let p of data) {
        h += `
      <div class="box-container-item">
        <div class="box-container-item-photo">
          <img src="${p.src1}" alt="">
          <img src="${p.src2}" class="hover" alt="">
        </div>
        <h3 class="box-container-item-title">
          <a href="${p.href}">${p.name}</a>
        </h3>
      </div>
      `;
      }
      let e = document.getElementById("items-container");
      if (e !== null) {
        e.innerHTML += h;
      }
    });
}

//Doctors
function Doctors() {
  fetch("./JSON/Doctors.json")
    .then((res) => res.json())
    .then((data) => {
      let h = "";
      for (let p of data) {
        h += `
        <div class="list-doctors-item">
        <div class="text-center">
            <div>
                <span>
                    <img class="rounded-circle" src="${p.imgacc}" alt="">
                </span>
                <h6>
                    <a href="${p.hrefacc}" target="_blank">BS. ${p.name}</a>
                </h6>
                <font>
                    <a href="" style="color: red; font-weight: 600;">${p.depart}</a>
                    <a href="" style="color: green; font-weight: 600;"><span>${p.workplace}</span></a>
                    <p style="margin-top: 0;">${p.address}</p>
                </font>
                <ul class="list-unstyled" style="margin-bottom: 0;">
                    <li><a href="javascript:;">
                            <img src="https://preclinic.dreamguystech.com/template/assets/img/icons/login-icon-01.svg"
                                alt="">
                        </a></li>
                    <li><a href="javascript:;">
                            <img src="https://preclinic.dreamguystech.com/template/assets/img/icons/login-icon-02.svg"
                                alt="">
                        </a></li>
                    <li><a href="javascript:;">
                            <img src="https://preclinic.dreamguystech.com/template/assets/img/icons/login-icon-03.svg"
                                alt="">
                        </a></li>
                </ul>
            </div>
        </div>
    </div>
      `;
      }
      let e = document.getElementById("items-doctors");
      if (e !== null) {
        e.innerHTML += h;
      }
    });
}

//List_Apm
function List_Apm() {
  fetch("./JSON/List_Apm.json")
    .then((res) => res.json())
    .then((data) => {
      let h = "";
      for (let p of data) {
        h += `
        <tr>
          <th class="sorting_asc">
              <div class="form-check">
                  <input type="checkbox" class="form-check-input">
              </div>
          </th>
          <th class="sorting_asc" style="width: 280px;">
              <a href=""><img src="${p.imgacc}" alt="">${p.name}</a>
          </th>
          <th class="sorting_asc">${p.depart}</th>
          <th class="sorting_asc">${p.doctor}</th>
          <th class="sorting_asc">${p.phone}</th>
          <th class="sorting_asc">${p.email}</th>
          <th class="sorting_asc">${p.time}</th>
        </tr>
      `;
      }
      let e = document.getElementById("tbody-table-list-1");
      if (e !== null) {
        e.innerHTML += h;
      }
    });
}

//Patients
function Patients() {
  fetch("./JSON/Patients.json")
    .then((res) => res.json())
    .then((data) => {
      let h = "";
      for (let p of data) {
        h += `
        <tr>
          <th class="sorting_asc">
              <div class="form-check">
                  <input type="checkbox" class="form-check-input">
              </div>
          </th>
          <th class="sorting_asc" style="width: 200px;">
              <a href=""><img src="${p.imgacc}" alt="">${p.name}</a>
          </th>
          <th class="sorting_asc">${p.depart}</th>
          <th class="sorting_asc">${p.patient}</th>
          <th class="sorting_asc">${p.doctor}</th>
          <th class="sorting_asc">${p.phone}</th>
          <th class="sorting_asc">${p.email}</th>
          <th class="sorting_asc">${p.time}</th>
        </tr>
      `;
      }
      let e = document.getElementById("tbody-table-list-2");
      if (e !== null) {
        e.innerHTML += h;
      }
    });
}

//Staff
function Staff() {
  fetch("./JSON/Staff.json")
    .then((res) => res.json())
    .then((data) => {
      let h = "";
      for (let p of data) {
        h += `
        <tr>
          <th class="sorting_asc">
              <div class="form-check">
                  <input type="checkbox" class="form-check-input">
              </div>
          </th>
          <th class="sorting_asc" style="width: 280px;">
              <a href=""><img src="${p.imgacc}" alt="">${p.name}</a>
          </th>
          <th class="sorting_asc">${p.depart}</th>
          <th class="sorting_asc">${p.work}</th>
          <th class="sorting_asc">${p.phone}</th>
          <th class="sorting_asc">${p.email}</th>
          <th class="sorting_asc">${p.time}</th>
        </tr>
      `;
      }
      let e = document.getElementById("tbody-table-list-3");
      if (e !== null) {
        e.innerHTML += h;
      }
    });
}

//---------------------------------------------------------------

window.onload = () => {
  Room();
  Departments();
  Doctors();
  List_Apm();
  Patients();
  Staff();
};
