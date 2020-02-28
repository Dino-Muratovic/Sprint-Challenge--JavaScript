// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker. 
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker. 
// Test your work by logging out your volume and surface area.

class CuboidMaker{
    constructor(attr){
      this.length = attr.length, 
      this.width = attr.width,
      this.height = attr.height
}//methods go here

volume(){
    return this.length * this.width * this.height;
  }
  
  surfaceArea(){
    return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height))
  }

}//CLASS CLOSES HERE  


const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5    
  })  
  

//STRETCH TASK STARTS HERE

class CubeMaker extends CuboidMaker {
    constructor (attr){
      super(attr)
        
      } // constructor closes here

      volumeOfTheCube() {
        return this.height * this.width * this.length;
      }
      
      surfaceAreaOfTheCube() {
        return this.length * this.width * 6; 
       
      }
    }// this closes CubeMaker class
  
  const cube = new CubeMaker({
    length: 4,
    width: 5,
    height: 5    
  });
  
  console.log(cube.volumeOfTheCube()); // prints 100
  console.log(cube.surfaceAreaOfTheCube()); // prints 120

 
