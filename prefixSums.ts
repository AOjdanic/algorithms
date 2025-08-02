class PrefixSum {
  #prefixSum: number[] = [];

  constructor(values: number[]) {
    this.#prefixSum = [];

    let total = 0;

    values.forEach((value: number) => {
      total += value;
      this.#prefixSum.push(total);
    });
  }

  getSum(left: number, right: number) {
    const rightSum = this.#prefixSum[right];
    const leftSum = left > 0 ? this.#prefixSum[left - 1] : 0;

    return rightSum - leftSum;
  }
}

const ps = new PrefixSum([2, -1, 3, -3, 4]);

console.log(ps.getSum(0, 3));
