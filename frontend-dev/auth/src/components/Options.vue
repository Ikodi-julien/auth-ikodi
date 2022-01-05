<template>
  <div class="options" v-show="!user.isLoggued">
    <div class="options__socialaccounts">
      <a :href="`${this.GOOGLE_URL}?app=${this.app}`">
        <Button
          text="Google"
          color="white"
          icon='<img src="https://img.icons8.com/color/25/000000/google-logo.png"/>'
        />
      </a>
      <a :href="`${this.GITHUB_URL}?app=${this.app}`">
        <Button
          text="Github"
          color="white"
          icon='<img src="https://img.icons8.com/fluency/25/000000/github.png"/>'
        />
      </a>
      <!-- <Button
        text="Linkedin"
        color="#bdbdc6"
        icon='<img src="https://img.icons8.com/fluency/25/000000/linkedin.png"/>'
      /> -->
    </div>
    <Divider text="OU" />
    <div class="options__formcontainer">
      <LoginForm />
    </div>
    <p @click="$emit('toggle-sendpass')" className="options__forgotpassword" id="toggle-sendpass">
      Mot de passe perdu ?
    </p>
    <Divider />
    <div class="options__wide">
      <Button
        @click="$emit('toggle-signup')"
        text="Créer un compte"
        width="80%"
        className="--grey"
        dataTest="toggle-signup"
      />
    </div>
  </div>

  <div class="options" v-show="user.isLoggued">
    <h2>
      Vous êtes connecté en tant que <br /><em>{{ this.user.nickname }}</em>
    </h2>
    <!-- <div class="options__user__details">
      <p>id: {{ this.user.id }}</p>
      <p>pseudo: {{ this.user.nickname }}</p>
      <p>prénom: {{ this.user.firstname }}</p>
      <p>nom: {{ this.user.lastname }}</p>
      <p>email: {{ this.user.email }}</p>
    </div> -->
    <div class="options__wide">
      <div class="options__wide">
        <Button
          @click="$emit('toggle-profile')"
          text="Modifier mes infos"
          width="80%"
          className="--blue"
          dataTest="toggle-profile"
        />
      </div>
      <div class="options__wide">
        <Button @click="logout" text="Déconnexion" width="80%" className="--grey" />
      </div>
      <div class="options__wide">
        <Button @click="deleteMe" text="Supprimer ce compte" width="80%" className="--grey" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import Divider from "./Divider.vue";
import LoginForm from "./LoginForm.vue";
import { GOOGLE_URL, GITHUB_URL } from "../services/settings";
import axios from "axios";

export default {
  components: {
    Button,
    Divider,
    LoginForm,
  },
  data() {
    return {
      GOOGLE_URL,
      GITHUB_URL,
      app,
    };
  },
  props: {
    user: {
      type: Object,
      default: { isLoggued: false },
    },
  },
  methods: {
    logout() {
      console.log("youou");
      try {
        axios.post(
          "http://localhost:5050/logout",
          {},
          {
            withCredentials: true,
          }
        );
        alert("Vous êtes déconnecté");
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    },
    deleteMe() {
      if (
        window.confirm(
          `Confirmez-vous la suppression du compte associé à ${this.user.email} ? Cette action est définitive.`
        )
      ) {
        try {
          axios.delete("http://localhost:5050/me/credentials", { withCredentials: true });
          window.location.reload();
        } catch (error) {
          console.log(error);
          alert(`Il semble que cela n'a pas fonctionné, pour cette raison: "${error.toString()}"`);
        }
      }
    },
  },
  mounted() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    this.app = urlParams.get("app");
  },
  emits: ["toggle-signup", "toggle-sendpass", "toggle-profile"],
};
</script>

<style scoped lang="scss">
@import "../styles/vars.scss";

.options {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 55%;
  height: 100%;
  border: 1px solid rgb(16, 92, 105);
  border-radius: 5px;

  &__socialaccounts {
    height: $h-socialheight;
    min-height: 80px;
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 500px) {
      width: 95%;
    }
  }
  &__formcontainer {
    height: $h-formcontainer;
    min-height: 250px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__forgotpassword {
    padding: 1rem;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }
  &__wide {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    width: 100%;
  }

  & h2 {
    padding: 2rem 1rem;
    font-size: 1.3rem;
    text-align: center;
    line-height: 2.5rem;
    & em {
      display: inline-block;
      font-size: 1.2em;
      padding: 0.5rem;
      border-bottom: 1px solid rgb(16, 92, 105);
    }
  }

  &__user {
    &__details {
      width: 100%;
      padding: 2rem;
      & p {
        margin: 1rem 0;
      }
    }
  }
  @media (max-width: 750px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 100%;
    border: none;
  }
}
</style>
