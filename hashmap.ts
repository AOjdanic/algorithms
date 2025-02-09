class Pair {
  key: string;
  value: string;

  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }
}

type Entry = Pair | undefined;

class HashMap {
  private map: Entry[];
  private size: number;
  private capacity: number;

  constructor() {
    this.size = 0;
    this.capacity = 2;
    this.map = [undefined, undefined];
  }

  get(key: string) {
    let index = this.hash(key);

    // we are assuming the open addressing implementation
    while (this.map[index]) {
      if (this.map[index]?.key === key) {
        return this.map[index]?.value;
      }
      index += 1;
      index = index % this.capacity;
    }

    return undefined;
  }

  set(key: string, value: string) {
    let index = this.hash(key);

    while (true) {
      if (!this.map[index]) {
        this.map[index] = new Pair(key, value);
        this.size += 1;
        if (this.size >= Math.floor(this.capacity / 2)) {
          this.rehash();
        }
        return;
      }

      if (this.map[index]?.key === key) {
        this.map[index].value = value;
        return;
      }
    }
  }

  private hash(key: string) {
    let index = 0;

    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i);
    }

    return index % this.capacity;
  }

  private rehash() {
    this.capacity = 2 * this.capacity;
    const newMap: Entry[] = [];

    for (let i = 0; i < this.capacity; i++) newMap.push(undefined);

    const oldMap = this.map;
    this.map = newMap;
    this.size = 0;

    oldMap.forEach((pair) => {
      if (pair) this.set(pair.key, pair.value);
    });
  }
}

const map = new HashMap();

console.log(map);

map.set("First", "Entry");

console.log(map);

map.set("Seconds", "One");

console.log(map);

console.log("First", map.get("First"));
