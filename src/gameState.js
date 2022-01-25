const gameState = {
  current: "INIT",
  clock: 1,
  tick() {
    this.clock++;
    console.log('tick', this.clock);
    return this.clock;
  },
  handleUserAction(icon){
    console.log(icon)
  }
};

export default gameState;

