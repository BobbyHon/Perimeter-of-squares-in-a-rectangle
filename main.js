function perimeter(n) {
    let nums = [0, 1]
    while (n > nums.length - 2){
      nums.push(nums[nums.length - 1] + nums[nums.length - 2])
    }
    return 4 * nums.reduce((sum, value) => sum + value, 0)
  }