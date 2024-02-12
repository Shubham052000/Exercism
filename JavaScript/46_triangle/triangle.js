//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    [this.a, this.b, this.c] = sides;
  }

  isTriangle(){
    if(this.a && this.b && this.c){
      if(this.a + this.b >= this.c && this.b + this.c >= this.a && this.a + this.c >= this.b){
      return true;
    }
    }
    return false;
  }

  get isEquilateral() {
    if(this.isTriangle()){
      if(this.a === this.b && this.b === this.c){
        return true;
      }
    }
    return false;
  }

  get isIsosceles() {
    if(this.isTriangle()){
      if(this.a === this.b || this.a === this.c || this.b === this.c){
        return true;
      }
    }
    return false;
  }

  get isScalene() {
    if(this.isTriangle()){
      if(this.a !== this.b && this.a !== this.c && this.b !== this.c){
        return true;
      }
    }
    return false;
  }
}
