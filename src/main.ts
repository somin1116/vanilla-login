import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <form class="login-container">
    <div class="login-title">로그인</div>
    <label class="login-label" for="userId">아이디</label>
    <input class="login-input" type="text" id="userId" name="userId" placeholder="아이디를 입력하세요" required>
    <label class="login-label" for="password">비밀번호</label>
    <input class="login-input" type="password" id="password" name="password" placeholder="비밀번호를 입력하세요" required>
    <button class="login-button" type="submit">로그인</button>
  </form>
`

const loginForm = document.querySelector<HTMLFormElement>('.login-container')
loginForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const userId = (document.getElementById('userId') as HTMLInputElement).value;
  const password = (document.getElementById('password') as HTMLInputElement).value;
  alert(`아이디: ${userId}\n비밀번호: ${password}`);
});
