// Hàm định dạng số thành đơn vị tiền tệ Việt Nam (VND)
export const formatter = (number) => {
  // Sử dụng Intl.NumberFormat để định dạng số
  return new Intl.NumberFormat("vi-VN", {
    // "vi-VN" là mã ngôn ngữ cho tiếng Việt
    style: "currency", // Định dạng kiểu tiền tệ
    currency: "VND", // Loại tiền tệ là VND (đồng Việt Nam)
  }).format(number); // Trả về chuỗi đã định dạng
};
