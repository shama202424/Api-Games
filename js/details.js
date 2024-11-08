import { Ui } from "./ui.js";

export class Details {
   constructor(id) {
      this.ui = new Ui();

      document.getElementById("closedBtn").addEventListener("click", () => {
         document.querySelector(".gameInf").classList.remove("d-none");
         document.querySelector(".about").classList.add("d-none");
      });

      this.getDetails(id);
   }

   getDetails(idGames) {
      
      const loading = document.querySelector(".load");
      loading.classList.remove("d-none");

      const options = {
        method: 'GET',
        headers: {
         'x-rapidapi-key': '0478f99e6amsh852e9611a98fae1p185322jsn4975605760b2',
         'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

      fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}` , options)
         .then((response) => response.json())
         .then((response) => this.ui.displayDetails(response))
         .catch((err) => console.error(err))
         .finally(() => {
            loading.classList.add("d-none");
         });
   }
}