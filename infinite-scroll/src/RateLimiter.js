class TokenLimitter {
  constructor(token_limit = 3, refresh_rate = 150) {
    this.tokens = token_limit;
    this.token_limit = token_limit; // per 150 ms
    this.lastRefill = new Date();
    this.refresh_rate = refresh_rate;
  }
  addRequest(request) {
    this.refillTokens(new Date())
    if (this.tokens > 0) {
      request.call(null);
      this.tokens--;
    } else {
      console.log('rate limited')
      return;
    }
  }
  refillTokens(date) {
    let diffTime = new Date().getTime() - date.getTime();
    let numTokensToAdd = Math.floor(diffTime / this.refresh_rate);
    numTokensToAdd = Math.min(numTokensToAdd, this.token_limit)
    if (numTokensToAdd > 0) {
      this.tokens += numTokensToAdd;
    }
    return;
  }
  reset() {
    this.tokens = this.token_limit;
  }
}
