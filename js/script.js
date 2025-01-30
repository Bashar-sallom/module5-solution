// تعريف المتغير $dc
var $dc = {};

// تعريف الدالة loadMenuItems
$dc.loadMenuItems = function (categoryShortName) {
  console.log("Loading menu items for category: " + categoryShortName);
  // هنا يمكنك إضافة الكود لتحميل العناصر من الفئة المحددة
};

// TODO: STEP 0: إنشاء مصفوفة الفئات
var categoryArray = ["Lunch", "Dinner", "Sushi", "Breakfast"]; // أضف جميع الفئات هنا

// TODO: STEP 1: توليد اسم فئة عشوائي
var randomCategoryShortName =
  categoryArray[Math.floor(Math.random() * categoryArray.length)];

// TODO: STEP 2: تعيين القيمة العشوائية للرابط عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function (event) {
  var specialsLink = document.getElementById("specials-link");

  // تأكد من أن العنصر موجود قبل تعيين السمة
  if (specialsLink) {
    specialsLink.setAttribute(
      "onclick",
      "$dc.loadMenuItems('" + randomCategoryShortName + "');"
    );
  } else {
    console.error("Element with ID 'specials-link' not found.");
  }
});
