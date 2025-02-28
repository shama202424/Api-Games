import { Details } from "./details.js";
import { Ui } from "./ui.js";

export class Games {
   constructor() {
      this.getGames("mmorpg");

      document.querySelectorAll(".menu a").forEach((link) => {
         link.addEventListener("click", (e) => {
            document.querySelector(".menu .active").classList.remove("active");
            e.target.classList.add("active");
            this.getGames(e.target.dataset.category);
         });
      });

      this.ui = new Ui();
   }

   async getGames(category) {
      const loading = document.querySelector(".load");
      loading.classList.remove("d-none");

      const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2acf1ddf33msh9ca05f097e59e91p174a98jsn1c796d74f037',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

      const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
      const response = await api.json();

      this.ui.displayDataGame(response);
      this.startEvent();
      loading.classList.add("d-none");
   }

   startEvent() {
      document.querySelectorAll(".card").forEach((item) => {
         item.addEventListener("click", () => {
            const id = item.dataset.id;
            this.showDetails(id);
         });
      });
   }

   showDetails(idGame) {
      const details = new Details(idGame);
      document.querySelector(".gameInf").classList.add("d-none");
      document.querySelector(".about").classList.remove("d-none");
   }
}