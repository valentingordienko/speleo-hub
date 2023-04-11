export function register(path: string) {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(path)
    .then((reg) => {
      // регистрация сработала
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch((error) => {
      // регистрация прошла неудачно
      console.log('Registration failed with ' + error);
    });
  }
}

export default {
  register
}