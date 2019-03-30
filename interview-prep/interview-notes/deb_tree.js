class VEBNode {
  constructor(cluster = [], summary = null, u) {
    this.custer = cluster;
    this.summary = summary;

    // let u_sqrt = Math.sqrt(u);
    // this.high = Math.floor(x / u_sqrt)
    // this.low = x % u_sqrt;
    // this.index(x,y) = x*u_sqrt + y;

  }
  member(V, x) {

  }
}

class VEBTree {
  constructor(u) {
    this.min = null;
    this.max = null;
    this.u = this.getHeapSize(u);

    if (u > 2) {
      this.clusters = this.getClusters(this.high(this.u))
      this.summary = null;
    }

  }
  getHeapSize(u) {
    let size = 2;
    while (currSize < u) {
      size ** 2;
    }
    return size;
  }

  getClusters(high) {
    return new Array(high).fill(null);
  }

  high(x) {
    return Math.floor(x / Math.sqrt(this.u))
  }

  low(x) {
    return x % Math.ceil(Math.sqrt(this.u))
  }

  index(x, y) {
    return Math.floor(x * Math.floor(Math.sqrt(this.u)) + y)
  }

  isMember(x) {
    if (this.min == x || this.max == x) {
      return true;
    } else if (this.u <= 2) {
      return false;
    } else {
      let cluser_of_x = this.clusters(this.high(x))
      if (cluser_of_x) return cluser_of_x.isMember(this.low(x))
      return false;
    }
  }

  insertEmtpy(x) {

    this.min = x;
    this.max = x;
  }

  insert(x) {
    if (this.min === null) {
      this.insertEmtpy(x)
    }
    if (x < this.min) {
      let temp = x;
      x = this.min;
      this.min = temp;
    }
    if (this.u > 2) {
      cluser_idx = this.high(x)

      if (this.clusters[cluser_idx] === null) {
        this.clusters[cluser_idx] = new VEBTree(this.high(this.u))
      }
      if (this.summary === null) {
        this.summary = new VEBTree(this.high(this.u))
      }
      if (this.clusters[cluser_idx].min === null) {
        this.clusters[cluser_idx].insertEmtpy(this.low(x))
      }
    }
  }

  getPredecessor(x) {
    if (this.u <= 2) {
      if (x == 1 && this.min === 0) return 0;
      else return null;
    }
    else if (this.max !== null && x > this.max) {
      return this.max;
    } else {
      let high = this.high(x);
      let low = this.low(x)
      let high_cluser = this.clusters[high]
      let min_low = null;
      if (high_cluser !== null) {
        min_low = high_cluser.min;
      }
      if (min_low !== null && low > min_low) {
        let offset = high_cluser.getPredecessor(low)
        if (offset !== null) return this.index(high, offset)
        else {
          offset = 0;
          return this.index(high, offset)
        }
      }
      else {
        let pred_cluster = null;
        if (this.summary !== null) {
          pred_cluster = this.summary.getPredecessor(high)
        }
        if (pred_cluster === null) {
          if (this.min !== null && x > this.min) {
            return this.min
          } else return null;
        } else {
          if (this.clusters[pred_cluster] !== null) {
            offset = this.clusters[pred_cluster].max;
          }
          if (offset !== null) return this.index(pred_cluster, offset)
          else {
            offset = 0;
            return this.index(pred_cluster, offset);
          }
        }
      }
    }

  }

}