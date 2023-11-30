
  // Find the <i> element with the specified class
  var expandIcon = document.querySelector('.fa.fa-expand');
  // Check if the element exists
  if (expandIcon) {
    // Programmatically click the element
    expandIcon.click();
  } else {
    console.log("Element not found");
  }
