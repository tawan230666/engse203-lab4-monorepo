# 🧩 ENGSE203 – Lab 4: Advanced React & Mini E-commerce

> วิชา: ENGSE203 การเขียนโปรแกรมสำหรับวิศวกรซอฟต์แวร์  
> หัวข้อ: Advanced React & State Management + Mini E-commerce  
> ภาคเรียนที่ 1 ปีการศึกษา 2568  
> มทร.ล้านนา เชียงใหม่

---

## 👨‍💻 ผู้พัฒนา

**นาย ธาวัน ทิพคุณ**  
รหัสนักศึกษา 67543210033-6  
สาขาวิศวกรรมซอฟต์แวร์  
คณะวิศวกรรมศาสตร์  
มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา เชียงใหม่  

---

## 🎯 วัตถุประสงค์การเรียนรู้

หลังจากจบ Lab นี้ นักศึกษาจะสามารถ:
- ใช้ **React Hook ขั้นสูง** เช่น `useEffect`, `useContext`, `useCallback`
- สร้าง **Custom Hook** เพื่อจัดการ LocalStorage
- ใช้ **Context API** จัดการสถานะผู้ใช้ (Login/Logout)
- ใช้ **Redux Toolkit** สำหรับ Global State (Cart System)
- ใช้ **React Router v6** ทำ Routing และ Dynamic Route
- ใช้ **React.memo** และ **useCallback** ปรับปรุงประสิทธิภาพการทำงาน
- เข้าใจการเชื่อมโยง REST API จริงผ่าน `axios` กับ FakeStore API

---

## ⚙️ การติดตั้งและรันโปรแกรม

### 🔹 Project 1: Lab 4 (Advanced React)

```bash
cd react-lab-w6
npm install
npm run dev
```
เปิดเบราว์เซอร์ที่ http://localhost:5173

### 🔹 Project 2: Mini-Ecommerce

```bash
cd mini-ecommerce
npm install
npm run dev
```
เปิดเบราว์เซอร์ที่ http://localhost:5174

---

## 🧠 หัวข้อที่ศึกษาใน Lab 4

| หมายเลข | หัวข้อ | แนวคิดหลัก | Hooks / Tools |
|----------|---------|--------------|----------------|
| 1 | Custom Hook | การใช้ useLocalStorage เก็บข้อมูลถาวร | `useState`, `useEffect` |
| 2 | Context API | แชร์ state ข้าม component | `createContext`, `useContext` |
| 3 | Redux Toolkit | Global state management | `createSlice`, `useSelector`, `useDispatch` |
| 4 | React Router | Routing ระหว่างหน้าและ Dynamic URL | `Routes`, `Route`, `useParams` |
| 5 | Performance Optimization | ลดการ re-render ที่ไม่จำเป็น | `React.memo`, `useCallback` |

---

## 🧩 ตัวอย่างผลลัพธ์การทำงาน (Lab 4)

### 1️⃣ Topic 1: Custom Hook (useLocalStorage)
![Custom Hook Screenshot](./img/Screenshot%202025-10-22%20083601.png)

---

### 2️⃣ Topic 2: Context API
![Context API Login](./img/Screenshot%202025-10-22%20083632.png)
![Context API Logout](./img/Screenshot%202025-10-22%20083644.png)

---

### 3️⃣ Topic 3: Redux Toolkit
![Redux Toolkit Screenshot](./img/Screenshot%202025-10-22%20083659.png)

---

### 4️⃣ Topic 4: React Router
![React Router Screenshot](./img/Screenshot%202025-10-22%20083739.png)

---

### 5️⃣ Topic 5: Performance Optimization
![Performance Screenshot](./img/Screenshot%202025-10-22%20083747.png)

---

## 🛍️ Mini Project – Mini E-commerce

### 🔹 ภาพรวมระบบ
โปรเจกต์นี้เป็นตัวอย่างเว็บขายสินค้าออนไลน์ขนาดเล็ก  
ที่ใช้ **React + Redux Toolkit + React Router + TailwindCSS**  
พร้อมเชื่อมต่อ API จริงจาก [https://fakestoreapi.com](https://fakestoreapi.com)

---

### 📦 หน้าหลัก (Home Page)
![Home Page](./img/Screenshot%202025-10-22%20083955.png)

---

### 🛒 หน้า Products
ดึงข้อมูลสินค้าจาก API จริง พร้อมปุ่ม Add to Cart  
![Products Page](./img/Screenshot%202025-10-22%20083949.png)

---

### 🧺 หน้า Cart
แสดงสินค้าที่เลือก + ปรับจำนวน + ลบออกได้ พร้อมคำนวณราคารวม
![Cart Page](./img/Screenshot%202025-10-22%20084009.png)

---

## 🧱 โครงสร้างโปรเจกต์ Mini E-commerce

```
src/
  ├── components/
  │   ├── Layout.jsx
  │   └── ProductCard.jsx
  ├── features/
  │   └── cart/
  │       └── cartSlice.js
  ├── pages/
  │   ├── HomePage.jsx
  │   ├── ProductListPage.jsx
  │   ├── ProductDetailPage.jsx
  │   └── CartPage.jsx
  ├── store/
  │   └── store.js
  ├── App.jsx
  └── main.jsx
```

---

## 💡 แนวคิดสำคัญใน Mini-Ecommerce

| หมวด | รายละเอียด |
|------|-------------|
| **API Integration** | ดึงข้อมูลสินค้าจริงจาก FakeStore API |
| **Redux Toolkit** | ใช้ state กลางเก็บสินค้าในตะกร้า |
| **Dynamic Route** | ใช้ `/products/:id` เพื่อแสดงรายละเอียดสินค้า |
| **Responsive Design** | ใช้ Tailwind CSS ให้หน้าเว็บสวยทุกขนาดหน้าจอ |
| **Performance** | ใช้ `React.memo` ใน Card เพื่อป้องกัน re-render ที่ไม่จำเป็น |

---

> © 2025 ENGSE203 — Developed with ❤️ by Tawan Tippkun
