enum COND_OPERATORS {
  EQUALS = "==",
  NOT_EQUALS = "!=",
  GREATER_THAN = ">",
  LESS_THAN = "<",
  GREATER_THAN_OR_EQUAL = ">=",
  LESS_THAN_OR_EQUAL = "<=",
}

interface Student {
  name: string;
  score: number;
}

const students: Student[] = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 90 },
  { name: "Charlie", score: 78 },
];

function filterStudentsByScore(
  students: Student[],
  cond_operator: COND_OPERATORS,
  cond_value: number,
): Student[] {
  return students.filter((student) => {
    switch (cond_operator) {
      case COND_OPERATORS.EQUALS:
        return student.score === cond_value;
      case COND_OPERATORS.NOT_EQUALS:
        return student.score !== cond_value;
      case COND_OPERATORS.GREATER_THAN:
        return student.score > cond_value;
      case COND_OPERATORS.LESS_THAN:
        return student.score < cond_value;
      case COND_OPERATORS.GREATER_THAN_OR_EQUAL:
        return student.score >= cond_value;
      case COND_OPERATORS.LESS_THAN_OR_EQUAL:
        return student.score <= cond_value;
      default:
        return false;
    }
  });
}

async function main() {
  try {
    const filteredStudents = filterStudentsByScore(
      students,
      COND_OPERATORS.GREATER_THAN,
      80,
    );
    console.log("Students with scores greater than 80:", filteredStudents);
  } catch (error) {
    console.error("Error filtering students:", error);
  }
}

main();
