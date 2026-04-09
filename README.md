# 🛍️ E-Commerce Product App

A **React Native** e-commerce-style app built with **TypeScript** and **Redux Toolkit**. The app demonstrates **product listing, product detail, search, pagination, infinite scroll, and error handling** using core React Native components.

This project is designed as a **production-ready fresher assignment** to showcase clean, scalable code and proper state management.

---

## 📱 App Features

### Screens

1. **Home / Product List Screen**
   - Displays a large list of products from a public API.
   - Infinite scroll implemented with `skip` and `limit` pagination.
   - Loading indicators and error messages are shown.
2. **Product Detail Screen**
   - Displays detailed information of the selected product.
   - Type-safe navigation ensures correct data passing.
   - Handles missing or incomplete data gracefully.
3. **Search Screen**
   - Filter products by title or tags.
   - Works seamlessly with pagination.
   - Displays “No results found” for empty queries.

### State Management

- **Redux Toolkit** (`createSlice`, `createAsyncThunk`) manages:
  - Product data
  - Loading & error states
  - Pagination (`skip` / `limit`)
  - Search filters
- Deduplication ensures no repeated products during pagination.
- Supports resetting state when performing a new search.

### Error Handling

- Displays API failure messages.
- Retry option available for network errors.
- Graceful fallback for incomplete product data.

---

## ⚙️ Tech Stack

- **React Native CLI** (no Expo)
- **TypeScript**
- **Redux Toolkit** for state management
- **Axios** for API requests
- **React Navigation** (`@react-navigation/native-stack`)
- **Core React Native components only**

---

## 📂 Project Structure

src/
├─ api/ # Axios API functions
├─ components/ # Reusable UI components (ProductCard, SearchBar)
├─ hooks/ # Custom hooks (useProducts, useSearch)
├─ navigation/ # Stack navigator
├─ screens/ # Home, ProductDetail, Search
├─ store/ # Redux slices and store
├─ utils/ # Helper functions (deduplication, formatting)
└─ const/ # Constants (colors, spacing, text styles)

---

## 🚀 How to Run

1. **Clone repository**

```bash
git clone https://github.com/yourusername/ecommerce-app.git
cd ecommerce-app

npm install
# or
yarn install

npx react-native run-android
```
