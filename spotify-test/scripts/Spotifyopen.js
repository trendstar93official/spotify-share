const App1 = new Vue({
  el: "#app1",
  data() {
    return {
      client_id: "b87edbdf16fd4b1b9c685c5f37defc10",
      scopes: "playlist-modify-public",
      redirect_uri: "https://stevecardigan.com/callback",
      playlist_id: "39e2IojbDT8iEuyaUyJRSL",
      me: null,
    };
  },
  methods: {
    login() {
      let popup = window.open(
        `https://accounts.spotify.com/authorize?client_id=${this.client_id}&response_type=token&redirect_uri=${this.redirect_uri}&scope=${this.scopes}&show_dialog=true`,
        "Login with Spotify",
        "width=800,height=600"
      );

      window.spotifyCallback = (payload) => {
        // alert(payload)

        popup.close();

        fetch(
            "https://api.spotify.com/v1/playlists/39e2IojbDT8iEuyaUyJRSL/followers", {
              method: "PUT",
              credentials: "same-origin",
              headers: {
                Authorization: `Bearer ${payload}`,
              },
            }
          )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.me = data;
          });
      };
    },
  },
  mounted() {
    this.token = window.location.hash.substr(1).split("&")[0].split("=")[1];

    if (this.token) {
      // alert(this.token)

      window.opener.spotifyCallback(this.token, this.playlist_id);
    }
  },
});

const App2 = new Vue({
  el: "#app2",
  data() {
    return {
      client_id: "7e6fcdbc5a50458d92d1e5add7023ee1",
      scopes: "playlist-modify-public",
      redirect_uri: "https://stevecardigan.com/callback-house",
      playlist_id: "5IjtxhzvywJewVeNtLjuKK",
      me: null,
    };
  },
  methods: {
    login() {
      let popup = window.open(
        `https://accounts.spotify.com/authorize?client_id=${this.client_id}&response_type=token&redirect_uri=${this.redirect_uri}&scope=${this.scopes}&show_dialog=true`,
        "Login with Spotify",
        "width=800,height=600"
      );

      window.spotifyCallback = (payload) => {
        // alert(payload)

        popup.close();

        fetch(
            "https://api.spotify.com/v1/playlists/5IjtxhzvywJewVeNtLjuKK/followers", {
              method: "PUT",
              credentials: "same-origin",
              headers: {
                Authorization: `Bearer ${payload}`,
              },
            }
          )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.me = data;
          });
      };
    },
  },
  mounted() {
    this.token = window.location.hash.substr(1).split("&")[0].split("=")[1];

    if (this.token) {
      // alert(this.token)

      window.opener.spotifyCallback(this.token, this.playlist_id);
    }
  },
});


const App3 = new Vue({
  el: "#app3",
  data() {
    return {
      client_id: "f1edf46a20ea429a8253249cabc4ebf5",
      scopes: "user-library-modify",
      redirect_uri: "https://stevecardigan.com/callback-podcast",
      ids: "2TI1cKOMftCHJsMjG5xiEN",
      me: null,
    };
  },
  methods: {
    login() {
      let popup = window.open(
        `https://accounts.spotify.com/authorize?client_id=${this.client_id}&response_type=token&redirect_uri=${this.redirect_uri}&scope=${this.scopes}&show_dialog=true`,
        "Login with Spotify",
        "width=800,height=600"
      );

      window.spotifyCallback = (payload) => {
        // alert(payload)

        popup.close();

        fetch(
            "https://api.spotify.com/v1/me/shows?ids=2TI1cKOMftCHJsMjG5xiEN", {
              method: "PUT",
              credentials: "same-origin",
              headers: {
                Authorization: `Bearer ${payload}`,
              },
            }
          )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.me = data;
          });
      };
    },
  },
  mounted() {
    this.token = window.location.hash.substr(1).split("&")[0].split("=")[1];

    if (this.token) {
      // alert(this.token)

      window.opener.spotifyCallback(this.token, this.ids);
    }
  },
});