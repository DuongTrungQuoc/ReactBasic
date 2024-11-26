# Làm tí Reactjs nào

## Cài đặt

1. Tải Node.js
2. npm install -g create-react-app (b1 và b2 chỉ làm 1 lần duy nhất)
3. npx create-react-app ten-du-an
4. cd ten-du-an
5. npm start

## Components (Thành phần)

**Phân chia các UI (giao diện người dùng) thành các phần nhỏ để dễ dàng quản lý và tái sử dụng.**

**VD: header, footer, sidebar,...**

1. Trong folder src tạo một folder mới tên là components
2. Trong folder components tạo một folder mới đặt tên theo đúng ý nghĩa của khối đó. Ví dụ header đặt tên folder là Header.
3. Tạo 1 file mới đặt tên là index.js. Sau đó viết 1 function tên là Header và export default.
4. Import vào file nào mà bạn muốn sử dụng component đó.

## Icon

1. npm i react-icons
2. https://react-icons.github.io/react-icons/icons/fa/

## SCSS

1. npm i sass
2. Tạo 1 file SCSS cùng cấp component
3. Nhúng file SCSS đó vào trong component: import "./TenFile.scss";

## Hooks

Hooks là những cái hàm được viết sẵn trong ReactJS được sử dụng để code các tính năng khác nhau, để sử dụng được các tính năng này ở trong các component ta cần gắn các hooks này vào trong component.


- *useState*
- *useEffect*
- useContext
- *useRef*
- useCallback (tối ưu hệ thống)
- useMemo (tối ưu hệ thống)
- useReducer
- useLayoutEffect (ít dùng)
- useImperativeHandle (ít dùng)
- useDebugValue (ít dùng)

### *useState* giúp cập nhật lại trạng thái của dữ liệu (hay cập nhật lại giá trị của dữ liệu).
Khi dữ liệu thay đổi thì giao diện được cập nhật lại theo dữ liệu mới.

*Ví dụ:* Bóng đèn có 2 status là on/off, Khi tăng số lượng sản phẩm (onChange) thì tổng tiền được cập nhật lại (cập nhật lại quantity -> update total)

*Cú pháp:* const [state, setState] = useState(initialStateValue);

*Set state mới:* setState(newState);
*Trong đó:* 

- state: là tên biến của state.
- setState: là một function dùng để cập nhật state.
- initialStateValue: là giá trị khởi tạo (ban đầu) của state, chỉ dùng 1 lần.
