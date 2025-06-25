function zipList(list1: (string | number)[], list2: (string | number)[]): (string | number)[] {
  const result: (string | number)[] = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }
  return result;
}

function zipListTheFunctionalWay(
  list1: (string | number)[],
  list2: (string | number)[],
): (string | number)[] {
  const result: (string | number)[] = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }
  return result;
}

function displayOutput(output: (string | number)[], id: string): void {
  const container = document.getElementById(id);
  if (container) {
    container.textContent = JSON.stringify(output);
  }
}

// ✅ Force TypeScript to emit code by adding runtime logic
window.onload = () => {
  const result1 = zipList(['a', 'b', 'c'], [1, 2, 3]);
  const result2 = zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]);

  console.log(result1);
  console.log(result2);

  displayOutput(result1, 'output1');
  displayOutput(result2, 'output2');
};
