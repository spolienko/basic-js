module.exports = class DepthCalculator {
  calculateDepth(arr, counter) {
      if(!counter)
          counter = 1;
      let result = counter;
      for (let i = 0; i < arr.length; i++) {
          if (Array.isArray(arr[i])) {
              let helper = this.calculateDepth(arr[i], counter + 1);
              if (helper > result)
                  result = helper;
          }
      }
      return result;
  }
};