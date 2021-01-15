class MyArray {
  constructor(...args) {
    this.length = 0;
    for (const item of args) {
      this.push(item);
    }
  }

  static isMyArray = function (obj) {
    return obj instanceof MyArray;
  };

  push() {
    for (let index = 0; index < arguments.length; index++) {
      this[this.length] = arguments[index];
      ++this.length;
    }
    return this.length;
  }

  pop = function pop() {
    if (this.length <= 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  };

  unshift() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.i - this.length] = arguments[i];

      ++this.length;
    }
    return this.length;
  }

  forEach(cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i, this);
    }
  };

  map(cb) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      result.push(cb(this[i], i, this));
    }
    return result;
  }

  reverse() {
    const copy = new MyArray();
    for (let i = 0; i < this.length; i++) {
      copy.push(this[i]);
    }
    for (let i = 0; i < this.length; i++) {
      this[i] = copy.pop();
    }
  };

  concat(array) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      result.push(this[i]);
    }
    for (let i = 0; i < array.length; i++) {
      result.push(array[i]);
    }
    return result;
  }

  some(checkFunction) {
    for (let i = 0; i < this.length; i++) {
      if (checkFunction(this[i], i, this)) {
        return true;
      }
    }
    return false;
  };

  every(checkFunction) {
    for (let i = 0; i < this.length; i++) {
      if (!checkFunction(this[i], i, this)) {
        return false;
      }
    }
    return true;
  };

  filter(checkFunction) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (checkFunction(this[i], i, this)) {
        result.push(this[i])
      }
    }
    return result;
  };

  flat(depth = 1) {
    let result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (MyArray.isMyArray(this[i] && depth > 0){
        result = result.concat(this[i].flat(depth - 1));
      } else if (this[i] !== undefined) {
        result.push(this[i]);
      }
    }
    return result;
  };

}