

let Hamming = function(){};

Hamming.prototype.compute = function(dna1, dna2){
  let sum = 0;

  if(dna1.length !== dna2.length){
    throw new Error('DNA strands must be of equal length.');
  }

  for (let i = 0; i <= dna1.length; i++){
    if( dna1.charAt(i) !== dna2.charAt(i) ){
      sum++;
    }
  }
  return sum;
};

module.exports = Hamming;
