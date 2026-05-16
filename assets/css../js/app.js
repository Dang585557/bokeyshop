// Heritage Gold App JavaScript

document.addEventListener('DOMContentLoaded', () => {
  
    console.log('Heritage Gold App Loaded');
  

  
    // Example: Simple product search or filter logic
  
    const searchInput = document.getElementById('product-search');
  
    if (searchInput) {
      
        searchInput.addEventListener('input', (e) => {
          
            const query = e.target.value.toLowerCase();
          
            console.log('Searching for:', query);
          
            // Add filtering logic here
          
        });
      
    }
  
});











