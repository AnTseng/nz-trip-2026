// Firebase 配置和初始化
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import { getDatabase, ref, set, get, onValue, update, remove } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js';

// Firebase 配置
const firebaseConfig = {
  apiKey: "AIzaSyD33jw3ostNvT43aNAUoClXCxmdW8nzimI",
  authDomain: "nz-trip-2026.firebaseapp.com",
  databaseURL: "https://nz-trip-2026-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nz-trip-2026",
  storageBucket: "nz-trip-2026.firebasestorage.app",
  messagingSenderId: "494559807737",
  appId: "1:494559807737:web:036f08e74cbd235be3fa28"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// 匯出給其他模組使用
export { auth, database, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, ref, set, get, onValue, update, remove };
