function fizzbuzz(num) {
    if (num % 15 === 0) return 'fizzbuzz';
    if (num % 5 === 0) return 'buzz';
    if (num % 3 === 0) return 'fizz';
    return num;
  }
  
  function generateHtml(fizzResults) {
    return fizzResults.map(result => {
      let fizzClass = '';
      if (typeof result === 'string') fizzClass = result;
        
      return `<div class="fizz-buzz-item ${fizzClass}"><span>${result}</span></div>`;
    });
  }
  function handleSubmit() {
    $('#number-chooser').on('submit', event => {
      event.preventDefault();
      const number = parseInt($('#number-choice').val(), 10);
      const fizzResults = [];
      for (let i = 1; i <= number; i++) {
        fizzResults.push(fizzbuzz(i));
      }
      const html = generateHtml(fizzResults);
      $('.js-results').html(html);
      event.target.reset();
    });
  }
  
  function main() {
    handleSubmit();
  }
  
  $(main);