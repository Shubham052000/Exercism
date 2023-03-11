//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (rnaSeq) => {
  let returnedRnaComp = '';
  if(rnaSeq.length < 1){
    return returnedRnaComp
  }
  else {
   for(let e of rnaSeq) {
     switch (e){
       case 'G': returnedRnaComp+='C'
         break;
       case 'C': returnedRnaComp+='G'
         break;
       case 'T': returnedRnaComp+='A'
         break;
       case 'A': returnedRnaComp+='U'
         break;
     }
   }
    return returnedRnaComp
  }
};
