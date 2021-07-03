// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, array) => {
  return {
    specimenNum: number,
    dna: array,

    // mutate 1st dna
    mutate(){
      dnaBefore = this.dna[0]
      this.dna[0] = returnRandBase();
      while (this.dna[0] === dnaBefore){
        this.dna[0] = returnRandBase();
      }
      return this.dna;
    },

    // compare between 2 dna and show how close of 2 dna
    compareDNA(arrayDNA){
      let dna = arrayDNA.dna
      let speciemen = arrayDNA.specimenNum
      let count =0;
      for(let i=0; i<dna.length; i++){
        if(this.dna[i] === dna[i]){
          count++
        }
      }
      let result = count/dna.length
      console.log(`speciemen #${this.specimenNum} and speciemen #${speciemen} have ${result.toFixed(2)*100}% in common`);
    },

    // if dna that have c & g 60 or than that will return true
    willLikelySurvive(arrayDNA){
      let count = 0;
      let dna = arrayDNA.dna
      dna.forEach(element => {
        if(element === 'C' || element === 'G'){
          count++
        }
      });
      let result = count/dna.length
      return result.toFixed(2)*100 >= 60
      
    }
  }
}

// collect willLikelySurvive of dna in to pAequor[]
let pAequor = [];
let i = 1;
let obj_pAequor = pAequorFactory(i,mockUpStrand());
while (pAequor.length < 30){
  obj_pAequor = pAequorFactory(i,mockUpStrand());
  i++;
  if (obj_pAequor.willLikelySurvive) {
    pAequor.push(obj_pAequor)
  }
}  
console.log(pAequor);





