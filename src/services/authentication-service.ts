export default class AuthenticationService {

    static isAuthenticated:boolean = false; //booleen qui permet de savoir si le user crt est connect ou nn (pr def, nn car false...)
  
    static login(username: string, password: string): Promise<boolean> { //METHOD login via une promesse L8-12
      const isAuthenticated = (username === 'pikachu' && password === 'pikachu'); //nom  et mot de passe
  
      return new Promise(resolve => {
        setTimeout(() => {
          this.isAuthenticated = isAuthenticated;
          resolve(isAuthenticated);
        }, 1000);
      });
    }
  }

//Un version minimum de l'authentification....