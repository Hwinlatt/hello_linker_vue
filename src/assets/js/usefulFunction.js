export default {
  methods: {
    stringToArray(string, space) {
      return string.split(space);
    },
    googleDriveIframe(link) {
        let watchLink = 'https://drive.google.com/file/d/' + this.stringToArray(link, '/')[5] + '/preview';
        return `<iframe id="movieIframe" src="${watchLink}" class="w-full" height="310" allow="autoplay" allowfullscreen></iframe>`
    },
    googleDriveDownload(link) {
      if (!link.includes('folders')) {
        return `https://drive.google.com/uc?export=download&id=${this.stringToArray(link, '/')[5]}`
      }
      return link
    },
    // Generate Random Six Number 
    makeId(length) {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result;
    },
  }
}