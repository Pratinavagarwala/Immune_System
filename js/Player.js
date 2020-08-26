class Player {
  constructor(){
    this.index = null;
    this.name = null;
    this.password=null;

    this.bloodPressure=25;
    this.oxygenRate= 0;
    this.waterIntake = 0;
    this.pulseRate=0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount =data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
  
    database.ref(playerIndex).set({
      name:this.name,
      password:this.password,
      index:this.index,
      
    });
  }
  updateData(){
    var playerIndex = "players/player" + this.index;
  
    database.ref(playerIndex).update({
      bloodPressure:this.bloodPressure,
      oxygenRate:this.oxygenRate,
      waterIntake:this.waterIntake,
      pulseRate:this.pulseRate
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  getCarsAtEnd(){
    database.ref("CarsAtEnd").on("value",(data)=>{
      this.rank=data.val();
    })
  }
  static updateCarsAtEnd(rank){
    database.ref("/").update({
      CarsAtEnd:rank
    })
    
  }
}
