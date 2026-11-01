// --- بخش مربوط به نوار جستجو ---
let header_right = document.getElementById('header_right');
let calculate_input = document.getElementById('calculate');

header_right.addEventListener('click', () => {
    header_right.style.transition = '0.5s ease'   
    header_right.style.width = "35%";
    calculate_input.focus(); // فوکوس خودکار روی اینپوت
});

let back_to_width_btn = document.getElementById('back_to_width');

back_to_width_btn.addEventListener('click', (e) => { 
    header_right.style.width = '30%';
    e.stopPropagation(); // جلوگیری از تداخل رویدادها
    calculate_input.value = ''; // پاک کردن متن با رشته خالی
});


// --- بخش مربوط به دارک مود (Dark Mode) ---
const darkModeBtn = document.getElementById('dark_mode');
const themeIcon = document.getElementById('moon');

darkModeBtn.addEventListener('click', () => {
    // اضافه/حذف کردن کلاس دارک مود به تگ بادی
    document.body.classList.toggle('dark-mode');

    // تغییر آیکون بر اساس وضعیت تم
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon-o');
        themeIcon.classList.add('fa-sun-o');
        themeIcon.style.color = '#fbbc05'; // رنگ زرد خورشید
        themeIcon.style.transform = 'rotate(360deg)'; // انیمیشن چرخش
    } else {
        themeIcon.classList.remove('fa-sun-o');
        themeIcon.classList.add('fa-moon-o');
        themeIcon.style.color = 'var(--text-main)'; // رنگ مشکی/خاکستری
        themeIcon.style.transform = 'rotate(0deg)'; // بازگشت انیمیشن
    }
});


let menu = document.getElementById('menu');
menu.addEventListener( 'click' , () =>{
    
    let nav = document.getElementById('nav');
    nav.style.transition = '0.5s ease';
    nav.style.position = 'absolute';
    nav.style.left = '-260px';
    let menu = document.getElementById('menu');
    menu.style.transition = '0.5s ease';
    menu.style.transform = 'rotate(0deg)';
})
let menu2 = document.getElementById('menu');
menu2.addEventListener( 'pointerdown' , () =>{
    
    let nav = document.getElementById('nav');
    nav.style.transition = '0.5s ease';
    nav.style.position = 'absolute';
    nav.style.left = '0px';
    let menu = document.getElementById('menu');
    menu.style.transition = '0.5s ease';
    menu.style.transform = 'rotate(90deg)';
 
})

let history_box = document.getElementById('history_box');
history_box.addEventListener('click' , () =>{
    history_box.style.display = 'none';
    let sciece_box = document.getElementById('sciece_box');
    sciece_box.style.display = 'none';
    let underline_between_boxes = document.getElementById('underline_between_boxes');
    underline_between_boxes.style.display = 'none';
    let back_to_menu = document.getElementById('back_to_menu');
    back_to_menu.style.display = 'block'
})

/*nav_plus
const nav = document.getElementById('nav');
const result = document.getElementById('black_border');
result.addEventListener( 'click' , () =>{
    const newBox = document.createElement('div');
    newBox.classList.add('newBox');
    newBox.textContent = 'salam';
    nav.appendChild(newBox)
})
*/

      
      // 1. تابع ساخت باکس (وقتی روی مساوی کلیک می‌شود)
      function createBox(){
          const box = document.createElement("div");
          box.classList.add("box");
          box.textContent = "New History"; // متنی که داخل باکس نمایش داده می‌شود
          
          // اگر بخش تاریخچه در حال حاضر باز است، باکس را همان لحظه نشان بده
          let backBtn = document.getElementById('back_to_menu');
          if (backBtn.style.display === 'block') {
              box.style.display = 'flex';
              box.style.opacity = '1';
          }

          document.getElementById("nav").appendChild(box);
      }

      let history_box2 = document.getElementById('history_box');
      let back_to_menu2 = document.getElementById('back_to_menu');

      // 2. وقتی روی دکمه history کلیک می‌شود
      history_box2.addEventListener('click' , () =>{
          history_box2.style.display = 'none';
          document.getElementById('sciece_box').style.display = 'none';
          document.getElementById('underline_between_boxes').style.display = 'none';
          back_to_menu2.style.display = 'block';

          // پیدا کردن **تمام** باکس‌های ساخته شده و نمایش آن‌ها
          const allBoxes = document.querySelectorAll('.box');
          allBoxes.forEach(box => {
              box.style.display = 'flex';
              // یک تاخیر خیلی کوتاه برای اجرای انیمیشن opacity
              setTimeout(() => {
                  box.style.opacity = '1';
              }, 10);
          });
      });

let back_to_menu = document.getElementById('back_to_menu');
back_to_menu.addEventListener( 'click' , () =>{
    back_to_menu.style.transition = '0.5s ease';
    back_to_menu.style.display = 'none';
    let history_box = document.getElementById('history_box');
    history_box.style.display = 'block';
    history_box.style.display = 'flex';
    let sciece_box = document.getElementById('sciece_box');
    sciece_box.style.display = 'block';
    sciece_box.style.display = 'flex';
    let underline_between_boxes = document.getElementById('underline_between_boxes');
    underline_between_boxes.style.display = 'block';
    
})

