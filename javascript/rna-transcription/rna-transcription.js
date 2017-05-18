 let DnaTranscriber = function(){};

 DnaTranscriber.prototype.toRna = function(dna){
   let dnArray = ['G', 'C', 'T', 'A'];
   let rnArray = ['C', 'G', 'A', 'U'];
   let rna = '';

   for (let i = 0; i<=dna.length; i++){//loop through the string
     for (let j = 0; j<=dnArray.length; j++){ //loop through the dnArray
       if(dna.charAt(i) === dnArray[j]){ //check the string char against dnArray index
         rna = rna.concat(rnArray[j]);
         console.info(rna);
       }
     }
   }
   return rna;
};

module.exports = DnaTranscriber;
