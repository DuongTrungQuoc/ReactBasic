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

- useState
- useEffect
- useContext
- useRef
- useCallback
- useMemo
- useReducer
- useLayoutEffect (ít dùng)
- useImperativeHandle (ít dùng)
- useDebugValue (ít dùng)

