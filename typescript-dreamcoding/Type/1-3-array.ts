{
    // Array
    const fruits: string[] = ['🍅', '🍌'];
    const scroes: Array<number> = [1, 3, 4];
    function printArray(fruits: readonly string[]) {}
  
    // Tuple -> interface, type alias, class
    let student: [string, number];
    // 인덱스 사용하는 방법은 추천하지 않음!!!
    student = ['name', 123];
    student[0]; // name
    student[1]; // 123
    
    const [name, age] = student;
  }
  