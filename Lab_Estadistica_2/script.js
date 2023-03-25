const nav = document.querySelector('nav');
const navLinks = nav.querySelectorAll('a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const currentSection = sections.length - [...sections].reverse().findIndex(section => window.scrollY >= section.offsetTop - nav.offsetHeight - 10) - 1;
  navLinks.forEach(link => link.classList.remove('active'));
  navLinks[currentSection].classList.add('active');
});

navLinks.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    sections[index].scrollIntoView({behavior: "smooth"});
  });
});
