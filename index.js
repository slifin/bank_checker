const format_money = (s) => s.replace( /[^\d\.]*/g, '');
const money_avaliable = document.querySelector('.available-balance').textContent;
const balance = document.querySelector('.balance span').textContent;


alert('Money Avaliable: '+money_avaliable+ ' balance: '+balance);
