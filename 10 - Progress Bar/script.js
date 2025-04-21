//10. Show a progress bar which shows how much page is reload.

document.addEventListener('scroll', function() {
   // Calculate the scroll progress
   const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
   const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   const scrolled = (scrollTop / scrollHeight) * 100;
 
   // Update the width of the progress bar
   document.getElementById('progressBar').style.width = scrolled + '%';
 });
 
