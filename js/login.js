class Login{
    constructor(){
        this.name=createInput("Enter_Username");
        this.password=createInput("","Password");
        this.ok=createButton("Enter");   
        
    }

    display(){
      this.name.position(window.innerWidth/2,200);
      this.password.position(window.innerWidth/2,250);
      this.ok.position(window.innerWidth/2+50,300);
      var flag2; 
    
      this.ok.mousePressed(()=>{
   
        if(form.flag===1){
        flag2=0;
          for(var p in allPlayers){
            
            if(this.name.value()===allPlayers[p].name && this.password.value()===allPlayers[p].password){
              console.log(this.password.value());
              console.log(allPlayers[p].password);
              player.name=this.name.value();
              player.password=this.password.value();
              player.index=allPlayers[p].index;
              player.bloodPressure=allPlayers[p].bloodPressure;
              player.oxygenRate=allPlayers[p].oxygenRate;
              player.waterIntake=allPlayers[p].waterIntake;
              player.pulseRate=allPlayers[p].pulseRate;
              userData=new UserData();

              userData.display();
              flag2=1;
              this.name.hide();
              this.password.hide();
              this.ok.hide();
            }
            
          }
        if(flag2===0){
          alert("Invalid username password");
          this.name.show();
          this.password.show();
          this.ok.show();
          flag2=1;
        }

        //form=new Form();
        //form.display();
      
      }  else if(form.flag===2){

          player.name=this.name.value();
          player.password=this.password.value();
          playerCount++;
          player.index=playerCount;
          player.updateCount(playerCount);
          player.update();
          player.updateData();
          this.name.hide();
          this.password.hide();
          this.ok.hide();
          userData=new UserData();
          userData.display();

      }
 
})

}  
}