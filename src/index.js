class Sorter {
    constructor() {
        this.data = [];
        this.condition = false;
    }

    add(element) {
        this.data.push(element);
    }

    at(index) {
        return this.data[index];
    }

    get length() {
        return this.data.length;
    }

    toArray() {
        return this.data;
    }

    sort(indices) {
        indices.sort();
        let arr = [];
        for (let i = 0; i < indices.length; i++) {
            arr.push(this.data[indices[i]]);
        }
        if (this.condition == true) {
            arr.sort(this.compareFunction);
        } else {
            arr.sort((a, b) => {
                return a - b;
            });
        }
        for (let i = 0; i < indices.length; i++) {
            this.data[indices[i]] = arr[i];
        }
    }

    setComparator(compareFunction) {
        this.compareFunction = compareFunction;
        this.condition = true;
    }
}

module.exports = Sorter;
