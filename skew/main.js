const root = document.documentElement;

document.addEventListener('DOMContentLoaded', () => {
  let dataTheme = localStorage.getItem('skew-mode');

  // Set a default value if skew-mode is not present in localStorage
  if (!dataTheme) {
    dataTheme = 'light'; // Set your desired default value here
    localStorage.setItem('skew-mode', dataTheme);
  }

  root.setAttribute('data-theme', dataTheme);

  document.querySelector('.mode').addEventListener('click', () => {
    dataTheme = root.getAttribute('data-theme');
    const newTheme = dataTheme === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('skew-mode', newTheme);
    console.log(newTheme);
  });
});
