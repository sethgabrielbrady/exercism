let DnaTranscriber = function(){};

DnaTranscriber.prototype.toRna = function(dna){
  let dnArray = ['G', 'C', 'T', 'A'];
  let rnArray = ['C', 'G', 'A', 'U'];
  let rna = '';

  for (let i = 0; i<=dna.length; i++){
    let errorCheck = 0;
    for (let j = 0; j<=dnArray.length; j++){
      errorCheck ++;
      if(dna.charAt(i) === dnArray[j]){
        console.info('Error check', errorCheck);
        rna = rna.concat(rnArray[j]);
        console.info(rna);
      }
    }
  }
  return rna;
};

module.exports = DnaTranscriber;
