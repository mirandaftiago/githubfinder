class GitHub {
  constructor() {
    this.client_id = '00721a573207f7595414';
    this.client_secret = 'b649fed86f850497c0c24f4ea9ba507a8de607f9';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}
                            &client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();
    return {
      profile
    }
  }
}