export function login({ name, email, subject, message }) {
  const delay = (0.7 + Math.random() * 2) * 1000;

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (!!name && !!email && !!subject &&!!message && email === 'voda@gmail.com') {
        resolve();
      } else {
        reject({ message: 'must be an valid email.' });
      }
    }, delay);
  });
}
