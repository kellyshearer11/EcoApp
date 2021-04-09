import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';  


@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(public alertCtrl: AlertController) { }
  
  ngOnInit() {
  }

  async showAlert() {  
    const alert = await this.alertCtrl.create({  
      header: 'Alert',  
      message: 'Recycling is the process of converting waste materials into new materials and objects. The recyclability of a material depends on its ability to reacquire the properties it had in its virgin or original state.',  
      buttons: ['OK']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result); 
  }

  async showAlert2() {  
    const alert = await this.alertCtrl.create({  
      header: 'Alert',  
      message: 'Meat, poultry and fish, including bones, Leftover food from your plate and dishes,Fruit & vegetables,Tea bags, coffee grinds & paper filters,Breads, cakes & biscuits,Rice, pasta & cereals,Dairy products (cheese, butter, yoghurt),Soups & sauces  Eggs, egg shells & cardboard egg boxes,Food soiled paper napkins & paper towels,Newspaper (when used for wrapping food waste)Out of date food with packaging removed no glass/plastic',  
      buttons: ['OK']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result); 
  }

  async showAlert3() {  
    const alert = await this.alertCtrl.create({  
      header: 'Alert',  
      message: 'Home Composting is a natural process of decomposition that turns garden materials and vegetable food scraps into a dark, crumbly and earthy smelling material called compost. Compost is rich in nutrients and full of life and when used in your garden and on your plants, feeds the ecosystem of the soil and slowly releases nutrients that plants can absorb. Using compost is the foundation of maintaining healthy soil for stimulating all plant growth and creating a beautiful garden.',  
      buttons: ['OK']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result); 
  }

  async showAlert4() {  
    const alert = await this.alertCtrl.create({  
      header: 'Alert',  
      message: 'In June 2017 the Government made a decision to phase out flat fees for household waste collection. Over the period Autumn 2017 to Autumn 2018 all household customers should be moved to pricing plans which includes a charge based on usage when they go to renew their contracts.',  
      buttons: ['OK']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result); 
  }

  async showAlert5() {  
    const alert = await this.alertCtrl.create({  
      header: 'Alert',  
      message: 'No, this was allowed in the past in some areas but as it frequently breaks into smaller shards it then contaminates paper and plastic in the bin making it harder to recycle these other materials. Please collect it separately and drop it off at the local glass bank or Civic Amenity site for recycling. You can find your nearest location on the map.',  
      buttons: ['OK']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result); 
  }

  async showAlert6() {  
    const alert = await this.alertCtrl.create({  
      header: 'Alert',  
      message: 'Aerosols are generally pressurised cans like deodorant, air freshener or bug sprays.These should be brought to your local civic amenity site and if this is not an option please place them in your general waste bin.In Ireland, as per 2nd Schedule category 1 waste of The Waste Management Act, 1996, aerosols fall into the category of hazardous waste and therefore cannot be placed in the household recycle bin.',  
      buttons: ['OK']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result); 
  }

  async showAlert7() {  
    const alert = await this.alertCtrl.create({  
      header: 'Alert',  
      message: 'The bin truck weighs your bin and then tips the contents into the back of the truck where it is compacted with other collected mixed recyclable material. When the truck is full it returns to the depot or the recycling centre where the bin lorry empties the mixed contents onto the reception hall floor and it is inspected to check if it is fit to process.',  
      buttons: ['OK']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result); 
  }

  async showAlert8() {  
    const alert = await this.alertCtrl.create({  
      header: 'Alert',  
      message: 'These items must be treated correctly. Check the map to see if your local civic amenity site collects this waste. Currently, not all civic amenity sites accept household hazardous waste so special one day collections are hosted every year rotating across all the local authorities over a three-year cycle. Keep an eye on local media for these special collection days.',  
      buttons: ['OK']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result); 
  }

  async showAlert9() {  
    const alert = await this.alertCtrl.create({  
      header: 'Alert',  
      message: 'All electrical retailers will take these back these items free of charge from householders, as will civic amenity sites.',  
      buttons: ['OK']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result); 
  }


}
